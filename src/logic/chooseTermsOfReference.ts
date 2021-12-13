import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { successActions } from '../keyboards/keyboardReplies'
import { colorizationKeyboardActions, termsOfReferenceKeyboardActions } from '../keyboards/keyboardActions'
import { bot } from '../init/bot'

export const chooseTermsOfReference = async (ctx: BotContext, orderId: string, termsOfReference: boolean) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    switch (termsOfReference) {
      case true:
        await ctx.reply(
          '↓ Прикрепи и отправь мне файл с ТЗ (неболее 20 Мб, .pdf). ↓\nЕсли передумаешь оправлять файл, просто ответь любым текстом на это сообщение.',
          {
            reply_markup: { force_reply: true }
          }
        )
        let isBotOnMsgTextTermsOfReference = true
        let isBotOnFileTermsOfReference = true
        bot.on('message:text', async ctx => {
          await ctx.reply('Ты передумал отправлять ТЗ')
          if (isBotOnMsgTextTermsOfReference) {
            await ctx.reply('Ты передумал отправлять ТЗ')
            await ctx.reply(successActions.MESSAGE)
          }
          isBotOnMsgTextTermsOfReference = false
          isBotOnFileTermsOfReference = false
        })

        // isBotOnFileTermsOfReference &&
        //   bot.on(':file', async ctx => {
        //     if (isBotOnFileTermsOfReference) {
        //       ctx.session.orders[userId].orders[orderId]['termsOfReference'] = {
        //         userFileName: '',
        //         storeFileName: '',
        //         size: 0,
        //         hash: ''
        //       }
        //       await ctx.reply('TODO: handle file to database and session object')
        //       await ctx.reply('ТЗ принято')
        //       await ctx.reply(successActions.MESSAGE)
        //     }
        //     isBotOnMsgTextTermsOfReference = false
        //     isBotOnFileTermsOfReference = false
        //   })
        break
      case false:
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${termsOfReferenceKeyboardActions.NO}`)
        await ctx.reply(successActions.MESSAGE)

        break
      default:
        break
    }
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
