import { generateUpdateMiddleware } from 'telegraf-middleware-console-time'
import { Bot, GrammyError, HttpError } from 'grammy'
import { BOT_TOKEN } from './env'
import { BotContext } from '../models/Context'

if (BOT_TOKEN === undefined) {
  throw new TypeError('BOT_TOKEN must be provided! BOT_TOKEN is undefined.')
}
export const bot = new Bot<BotContext>(BOT_TOKEN)

if (process.env.NODE_ENV !== 'production') {
  bot.use(generateUpdateMiddleware())
}

bot.catch(err => {
  const ctx = err.ctx
  console.error(`Error while handling update ${ctx.update.update_id}:`)
  const e = err.error
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description)
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e)
  } else {
    console.error('Unknown error:', e)
  }
})
