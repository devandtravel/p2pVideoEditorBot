import { session } from 'grammy'
import { bot } from './init/bot'
import { SessionData } from './models/Context'
import { run } from '@grammyjs/runner'
import { testOrders } from './models/testOrders'
import { ignoreOldMessageUpdates } from './middlewares/ignoreOldMessageUpdates'
import { setBotCommands } from './commands/commands'
import {
  camerasKeyboardActions,
  durationKeyboardActions,
  mainKeyboardActions,
  startEditKeyboardActions
} from './keyboards/keyboardActions'
import { createOrder } from './logic/createOrder'
import { showUserOrders } from './logic/showUserOrders'
import { showRules } from './logic/showRules'
import { showHelp } from './logic/showHelp'
import { chooseDuration } from './logic/chooseDuration'
import { chooseCameras } from './logic/chooseCameras'
import { chooseStartEdit } from './logic/chooseStartEdit'

async function runApp() {
  let orderId: string = ''
  const initialOrders = testOrders
  // Middlewares
  bot.use(
    session({
      initial(): SessionData {
        return { orders: initialOrders }
      }
    })
  )
  bot.use(ignoreOldMessageUpdates)
  // Commands
  await setBotCommands()
  // Hears mainKeyboardActions
  bot.hears(mainKeyboardActions.CREATE_ORDER, async ctx => {
    console.log(orderId)
    orderId = await createOrder(ctx)
  })
  bot.hears(mainKeyboardActions.CUSTUMER_ORDERS, ctx => showUserOrders(ctx))
  bot.hears(mainKeyboardActions.RULES, ctx => showRules(ctx))
  bot.hears(mainKeyboardActions.HELP, ctx => showHelp(ctx))
  // Hears durationKeyboardActions
  bot.hears(durationKeyboardActions.DURATION15, ctx => chooseDuration(ctx, orderId, 15))
  bot.hears(durationKeyboardActions.DURATION30, ctx => chooseDuration(ctx, orderId, 30))
  bot.hears(durationKeyboardActions.DURATION45, ctx => chooseDuration(ctx, orderId, 45))
  // Hears camerasKeyboardActions
  bot.hears(camerasKeyboardActions.CAMERAS1, ctx => chooseCameras(ctx, orderId, 1))
  bot.hears(camerasKeyboardActions.CAMERAS2, ctx => chooseCameras(ctx, orderId, 2))
  bot.hears(camerasKeyboardActions.CAMERAS3, ctx => chooseCameras(ctx, orderId, 3))
  // Hears startEditKeyboardActions
  bot.hears(startEditKeyboardActions.YES, ctx => chooseStartEdit(ctx, orderId, true))
  bot.hears(startEditKeyboardActions.NO, ctx => chooseStartEdit(ctx, orderId, false))
  // Hears startEditKeyboardActions
  bot.hears(startEditKeyboardActions.YES, ctx => chooseStartEdit(ctx, orderId, true))
  bot.hears(startEditKeyboardActions.NO, ctx => chooseStartEdit(ctx, orderId, false))
  // Errors
  bot.catch(console.error)
  // Start bot
  const runner = run(bot)
  const stopRunner = () => runner.isRunning() && runner.stop()
  process.once('SIGINT', stopRunner)
  process.once('SIGTERM', stopRunner)
}

void runApp()
