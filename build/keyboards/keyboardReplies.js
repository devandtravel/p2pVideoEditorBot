export const mainKeyboardReplies = {
    CREATE_ORDER: 'Начинаем создавать заказ',
    HELP: 'Бот соединит тебя с видеомонтажером и позволит вам вместе создать свадебное видео.',
    RULES: 'Правила \n\n' +
        'Ответь на несколько вопросов и бот соединит тебя с видеомонтажером и позволит вам вместе создать свадебное видео.',
    exeptions: {
        USER_NOT_FOUND: 'Тебя нет в базе пользователей, добавляю',
        UNKNOWN_EXEPTION: 'Не получается создать заказ'
    }
};
export const chooseKeyboardReplies = {
    CHOOSE: 'Твой выбор: ',
    exeptions: {
        UNKNOWN_EXEPTION: 'Неизвестная ошибка, начни сначала, нажав /start'
    }
};
// miscellaneous
export const successActions = {
    MESSAGE: `Cпасибо за заказ. Примерное дата выполнения ${new Date(Date.UTC(2021, 12, 2, 10, 0, 0)).toLocaleString('ru-RU')}`
};
export const prepayments = {
    MESSAGE: '',
    PREPAYMENT_DURATION15_CAMERAS1: 'Необходима предоплата 10000 рублей',
    PREPAYMENT_DURATION30_CAMERAS1: 'Необходима предоплата 20000 рублей',
    PREPAYMENT_DURATION45_CAMERAS1: 'Необходима предоплата 30000 рублей',
    PREPAYMENT_DURATION15_CAMERAS2: 'Необходима предоплата 15000 рублей',
    PREPAYMENT_DURATION30_CAMERAS2: 'Необходима предоплата 25000 рублей',
    PREPAYMENT_DURATION45_CAMERAS2: 'Необходима предоплата 35000 рублей',
    PREPAYMENT_DURATION15_CAMERAS3: 'Необходима предоплата 18000 рублей',
    PREPAYMENT_DURATION30_CAMERAS3: 'Необходима предоплата 28000 рублей',
    PREPAYMENT_DURATION45_CAMERAS3: 'Необходима предоплата 38000 рублей'
};
