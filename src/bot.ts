/* #region  IMPORTS */
import dotenv from 'dotenv'
import { Bot } from 'grammy'
import { testOrders } from './models/testOrders.js'
/* #endregion */
/* #region  SETUP ENVIROMENT */
dotenv.config()
/* #endregion */
/* #region  INITIALIZE BOT */
const BOT_TOKEN = process.env.BOT_TOKEN
if (BOT_TOKEN === undefined) {
  throw new TypeError('BOT_TOKEN must be provided! BOT_TOKEN is undefined.')
}
const bot = new Bot(BOT_TOKEN)
/* #endregion */
/* #region  INITIALIZE DATABASE */
const orders = testOrders
/* #endregion */
bot.command('start', ctx =>
  ctx.reply(
    'Привет! Готов помочь тебе с монтажом свадебных фильмов. Ответь на несколько вопросов.'
  )
)
bot.on('message', ctx =>
  ctx.reply('Я не знаю, что ответить на такое сообщение.')
)

/* #region  START BOT */
bot.start()
/* #endregion */
