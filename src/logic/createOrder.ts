import { BotContext } from '../models/Context'
import { v4 } from 'uuid'
import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { durationKeyboard } from '../keyboards/keyboards'
import { showAllOrders } from './showAllOrders'

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
    ctx.session.orders[userId].orders[orderId] = {
      title: 'Название заказа',
      date: new Date(),
      weddingDate: new Date(),
      details: 'Детали заказа',
      duration: 15,
      numberOfCameras: 1,
      numberOfDrones: 1,
      price: 0,
      music: false,
      colorization: false,
      startEdit: false,
      editPreferences: ''
    }
    ctx.reply('TODO: Черновик заказа создан')
    durationKeyboard(ctx)
    return orderId
  } else {
    await ctx.reply(mainKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
    return ''
  }
}
