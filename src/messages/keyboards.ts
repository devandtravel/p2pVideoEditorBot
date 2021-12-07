import { Keyboard } from 'grammy'
import { BotContext } from '../models/Context'

import {
  mainActions,
  durationActions,
  camerasActions,
  editActions,
  colorizationActions,
  musicActions,
  preferencesActions,
  termsOfReferenceActions
} from './actions'

export const mainKeyboard = (ctx: BotContext) =>
  ctx.reply(mainActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(mainActions.CREATE_ORDER, mainActions.MY_ORDERS)
        .row()
        .add(mainActions.RULES, mainActions.HELP)
        .build()
    }
  })

export const durationKeyboard = (ctx: BotContext) =>
  ctx.reply(durationActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(
          durationActions.DURATION15,
          durationActions.DURATION30,
          durationActions.DURATION45
        )
        .build()
    }
  })

export const camerasKeyboard = (ctx: BotContext) =>
  ctx.reply(camerasActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(
          camerasActions.CAMERAS1,
          camerasActions.CAMERAS2,
          camerasActions.CAMERAS3
        )
        .build()
    }
  })

export const editKeyboard = (ctx: BotContext) =>
  ctx.reply(editActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard().add(editActions.YES, editActions.NO).build()
    }
  })

export const colorizationKeyboard = (ctx: BotContext) =>
  ctx.reply(colorizationActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(colorizationActions.YES, colorizationActions.NO)
        .build()
    }
  })

export const musicKeyboard = (ctx: BotContext) =>
  ctx.reply(musicActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard().add(musicActions.OUR, musicActions.YOURS).build()
    }
  })

export const preferencesKeyboard = (ctx: BotContext) =>
  ctx.reply(preferencesActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(preferencesActions.YES, preferencesActions.NO)
        .build()
    }
  })

export const termsOfReferenceKeyboard = (ctx: BotContext) =>
  ctx.reply(termsOfReferenceActions.MESSAGE, {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .add(termsOfReferenceActions.YES, termsOfReferenceActions.NO)
        .build()
    }
  })
