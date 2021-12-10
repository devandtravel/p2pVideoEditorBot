import { Context, SessionFlavor } from 'grammy'
import { Orders } from '../types/Orders'

export interface SessionData {
  orders: Orders
}
export type BotContext = Context & SessionFlavor<SessionData>
