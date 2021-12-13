import { BotContext } from '../models/Context'
import { bot } from '../init/bot'

export const replyOnMessage = async (ctx: BotContext, userId: number, orderId: string, action: string) => {
  if (userId !== undefined && orderId !== '') {
    switch (action) {
      case isBotOnMsgTextEditPreferences:
        let isBotOnMsgTextEditPreferences = true
        bot.on('message:text', async ctx => {
          if (isBotOnMsgTextEditPreferences) {
          }
          isBotOnMsgTextEditPreferences = false
        })
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${editPreferencesKeyboardActions.NO}`)
        await termsOfReferenceKeyboard(ctx)
        break
      default:
        break
    }
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
