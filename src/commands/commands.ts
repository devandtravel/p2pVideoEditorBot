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
  bot.command('start', (ctx: BotContext) => {
    const userId = ctx.from?.id
    const from = ctx.from
    if (userId !== undefined && userId in Object.keys(ctx.session.orders)) {
      console.log('TODO: add last login date')
    } else if (userId && from !== undefined) {
      ctx.session.orders[userId] = { user: ctx.from, orders: [] }
      console.log(ctx.session.orders)
    }

    mainKeyboard(ctx)
  })
  // bot.command('start', (ctx: BotContext) => ctx.session.orders ctx.from)
  bot.command('help', (ctx: BotContext) => ctx.reply(mainKeyboardReplies.HELP))
}
