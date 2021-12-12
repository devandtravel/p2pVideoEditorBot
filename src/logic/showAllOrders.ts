import { BotContext } from '../models/Context'

export const showAllOrders = (ctx: BotContext) => ctx.reply(JSON.stringify(Object.entries(ctx.session.orders)))
