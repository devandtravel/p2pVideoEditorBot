import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { StatelessQuestion } from '@grammyjs/stateless-question'
import { bot } from '../init/bot'
import { enterNewlyweds } from './enterNewlyweds'

export const enterWeddingDate = async (ctx: BotContext, orderId: string) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    const weddingDateQuestion = new StatelessQuestion('weddingDate', async (ctx: BotContext) => {
      ctx.message?.text ? (ctx.session.orders[userId].orders[orderId].weddingDate = ctx.message.text) : null
      await ctx.reply('Записал дату')
      await enterNewlyweds(ctx, orderId)
    })
    bot.use(weddingDateQuestion.middleware())
    weddingDateQuestion.replyWithMarkdown(ctx, '↓ Введи и отправь мне дату свадьбы ↓')
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
