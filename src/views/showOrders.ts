import { BotContext } from '../models/Context'
import { showDate } from '../utils/showDate'

export const showOrders = (ctx: BotContext) => {
  const userId: number | undefined = ctx.from?.id
  if (userId !== undefined && userId in Object.keys(ctx.session.orders)) {
    ctx.reply(
      'Твои заказы \n\n' +
        ctx.session.orders[userId].orders
          .map(
            order =>
              'название заказа: ' +
              order.title +
              '\nномер заказа: ' +
              order.id +
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
