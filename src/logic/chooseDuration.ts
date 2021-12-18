import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { camerasKeyboard } from '../keyboards/keyboards'

export const chooseDuration = async (ctx: BotContext, orderId: string, duration: number) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    ctx.session.orders[userId].orders[orderId].duration = duration
    await ctx.reply(`${chooseKeyboardReplies.CHOOSE}до ${duration} мин.`)
    camerasKeyboard(ctx)
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
