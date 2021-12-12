import { Keyboard } from 'grammy'
import { BotContext } from '../models/Context'
import {
  mainKeyboardActions,
  durationKeyboardActions,
  camerasKeyboardActions,
  startEditKeyboardActions,
  colorizationKeyboardActions,
  musicKeyboardActions,
  editPreferencesKeyboardActions,
  termsOfReferenceKeyboardActions
} from './keyboardActions'

export const mainKeyboard = (ctx: BotContext) =>
  ctx.reply(mainKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(
          mainKeyboardActions.CREATE_ORDER,
          mainKeyboardActions.CUSTUMER_ORDERS
        )
        .row()
        .add(mainKeyboardActions.RULES, mainKeyboardActions.HELP)
        .build()
    }
  })

export const durationKeyboard = (ctx: BotContext) =>
  ctx.reply(durationKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(
          durationKeyboardActions.DURATION15,
          durationKeyboardActions.DURATION30,
          durationKeyboardActions.DURATION45
        )
        .build()
    }
  })

export const camerasKeyboard = (ctx: BotContext) =>
  ctx.reply(camerasKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(
          camerasKeyboardActions.CAMERAS1,
          camerasKeyboardActions.CAMERAS2,
          camerasKeyboardActions.CAMERAS3
        )
        .build()
    }
  })

export const editKeyboard = (ctx: BotContext) =>
  ctx.reply(startEditKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(startEditKeyboardActions.YES, startEditKeyboardActions.NO)
        .build()
    }
  })

export const colorizationKeyboard = (ctx: BotContext) =>
  ctx.reply(colorizationKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(colorizationKeyboardActions.YES, colorizationKeyboardActions.NO)
        .build()
    }
  })

export const musicKeyboard = (ctx: BotContext) =>
  ctx.reply(musicKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(musicKeyboardActions.OUR, musicKeyboardActions.YOURS)
        .build()
    }
  })

export const preferencesKeyboard = (ctx: BotContext) =>
  ctx.reply(editPreferencesKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(
          editPreferencesKeyboardActions.YES,
          editPreferencesKeyboardActions.NO
        )
        .build()
    }
  })

export const termsOfReferenceKeyboard = (ctx: BotContext) =>
  ctx.reply(termsOfReferenceKeyboardActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      keyboard: new Keyboard()
        .add(
          termsOfReferenceKeyboardActions.YES,
          termsOfReferenceKeyboardActions.NO
        )
        .build()
    }
  })
