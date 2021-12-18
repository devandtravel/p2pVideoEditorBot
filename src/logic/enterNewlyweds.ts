import { BotContext } from '../models/Context'
import { chooseKeyboardReplies } from '../keyboards/keyboardReplies'
import { durationKeyboard } from '../keyboards/keyboards'
import { StatelessQuestion } from '@grammyjs/stateless-question'
import { bot } from '../init/bot'

export const enterNewlyweds = async (ctx: BotContext, orderId: string) => {
  const userId = ctx.from?.id
  if (userId !== undefined && orderId !== '') {
    const newlywedsQuestion = new StatelessQuestion('newlyweds', async (ctx: BotContext) => {
      ctx.message?.text ? (ctx.session.orders[userId].orders[orderId].newlyweds = ctx.message?.text) : null
      await ctx.reply('Записал имена')
      await durationKeyboard(ctx)
    })
    bot.use(newlywedsQuestion.middleware())
    newlywedsQuestion.replyWithMarkdown(ctx, '↓ Введи и отправь мне имена молодоженов ↓')
  } else ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION)
}
