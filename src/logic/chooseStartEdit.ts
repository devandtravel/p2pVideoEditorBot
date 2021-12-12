import { BotContext } from '../models/Context'
import { chooseKeyboardReplies, prices } from '../keyboards/keyboardReplies'
import { colorizationKeyboard, mainKeyboard } from '../keyboards/keyboards'
import { startEditKeyboardActions } from '../keyboards/keyboardActions'

export const chooseStartEdit = async (ctx: BotContext, orderId: string, startEdit: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    ctx.session.orders[userId].orders[orderId].startEdit = startEdit
    switch (startEdit) {
      case true:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${startEditKeyboardActions.YES}`)
        colorizationKeyboard(ctx)
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${startEditKeyboardActions.NO}`)
        ctx.session.orders[userId].orders[orderId].startEdit = startEdit
        delete ctx.session.orders[userId].orders[orderId]
        mainKeyboard(ctx)
        break
      default:
        break
    }
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
