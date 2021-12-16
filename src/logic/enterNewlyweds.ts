import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { durationKeyboard } from '../keyboards/keyboards'
import { StatelessQuestion } from '@grammyjs/stateless-question'
import { bot } from '../init/bot'

export const enterNewlyweds = async (ctx: BotContext, orderId: string) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    const botCtx = ctx
    const newlywedsQuestion = new StatelessQuestion('newlyweds', async ctx => {
      ctx.message.text ? (botCtx.session.orders[userId].orders[orderId].newlyweds = ctx.message.text) : null
      await ctx.reply('Записал имена')
      await durationKeyboard(botCtx)
    })
    bot.use(newlywedsQuestion.middleware())
    newlywedsQuestion.replyWithMarkdown(ctx, '↓ Введи и отправь мне имена молодоженов ↓')
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
