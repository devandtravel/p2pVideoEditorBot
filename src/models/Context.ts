import { Context, SessionFlavor } from 'grammy'
import { Order } from '../types/Order'

export interface SessionData {
  orders: Order[]
}
export type BotContext = Context & SessionFlavor<SessionData>
