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
              (order.weddingDate ? '\nдата свадьбы: ' + order.weddingDate : '') +
              (order.newlyweds ? '\nимена молодоженов: ' + order.newlyweds : '') +
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
              (order.price ? order.price : 'уточняется') +
              '\nпредпочтения по монтажу: ' +
              (order.editPreferences ? order.editPreferences : editPreferencesKeyboardActions.NO) +
              (order.details ? '\nкраткие детали заказа:\n' + order.details : '') +
              (order.termsOfReference ? '\nназвание файла с ТЗ: ' + order.termsOfReference.file_name : '') +
              (order.lut ? '\nназвание файла с LUT: ' + order.lut.file_name : '') +
              (order.musicFile ? '\nназвание файла с музыкой: ' + order.musicFile.file_name : '') +
              '\n\n'
          )
          .join('')
    )
  } else {
    ctx.reply('У тебя еще нет заказов')
  }
}
