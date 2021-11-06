/* #region  IMPORTS */
import dotenv from 'dotenv'
import { Bot } from 'grammy'
import {
  mainMenuActions,
  durationMenuActions,
  camerasMenuActions,
  prices,
  editMenuActions,
  colorizationMenuActions,
  musicMenuActions,
  editPreferencesMenuActions,
  termsOfReferenceMenuActions
} from './actions/actions.js'
import {
  showMainMenu,
  showDurationMenu,
  showCamerasMenu,
  showEditMenu,
  showColorizationMenu,
  showMusicMenu,
  showEditPreferencesMenu,
  showTermsOfReferenceMenu
} from './components/showMenus.js'
import { testOrders } from './models/testOrders.js'
/* #endregion */
/* #region  SETUP ENVIROMENT */
dotenv.config()
/* #endregion */
/* #region  INITIALIZE BOT */
const BOT_TOKEN = process.env.BOT_TOKEN
if (BOT_TOKEN === undefined) {
  throw new TypeError('BOT_TOKEN must be provided!')
}
const bot = new Bot(BOT_TOKEN)
// bot.use(Telegraf.log())
/* #endregion */
/* #region  INITIALIZE DATABASE */
const order = testOrders
/* #endregion */

/* #region  START BOT */
bot.start()
/* #endregion */
/* #region  STOP BOT */
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
/* #endregion */
