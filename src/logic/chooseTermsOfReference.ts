import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { successActions } from '../keyboards/keyboardReplies'
import { termsOfReferenceKeyboardActions } from '../keyboards/keyboardActions'
import { bot } from '../init/bot'
import { StatelessQuestion } from '@grammyjs/stateless-question'
import { mainKeyboard } from '../keyboards/keyboards'

export const chooseTermsOfReference = async (ctx: BotContext, orderId: string, termsOfReference: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    switch (termsOfReference) {
      case true:
        const botCtx = ctx
        const termsOfReferenceQuestion = new StatelessQuestion('termsOfReference', async (ctx: BotContext) => {
          if (ctx.message?.document) {
            const file = await ctx.getFile()
            const fileName = ctx.message?.document?.file_name
            await file.download(
              `/home/romv2/projects_wsl/telegram/p2pVideoEditorBot/files/${userId}_${orderId}_termsOfReference_${fileName}`
            )
            botCtx.session.orders[userId].orders[orderId].termsOfReference = ctx.message.document
            await ctx.reply('Файл с ТЗ получен')
            await ctx.reply(successActions.MESSAGE)
            mainKeyboard(botCtx)
          } else {
            await ctx.reply('Ты передумал отправлять ТЗ')
            await ctx.reply(successActions.MESSAGE)
            mainKeyboard(botCtx)
          }
        })
        bot.use(termsOfReferenceQuestion.middleware())
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${termsOfReferenceKeyboardActions.YES}`)
        termsOfReferenceQuestion.replyWithMarkdown(
          ctx,
          '↓ Прикрепи и отправь мне файл с ТЗ (не более 20 Мб, .pdf). ↓\nЕсли передумаешь оправлять файл, просто ответь любым текстом на это сообщение.'
        )
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${termsOfReferenceKeyboardActions.NO}`)
        await ctx.reply(successActions.MESSAGE)
        mainKeyboard(ctx)

        break
      default:
        break
    }
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
