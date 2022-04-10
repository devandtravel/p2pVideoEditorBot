import { v4 } from 'uuid';
import { mainKeyboardReplies } from '../keyboards/keyboardReplies';
import { enterWeddingDate } from './enterWeddingDate';
export const createOrder = async (ctx) => {
    var _a, _b, _c;
    await ctx.reply(mainKeyboardReplies.CREATE_ORDER);
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    const from = ctx.from;
    if (userId !== undefined && from !== undefined) {
        if (!ctx.session.orders.hasOwnProperty(userId)) {
            await ctx.reply(mainKeyboardReplies.exeptions.USER_NOT_FOUND);
            ctx.session.orders[userId] = { user: from, orders: {} };
        }
        const orderId = v4();
        await ctx.reply('TODO: add today date of order, add wedding date');
        ctx.session.orders[userId].orders[orderId] = {
            title: `${(_b = ctx.from) === null || _b === void 0 ? void 0 : _b.first_name} ${(_c = ctx.from) === null || _c === void 0 ? void 0 : _c.last_name} ${userId.toString()}`,
            date: new Date(),
            weddingDate: '',
            newlyweds: '',
            details: '',
            duration: 15,
            numberOfCameras: 1,
            numberOfDrones: 1,
            prepayment: 0,
            price: 0,
            music: false,
            colorization: false,
            startEdit: false,
            editPreferences: ''
        };
        await ctx.reply('TODO: empty order created');
        await enterWeddingDate(ctx, orderId);
        return orderId;
    }
    else {
        await ctx.reply(mainKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
        return '';
    }
};
