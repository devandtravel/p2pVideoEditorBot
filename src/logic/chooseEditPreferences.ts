import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { termsOfReferenceKeyboard } from '../keyboards/keyboards'
import { editPreferencesKeyboardActions } from '../keyboards/keyboardActions'
import { bot } from '../init/bot'

export const chooseEditPreferences = async (ctx: BotContext, orderId: string, editPreferences: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    switch (editPreferences) {
      case true:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${editPreferencesKeyboardActions.YES}`)
        await ctx.reply('↓ Введи и отправь мне твой комментарий с предпочтениями по монтажу ↓', {
          reply_markup: { force_reply: true }
        })
        replyOnMessage(ctx, 'action')
        let isBotOnMsgTextEditPreferences = true
        bot.on('message:text', async ctx => {
          if (isBotOnMsgTextEditPreferences) {
            ctx.session.orders[userId].orders[orderId].editPreferences = ctx.msg.text
            await ctx.reply('Записал твои пожелания')
            await termsOfReferenceKeyboard(ctx)
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
