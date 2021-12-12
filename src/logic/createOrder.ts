import { BotContext } from '../models/Context'
import { v4 } from 'uuid'
import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { durationKeyboard } from '../keyboards/keyboards'

export const createOrder = async (ctx: BotContext) => {
  await ctx.reply(mainKeyboardReplies.CREATE_ORDER)
  const userId = ctx.from?.id
  const from = ctx.from
  if (userId !== undefined && from !== undefined) {
    if (!ctx.session.orders.hasOwnProperty(userId)) {
      await ctx.reply(mainKeyboardReplies.exeptions.USER_NOT_FOUND)
      ctx.session.orders[userId] = { user: from, orders: {} }
    }
    const orderId = v4()
    await ctx.reply('TODO: add today date of order, add wedding date')
    ctx.session.orders[userId].orders[orderId] = {
      title: `${ctx.from?.first_name} ${ctx.from?.last_name} ${userId.toString()}`,
      date: new Date(),
      weddingDate: new Date(),
      details: '',
      duration: 15,
      numberOfCameras: 1,
      numberOfDrones: 1,
      prepayment: 0,
      price: 0,
      music: false,
      colorization: false,
      startEdit: false,
      editPreferences: ''
    }
    await ctx.reply('TODO: empty order created')
    durationKeyboard(ctx)
    return orderId
  } else {
    await ctx.reply(mainKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
    return ''
  }
}
