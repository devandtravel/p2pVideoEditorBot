import { Keyboard } from 'grammy'

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

export const mainKeyboard = new Keyboard()
  .text(mainActions.CREATE_ORDER)
  .text(mainActions.MY_ORDERS)
  .row()
  .text(mainActions.RULES)
  .text(mainActions.HELP)

export const durationKeyboard = new Keyboard()
  .text(durationActions.DURATION15)
  .text(durationActions.DURATION30)
  .text(durationActions.DURATION45)

export const camerasKeyboard = new Keyboard()
  .text(camerasActions.CAMERAS1)
  .text(camerasActions.CAMERAS2)
  .text(camerasActions.CAMERAS3)

export const editKeyboard = new Keyboard()
  .text(editActions.YES)
  .text(editActions.NO)

export const colorizationKeyboard = new Keyboard()
  .text(colorizationActions.YES)
  .text(colorizationActions.NO)

export const musicKeyboard = new Keyboard()
  .text(musicActions.OUR)
  .text(musicActions.YOURS)

export const preferencesKeyboard = new Keyboard()
  .text(preferencesActions.YES)
  .text(preferencesActions.NO)

export const termsOfReferenceKeyboard = new Keyboard()
  .text(termsOfReferenceActions.YES)
  .text(termsOfReferenceActions.NO)
