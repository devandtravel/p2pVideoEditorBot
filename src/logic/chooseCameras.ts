import { BotContext } from '../models/Context'
import { chooseKeyboardReplies, prices } from '../keyboards/keyboardReplies'
import { editKeyboard } from '../keyboards/keyboards'
import { camerasKeyboardActions } from '../keyboards/keyboardActions'

export const chooseCameras = async (ctx: BotContext, orderId: string, cameras: number) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    ctx.session.orders[userId].orders[orderId].numberOfCameras = cameras
    ctx.session.orders[userId].orders[orderId].numberOfDrones = 1
    switch (cameras) {
      case 1:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS1}`)
        switch (ctx.session.orders[userId].orders[orderId].duration) {
          case 15:
            await ctx.reply(prices.PRICE_DURATION15_CAMERAS1)
            break
          case 30:
            await ctx.reply(prices.PRICE_DURATION30_CAMERAS1)
            break
          case 45:
            await ctx.reply(prices.PRICE_DURATION45_CAMERAS1)
            break
          default:
            break
        }
        break
      case 2:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS2}`)
        switch (ctx.session.orders[userId].orders[orderId].duration) {
          case 15:
            await ctx.reply(prices.PRICE_DURATION15_CAMERAS2)
            break
          case 30:
            await ctx.reply(prices.PRICE_DURATION30_CAMERAS2)
            break
          case 45:
            await ctx.reply(prices.PRICE_DURATION45_CAMERAS2)
            break
          default:
            break
        }
        break
      case 3:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS3}`)
        switch (ctx.session.orders[userId].orders[orderId].duration) {
          case 15:
            await ctx.reply(prices.PRICE_DURATION15_CAMERAS3)
            break
          case 30:
            await ctx.reply(prices.PRICE_DURATION30_CAMERAS3)
            break
          case 45:
            await ctx.reply(prices.PRICE_DURATION45_CAMERAS3)
            break
          default:
            break
        }
        break
      default:
        break
    }
    editKeyboard(ctx)
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
