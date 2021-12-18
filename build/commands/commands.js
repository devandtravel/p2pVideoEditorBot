import { mainKeyboard } from '../keyboards/keyboards';
import { bot } from '../init/bot';
import { mainKeyboardReplies } from '../keyboards/keyboardReplies';
import { showUserOrders } from '../logic/showUserOrders';
import { showAllOrders } from '../logic/showAllOrders';
export const setBotCommands = async () => {
    const commands = [
        { command: 'start', description: 'Запустить бота заново' },
        { command: 'orders', description: 'Показать мои заказы' },
        { command: 'orders_all', description: 'Показать все заказы' },
        { command: 'help', description: 'Помощь' }
    ];
    await bot.api.setMyCommands(commands);
    bot.command('start', async (ctx) => {
        var _a;
        const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
        const from = ctx.from;
        await ctx.reply('ATTENTION! You are using the Bot in developer mode.\n' +
            'Messages with "TODO:" label will be removed in production mode.\n' +
            'TODO:\nAdd datepicker for wedding date\n' +
            'Добавить интеграцию с чатом монтажеров\n' +
            'Добавить интеграцию с Я.Диск\n');
        if (userId !== undefined && ctx.session.orders.hasOwnProperty(userId)) {
            await ctx.reply('TODO: add last login date and display your last login date in bot\n' +
                'TODO: you are already logged in, please go ahead');
        }
        else if (userId !== undefined && from !== undefined) {
            await ctx.reply('TODO: you are not in the user base, I just added you now');
            ctx.session.orders[userId] = { user: from, orders: {} };
        }
        mainKeyboard(ctx);
    });
    bot.command('orders', ctx => showUserOrders(ctx));
    bot.command('orders_all', ctx => showAllOrders(ctx));
    bot.command('help', ctx => ctx.reply(mainKeyboardReplies.HELP));
};
