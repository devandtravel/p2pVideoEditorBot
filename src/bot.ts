import { Bot } from 'https://deno.land/x/grammy/mod.ts'
import 'https://deno.land/x/dotenv/load.ts'

const TOKEN = Deno.env.get('BOT_TOKEN')

if (TOKEN === undefined) {
  throw new Error('BOT_TOKEN must be provided! BOT_TOKEN is undefined.')
}
const bot = new Bot(TOKEN)

bot.command('start', ctx =>
  ctx.reply(
    'Привет! Готов помочь тебе с монтажом свадебных фильмов. Ответь на несколько вопросов.'
  )
)
bot.on('message', ctx => ctx.reply('Got another message!'))

bot.start()
