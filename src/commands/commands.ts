import { mainKeyboard } from '../keyboards/keyboards'
import { bot } from '../init/bot'
import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { showUserOrders } from '../logic/showUserOrders'
import { showAllOrders } from '../logic/showAllOrders'

export const setBotCommands = async () => {
  const commands = [
    { command: 'start', description: 'Запустить бота заново' },
    { command: 'orders', description: 'Показать мои заказы' },
    { command: 'orders_all', description: 'Показать все заказы' },
    { command: 'help', description: 'Помощь' }
  ]

  await bot.api.setMyCommands(commands)
  bot.command('start', ctx => {
    const userId = ctx.from?.id
    const from = ctx.from
    if (userId !== undefined && ctx.session.orders.hasOwnProperty(userId)) {
      console.log('TODO: add last login date and display your last login date in bot')
      ctx.reply('Ты есть в базе пользователей, можешь создавать заказ')
    } else if (userId !== undefined && from !== undefined) {
      ctx.reply('Тебя нет в базе пользователей, добавляю')
      ctx.session.orders[userId] = { user: from, orders: {} }
    }
    mainKeyboard(ctx)
  })
  bot.command('orders', ctx => showUserOrders(ctx))
  bot.command('orders_all', ctx => showAllOrders(ctx))
  bot.command('help', ctx => ctx.reply(mainKeyboardReplies.HELP))
}
