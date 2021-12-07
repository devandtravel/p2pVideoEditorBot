export const commandsActions = [
  { command: 'start', description: 'Запустить бота заново' },
  { command: 'orders', description: '[admin] Показать заказы' },
  { command: 'help', description: 'Помощь' }
]
export const helpActions = {
  MESSAGE:
    'Бот соединит тебя с видеомонтажером и позволит вам вместе создать свадебное видео.'
}
export const mainActions = {
  MESSAGE:
    'Привет! Готов помочь тебе с монтажом свадебных фильмов. Ответь на несколько вопросов.',
  CREATE_ORDER: 'Создать новый заказ',
  MY_ORDERS: 'Мои оплаченные заказы',
  RULES: 'Правила',
  HELP: 'Помощь'
}
export const durationActions = {
  MESSAGE: '',
  DURATION15: 'до 15 мин.',
  DURATION30: 'до 30 мин.',
  DURATION45: 'до 45 мин.'
}
export const camerasActions = {
  MESSAGE: '',
  CAMERAS1: '1 камера + дрон (эпизоды)',
  CAMERAS2: '2 камеры + дрон (эпизоды)',
  CAMERAS3: '3 и более камер + дрон (эпизоды)'
}
export const prices = {
  MESSAGE: '',
  PRICE_DURATION15_CAMERAS1: 'Необходима предоплата 10000 рублей',
  PRICE_DURATION30_CAMERAS1: 'Необходима предоплата 20000 рублей',
  PRICE_DURATION45_CAMERAS1: 'Необходима предоплата 30000 рублей',
  PRICE_DURATION15_CAMERAS2: 'Необходима предоплата 15000 рублей',
  PRICE_DURATION30_CAMERAS2: 'Необходима предоплата 25000 рублей',
  PRICE_DURATION45_CAMERAS2: 'Необходима предоплата 35000 рублей',
  PRICE_DURATION15_CAMERAS3: 'Необходима предоплата 18000 рублей',
  PRICE_DURATION30_CAMERAS3: 'Необходима предоплата 28000 рублей',
  PRICE_DURATION45_CAMERAS3: 'Необходима предоплата 38000 рублей'
}
export const editActions = {
  MESSAGE: '',
  YES: 'да (продолжаем опрос)',
  NO: 'нет, меняем условия (вернуться в главное меню)'
}
export const colorizationActions = {
  MESSAGE: '',
  YES: 'покраска на наше усмотрение',
  NO: 'твой LUT (не забудь добавить его вместе с материалами)'
}
export const musicActions = {
  MESSAGE: '',
  OUR: 'музыка на наше усмотрение',
  YOURS: 'твоя музыка'
}
export const preferencesActions = {
  MESSAGE: '',
  YES: 'да (оставь комментарий)',
  NO: 'монтаж на наше усмотрение'
}
export const termsOfReferenceActions = {
  MESSAGE: '',
  YES: 'да (отправь файл)',
  NO: 'нет ТЗ'
}
