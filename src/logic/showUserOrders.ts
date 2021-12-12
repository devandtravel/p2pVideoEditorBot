import { BotContext } from '../models/Context'
import { showDate } from '../utils/showDate'

export const showUserOrders = (ctx: BotContext) => {
  const userId = ctx.from?.id
  if (
    userId !== undefined &&
    ctx.session.orders.hasOwnProperty(userId) &&
    Object.keys(ctx.session.orders[userId].orders).length
  ) {
    ctx.reply(
      'Твои заказы \n\n' +
        Object.entries(ctx.session.orders[userId].orders)
          .map(
            ([orderId, order]) =>
              'название заказа: ' +
              order.title +
              '\nномер заказа: ' +
              orderId +
              '\nдата заказа: ' +
              showDate(order.date) +
              '\nдата свадьбы: ' +
              showDate(order.weddingDate) +
              '\nкраткие детали заказа:\n' +
              order.details +
              '\n\n'
          )
          .join('')
    )
  } else {
    ctx.reply('У тебя еще нет заказов')
  }
}
