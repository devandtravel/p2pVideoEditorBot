import { Context, SessionFlavor } from 'grammy'
import { Order } from './testOrders'

export interface SessionData {
  orders: [Order]
}
export type BotContext = Context & SessionFlavor<SessionData>
