import { session } from 'grammy'
import { bot } from './init/bot'
import { SessionData } from './models/Context'
import { run } from '@grammyjs/runner'
import { testOrders } from './models/testOrders'
import { ignoreOldMessageUpdates } from './middlewares/ignoreOldMessageUpdates'
import { setBotCommands } from './commands/commands'
import { mainKeyboardActions } from './keyboards/keyboardActions'
import { mainKeyboardReplies } from './keyboards/keyboardReplies'
import { showOrders } from './views/showOrders'

async function runApp() {
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
  // Hears

  bot.hears(mainKeyboardActions.CUSTUMER_ORDERS, ctx => showOrders(ctx))
  bot.hears(mainKeyboardActions.RULES, ctx =>
    ctx.reply(mainKeyboardReplies.RULES)
  )
  bot.hears(mainKeyboardActions.HELP, ctx =>
    ctx.reply(mainKeyboardReplies.HELP)
  )

  bot.hears(mainKeyboardActions.CREATE_ORDER, ctx => '')

  // Errors
  bot.catch(console.error)
  // Start bot
  const runner = run(bot)
  const stopRunner = () => runner.isRunning() && runner.stop()
  process.once('SIGINT', stopRunner)
  process.once('SIGTERM', stopRunner)
}

void runApp()
