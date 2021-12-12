import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { BotContext } from '../models/Context'

export const showRules = (ctx: BotContext) =>
  ctx.reply(mainKeyboardReplies.RULES)
