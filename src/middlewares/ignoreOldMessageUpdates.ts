import { NextFunction } from 'grammy'
import { BotContext } from '../models/Context'

const threshold = 15 * 60 // 5 minutes
export function ignoreOldMessageUpdates(ctx: BotContext, next: NextFunction) {
  // Check if context update type is a message
  if (ctx.message) {
    if (new Date().getTime() / 1000 - ctx.message.date < threshold) {
      return next()
    } else {
      console.log(
        `Ignoring message from ${ctx.from?.id} at ${ctx.chat?.id} (${new Date().getTime() / 1000}:${ctx.message.date})`
      )
    }
  } else {
    return next()
  }
}
