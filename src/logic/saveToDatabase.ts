import { writeFileSync } from 'fs'
import { BotContext } from './../models/Context'

export const saveToDatabase = async (ctx: BotContext) => {
  writeFileSync(
    // '/home/romv2/projects_wsl/telegram/p2pVideoEditorBot/files/orders.json',
    'files/orders.json',
    JSON.stringify(ctx.session.orders, null, 2),
    'utf-8'
  )
}
