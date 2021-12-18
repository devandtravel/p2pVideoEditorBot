import { Keyboard } from 'grammy';
import { mainKeyboardActions, durationKeyboardActions, camerasKeyboardActions, startEditKeyboardActions, colorizationKeyboardActions, musicKeyboardActions, editPreferencesKeyboardActions, termsOfReferenceKeyboardActions } from './keyboardActions';
export const mainKeyboard = (ctx) => ctx.reply(mainKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard()
            .add(mainKeyboardActions.CREATE_ORDER, mainKeyboardActions.CUSTUMER_ORDERS)
            .row()
            .add(mainKeyboardActions.RULES, mainKeyboardActions.HELP)
            .build()
    }
});
export const durationKeyboard = (ctx) => ctx.reply(durationKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard()
            .add(durationKeyboardActions.DURATION15, durationKeyboardActions.DURATION30, durationKeyboardActions.DURATION45)
            .build()
    }
});
export const camerasKeyboard = (ctx) => ctx.reply(camerasKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard()
            .add(camerasKeyboardActions.CAMERAS1, camerasKeyboardActions.CAMERAS2, camerasKeyboardActions.CAMERAS3)
            .build()
    }
});
export const startEditKeyboard = (ctx) => ctx.reply(startEditKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard().add(startEditKeyboardActions.YES, startEditKeyboardActions.NO).build()
    }
});
export const colorizationKeyboard = (ctx) => ctx.reply(colorizationKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard().add(colorizationKeyboardActions.YES, colorizationKeyboardActions.NO).build()
    }
});
export const musicKeyboard = (ctx) => ctx.reply(musicKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard().add(musicKeyboardActions.OUR, musicKeyboardActions.YOURS).build()
    }
});
export const preferencesKeyboard = (ctx) => ctx.reply(editPreferencesKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard().add(editPreferencesKeyboardActions.YES, editPreferencesKeyboardActions.NO).build()
    }
});
export const termsOfReferenceKeyboard = (ctx) => ctx.reply(termsOfReferenceKeyboardActions.MESSAGE, {
    reply_markup: {
        resize_keyboard: true,
        keyboard: new Keyboard().add(termsOfReferenceKeyboardActions.YES, termsOfReferenceKeyboardActions.NO).build()
    }
});
