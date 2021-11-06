import Markup from 'grammy'
// import { Markup } from 'telegraf'
import {
  mainMenuActions,
  durationMenuActions,
  camerasMenuActions,
  editMenuActions,
  colorizationMenuActions,
  musicMenuActions,
  editPreferencesMenuActions,
  termsOfReferenceMenuActions
} from '../actions/actions.js'

export const showMainMenu = () =>
  Markup.keyboard([
    [
      Markup.button.callback(
        mainMenuActions.CREATE_ORDER,
        mainMenuActions.CREATE_ORDER
      ),
      Markup.button.callback(
        mainMenuActions.MY_ORDERS,
        mainMenuActions.MY_ORDERS
      )
    ],
    [
      Markup.button.callback(mainMenuActions.RULES, mainMenuActions.RULES),
      Markup.button.callback(mainMenuActions.HELP, mainMenuActions.HELP)
    ],
    [Markup.button.contactRequest('Отправить свой номер телефона')]
  ]).resize()
export const showDurationMenu = () =>
  Markup.keyboard([
    Markup.button.callback(
      durationMenuActions.DURATION15,
      durationMenuActions.DURATION15
    ),
    Markup.button.callback(
      durationMenuActions.DURATION30,
      durationMenuActions.DURATION30
    ),
    Markup.button.callback(
      durationMenuActions.DURATION45,
      durationMenuActions.DURATION45
    )
  ]).resize()
export const showCamerasMenu = () =>
  Markup.keyboard([
    Markup.button.callback(
      camerasMenuActions.CAMERAS1,
      camerasMenuActions.CAMERAS1
    ),
    Markup.button.callback(
      camerasMenuActions.CAMERAS2,
      camerasMenuActions.CAMERAS2
    ),
    Markup.button.callback(
      camerasMenuActions.CAMERAS3,
      camerasMenuActions.CAMERAS3
    )
  ]).resize()
export const showEditMenu = () =>
  Markup.keyboard([
    Markup.button.callback(editMenuActions.YES, editMenuActions.YES),
    Markup.button.callback(editMenuActions.NO, editMenuActions.NO)
  ]).resize()
export const showColorizationMenu = () =>
  Markup.keyboard([
    Markup.button.callback(
      colorizationMenuActions.YES,
      colorizationMenuActions.YES
    ),
    Markup.button.callback(
      colorizationMenuActions.NO,
      colorizationMenuActions.NO
    )
  ]).resize()
export const showMusicMenu = () =>
  Markup.keyboard([
    Markup.button.callback(musicMenuActions.OUR, musicMenuActions.OUR),
    Markup.button.callback(musicMenuActions.YOURS, musicMenuActions.YOURS)
  ]).resize()
export const showEditPreferencesMenu = () =>
  Markup.keyboard([
    Markup.button.callback(
      editPreferencesMenuActions.YES,
      editPreferencesMenuActions.YES
    ),
    Markup.button.callback(
      editPreferencesMenuActions.NO,
      editPreferencesMenuActions.NO
    )
  ]).resize()
export const showTermsOfReferenceMenu = () =>
  Markup.keyboard([
    Markup.button.callback(
      termsOfReferenceMenuActions.YES,
      termsOfReferenceMenuActions.YES
    ),
    Markup.button.callback(
      termsOfReferenceMenuActions.NO,
      termsOfReferenceMenuActions.NO
    )
  ]).resize()
