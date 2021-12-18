import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { termsOfReferenceKeyboard } from '../keyboards/keyboards'
import { editPreferencesKeyboardActions } from '../keyboards/keyboardActions'
import { StatelessQuestion } from '@grammyjs/stateless-question'
import { bot } from '../init/bot'

export const chooseEditPreferences = async (ctx: BotContext, orderId: string, editPreferences: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    switch (editPreferences) {
      case true:
        const editPreferencesQuestion = new StatelessQuestion('editPreferences', async (ctx: BotContext) => {
          ctx.session.orders[userId].orders[orderId].editPreferences = ctx.message?.text
          await ctx.reply('Записал твои пожелания')
          await termsOfReferenceKeyboard(ctx)
        })
        bot.use(editPreferencesQuestion.middleware())
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${editPreferencesKeyboardActions.YES}`)
        editPreferencesQuestion.replyWithMarkdown(
          ctx,
          '↓ Введи и отправь мне твой комментарий с предпочтениями по монтажу ↓'
        )
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
