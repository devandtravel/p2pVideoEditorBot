import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { preferencesKeyboard } from '../keyboards/keyboards'
import { musicKeyboardActions } from '../keyboards/keyboardActions'

export const chooseMusic = async (ctx: BotContext, orderId: string, music: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    ctx.session.orders[userId].orders[orderId].music = music
    switch (music) {
      case true:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${musicKeyboardActions.YOURS}`)
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${musicKeyboardActions.OUR}`)
        break
      default:
        break
    }
    preferencesKeyboard(ctx)
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
