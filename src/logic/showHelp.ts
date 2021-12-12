import { mainKeyboardReplies } from '../keyboards/keyboardReplies'
import { BotContext } from '../models/Context'

export const showHelp = (ctx: BotContext) => ctx.reply(mainKeyboardReplies.HELP)
