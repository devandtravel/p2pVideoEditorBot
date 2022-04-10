import { chooseKeyboardReplies, prepayments } from '../keyboards/keyboardReplies';
import { startEditKeyboard } from '../keyboards/keyboards';
import { camerasKeyboardActions } from '../keyboards/keyboardActions';
export const chooseCameras = async (ctx, orderId, cameras) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        ctx.session.orders[userId].orders[orderId].numberOfCameras = cameras;
        ctx.session.orders[userId].orders[orderId].numberOfDrones = 1;
        const prepaymentRegExp = /\d+/;
        let prepayment = '0';
        switch (cameras) {
            case 1:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS1}`);
                switch (ctx.session.orders[userId].orders[orderId].duration) {
                    case 15:
                        prepayment = prepayments.PREPAYMENT_DURATION15_CAMERAS1;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION15_CAMERAS1);
                        break;
                    case 30:
                        prepayment = prepayments.PREPAYMENT_DURATION30_CAMERAS1;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION30_CAMERAS1);
                        break;
                    case 45:
                        prepayment = prepayments.PREPAYMENT_DURATION45_CAMERAS1;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION45_CAMERAS1);
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS2}`);
                switch (ctx.session.orders[userId].orders[orderId].duration) {
                    case 15:
                        prepayment = prepayments.PREPAYMENT_DURATION15_CAMERAS2;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION15_CAMERAS2);
                        break;
                    case 30:
                        prepayment = prepayments.PREPAYMENT_DURATION30_CAMERAS2;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION30_CAMERAS2);
                        break;
                    case 45:
                        prepayment = prepayments.PREPAYMENT_DURATION45_CAMERAS2;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION45_CAMERAS2);
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${camerasKeyboardActions.CAMERAS3}`);
                switch (ctx.session.orders[userId].orders[orderId].duration) {
                    case 15:
                        prepayment = prepayments.PREPAYMENT_DURATION15_CAMERAS3;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION15_CAMERAS3);
                        break;
                    case 30:
                        prepayment = prepayments.PREPAYMENT_DURATION30_CAMERAS3;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION30_CAMERAS3);
                        break;
                    case 45:
                        prepayment = prepayments.PREPAYMENT_DURATION45_CAMERAS3;
                        await ctx.reply(prepayments.PREPAYMENT_DURATION45_CAMERAS3);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        ctx.session.orders[userId].orders[orderId].prepayment = Number(prepayment.match(prepaymentRegExp));
        await startEditKeyboard(ctx);
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
