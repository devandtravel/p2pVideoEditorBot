import { session } from 'grammy'
import { bot } from './init/bot'
import { SessionData } from './models/Context'
import { mainKeyboard } from './messages/keyboards'
import { run } from '@grammyjs/runner'
import { testOrders } from './models/testOrders'
import { ignoreOldMessageUpdates } from './middlewares/ignoreOldMessageUpdates'
import { commandsActions, helpActions } from './messages/actions'

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
  await bot.api.setMyCommands(commandsActions)
  bot.command('start', ctx => mainKeyboard(ctx))
  bot.command('help', ctx => ctx.reply(helpActions.MESSAGE))
  bot.command('orders', ctx =>
    ctx.reply(`ORDERS \n ${JSON.stringify(ctx.session.orders)}!`)
  )
  // Errors
  bot.catch(console.error)
  // Start bot
  const runner = run(bot)
  const stopRunner = () => runner.isRunning() && runner.stop()
  process.once('SIGINT', stopRunner)
  process.once('SIGTERM', stopRunner)
}

void runApp()
