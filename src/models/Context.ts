import { Context, SessionFlavor } from 'grammy'
import { FileFlavor } from '@grammyjs/files'
import { Orders } from '../types/Orders'

export interface SessionData {
  orders: Orders
}
export type BotSessionsContext = Context & SessionFlavor<SessionData>
export type BotContext = FileFlavor<BotSessionsContext>
