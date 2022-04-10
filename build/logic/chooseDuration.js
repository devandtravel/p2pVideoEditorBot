import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { camerasKeyboard } from '../keyboards/keyboards';
export const chooseDuration = async (ctx, orderId, duration) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        ctx.session.orders[userId].orders[orderId].duration = duration;
        await ctx.reply(`${chooseKeyboardReplies.CHOOSE}до ${duration} мин.`);
        await camerasKeyboard(ctx);
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
