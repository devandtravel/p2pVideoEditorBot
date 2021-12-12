import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { musicKeyboard } from '../keyboards/keyboards'
import { colorizationKeyboardActions } from '../keyboards/keyboardActions'

export const chooseColorization = async (ctx: BotContext, orderId: string, colorization: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    ctx.session.orders[userId].orders[orderId].colorization = colorization
    switch (colorization) {
      case true:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${colorizationKeyboardActions.YES}`)
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${colorizationKeyboardActions.NO}`)
        break
      default:
        break
    }
    musicKeyboard(ctx)
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
