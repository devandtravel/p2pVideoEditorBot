import { bot } from './init/bot';
import { run } from '@grammyjs/runner';
import { ignoreOldMessageUpdates } from './middlewares/ignoreOldMessageUpdates';
import { setBotCommands } from './commands/commands';
import { camerasKeyboardActions, colorizationKeyboardActions, durationKeyboardActions, editPreferencesKeyboardActions, mainKeyboardActions, musicKeyboardActions, startEditKeyboardActions, termsOfReferenceKeyboardActions } from './keyboards/keyboardActions';
import { createOrder } from './logic/createOrder';
import { showUserOrders } from './logic/showUserOrders';
import { showRules } from './logic/showRules';
import { showHelp } from './logic/showHelp';
import { chooseDuration } from './logic/chooseDuration';
import { chooseCameras } from './logic/chooseCameras';
import { chooseStartEdit } from './logic/chooseStartEdit';
import { chooseColorization } from './logic/chooseColorization';
import { chooseMusic } from './logic/chooseMusic';
import { chooseEditPreferences } from './logic/chooseEditPreferences';
import { chooseTermsOfReference } from './logic/chooseTermsOfReference';
import { hydrateFiles } from '@grammyjs/files';
import { BOT_TOKEN, FIREBASE_SERVICE_ACCOUNT_KEY, PROJECT_ID } from './init/env';
import { session } from 'grammy';
import { adapter } from '@grammyjs/storage-firestore';
import { Firestore } from '@google-cloud/firestore';
async function runApp() {
    let orderId = '';
    const initialOrders = {};
    if (BOT_TOKEN === undefined) {
        throw new TypeError('BOT_TOKEN must be provided! BOT_TOKEN is undefined.');
    }
    if (FIREBASE_SERVICE_ACCOUNT_KEY === undefined) {
        throw new TypeError('FIREBASE_SERVICE_ACCOUNT_KEY must be provided! FIREBASE_SERVICE_ACCOUNT_KEY is undefined.');
    }
    // console.log(typeof CLIENT_EMAIL, typeof PRIVATE_KEY)
    // Firestore connect
    const db = new Firestore({
        projectId: PROJECT_ID,
        credentials: {
            client_email: JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY).client_email,
            private_key: JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY).private_key
        }
    });
    // Middlewares
    bot.use(session({
        initial() {
            return { orders: initialOrders };
        },
        storage: adapter(db.collection('sessions'))
    }));
    bot.use(ignoreOldMessageUpdates);
    bot.api.config.use(hydrateFiles(BOT_TOKEN));
    // Commands
    await setBotCommands();
    // Hears mainKeyboardActions
    bot.hears(mainKeyboardActions.CREATE_ORDER, async (ctx) => {
        console.log(orderId);
        orderId = await createOrder(ctx);
    });
    bot.hears(mainKeyboardActions.CUSTUMER_ORDERS, ctx => showUserOrders(ctx));
    bot.hears(mainKeyboardActions.RULES, ctx => showRules(ctx));
    bot.hears(mainKeyboardActions.HELP, ctx => showHelp(ctx));
    // Hears durationKeyboardActions
    bot.hears(durationKeyboardActions.DURATION15, ctx => chooseDuration(ctx, orderId, 15));
    bot.hears(durationKeyboardActions.DURATION30, ctx => chooseDuration(ctx, orderId, 30));
    bot.hears(durationKeyboardActions.DURATION45, ctx => chooseDuration(ctx, orderId, 45));
    // Hears camerasKeyboardActions
    bot.hears(camerasKeyboardActions.CAMERAS1, ctx => chooseCameras(ctx, orderId, 1));
    bot.hears(camerasKeyboardActions.CAMERAS2, ctx => chooseCameras(ctx, orderId, 2));
    bot.hears(camerasKeyboardActions.CAMERAS3, ctx => chooseCameras(ctx, orderId, 3));
    // Hears startEditKeyboardActions
    bot.hears(startEditKeyboardActions.YES, ctx => chooseStartEdit(ctx, orderId, true));
    bot.hears(startEditKeyboardActions.NO, ctx => chooseStartEdit(ctx, orderId, false));
    // Hears colorizationKeyboardActions
    bot.hears(colorizationKeyboardActions.YES, ctx => chooseColorization(ctx, orderId, true));
    bot.hears(colorizationKeyboardActions.NO, ctx => chooseColorization(ctx, orderId, false));
    // Hears musicKeyboardActions
    bot.hears(musicKeyboardActions.YOURS, ctx => chooseMusic(ctx, orderId, true));
    bot.hears(musicKeyboardActions.OUR, ctx => chooseMusic(ctx, orderId, false));
    // Hears editPreferencesKeyboardActions
    bot.hears(editPreferencesKeyboardActions.YES, ctx => chooseEditPreferences(ctx, orderId, true));
    bot.hears(editPreferencesKeyboardActions.NO, ctx => chooseEditPreferences(ctx, orderId, false));
    // Hears termsOfReferenceKeyboardActions
    bot.hears(termsOfReferenceKeyboardActions.YES, ctx => chooseTermsOfReference(ctx, orderId, true));
    bot.hears(termsOfReferenceKeyboardActions.NO, ctx => chooseTermsOfReference(ctx, orderId, false));
    // Errors
    bot.catch(console.error);
    // Start bot
    const runner = run(bot);
    const stopRunner = () => runner.isRunning() && runner.stop();
    process.once('SIGINT', stopRunner);
    process.once('SIGTERM', stopRunner);
}
void runApp();
