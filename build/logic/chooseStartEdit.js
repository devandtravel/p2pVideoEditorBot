import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { colorizationKeyboard, mainKeyboard } from '../keyboards/keyboards';
import { startEditKeyboardActions } from '../keyboards/keyboardActions';
export const chooseStartEdit = async (ctx, orderId, startEdit) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        ctx.session.orders[userId].orders[orderId].startEdit = startEdit;
        switch (startEdit) {
            case true:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${startEditKeyboardActions.YES}`);
                colorizationKeyboard(ctx);
                break;
            case false:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${startEditKeyboardActions.NO}`);
                ctx.session.orders[userId].orders[orderId].startEdit = startEdit;
                delete ctx.session.orders[userId].orders[orderId];
                mainKeyboard(ctx);
                break;
            default:
                break;
        }
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
