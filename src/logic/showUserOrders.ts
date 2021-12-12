import {
  colorizationKeyboardActions,
  editPreferencesKeyboardActions,
  musicKeyboardActions
} from '../keyboards/keyboardActions'
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
      'Твои заказы \n' +
        Object.entries(ctx.session.orders[userId].orders)
          .map(
            ([orderId, order]) =>
              '\nномер заказа: ' +
              orderId +
              '\nназвание заказа: ' +
              order.title +
              '\nдата заказа: ' +
              showDate(order.date) +
              '\nдата свадьбы: ' +
              showDate(order.weddingDate) +
              '\nдлительность видео: ' +
              order.duration +
              '\nколичество камер: ' +
              order.numberOfCameras +
              '\nколичество дронов: ' +
              order.numberOfDrones +
              '\nмузыка: ' +
              (order.music ? musicKeyboardActions.YOURS : musicKeyboardActions.OUR) +
              '\nпокраска: ' +
              (order.colorization ? colorizationKeyboardActions.YES : colorizationKeyboardActions.NO) +
              '\nзапрос на начало монтажа: ' +
              (order.startEdit ? 'сделан' : 'не сделан') +
              '\nпредоплата: ' +
              order.prepayment +
              '\nцена: ' +
              order.price +
              '\nпредпочтения по монтажу: ' +
              (order.editPreferences ? order.editPreferences : editPreferencesKeyboardActions.NO) +
              (order.details ? '\nкраткие детали заказа:\n' + order.details : '') +
              '\n\n'
          )
          .join('')
    )
  } else {
    ctx.reply('У тебя еще нет заказов')
  }
}
