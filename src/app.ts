import { session } from 'grammy'
import { bot } from './init/bot'
import { SessionData } from './models/Context'
import { mainKeyboard } from './messages/keyboards'
import { run } from '@grammyjs/runner'
import { testOrders } from './models/testOrders'
import { ignoreOldMessageUpdates } from './middlewares/ignoreOldMessageUpdates'

const initialOrders = testOrders

async function runApp() {
  console.log('Starting app...')
  // const orders = testOrders
  console.log('Database NOT connected')
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
  await bot.api.setMyCommands([
    { command: 'start', description: 'Запустить бота заново' },
    { command: 'orders', description: '[admin] Показать заказы' },
    { command: 'help', description: 'Помощь' }
  ])

  bot.command('start', async ctx => {
    await ctx.reply(
      'Привет! Готов помочь тебе с монтажом свадебных фильмов. Ответь на несколько вопросов.',
      {
        reply_markup: {
          resize_keyboard: true,
          remove_keyboard: true,
          one_time_keyboard: true,
          keyboard: mainKeyboard.build()
        }
      }
    )
  })
  bot.command('help', ctx => {
    ctx.reply(
      'Бот соединит тебя с видеомонтажером и позволит вам вместе создать свадебное видео.'
    )
  })

  bot.command('orders', async ctx => {
    await ctx.reply(`ORDERS \n ${JSON.stringify(ctx.session.orders)}!`)
  })
  // Errors
  bot.catch(console.error)
  // Start bot
  const runner = run(bot)
  const stopRunner = () => runner.isRunning() && runner.stop()
  process.once('SIGINT', stopRunner)
  process.once('SIGTERM', stopRunner)
}

void runApp()
