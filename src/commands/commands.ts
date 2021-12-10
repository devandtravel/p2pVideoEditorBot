import { mainKeyboard } from '../keyboards/keyboards'
import { bot } from '../init/bot'
import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { BotContext } from '../models/Context'

export const setBotCommands = async () => {
  const commands = [
    { command: 'start', description: 'Запустить бота заново' },
    { command: 'help', description: 'Помощь' }
  ]

  await bot.api.setMyCommands(commands)
  bot.command('start', (ctx: BotContext) => mainKeyboard(ctx))
  bot.command('help', (ctx: BotContext) => ctx.reply(mainKeyboardReplies.HELP))
}
