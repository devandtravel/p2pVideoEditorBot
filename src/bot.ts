import { Bot } from 'https://deno.land/x/grammy/mod.ts'
import 'https://deno.land/x/dotenv/load.ts'

const bot = new Bot(Deno.env.get('BOT_TOKEN'))

bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))
bot.on('message', ctx => ctx.reply('Got another message!'))

bot.start()
