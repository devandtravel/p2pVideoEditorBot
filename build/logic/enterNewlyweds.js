import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { durationKeyboard } from '../keyboards/keyboards';
import { StatelessQuestion } from '@grammyjs/stateless-question';
import { bot } from '../init/bot';
export const enterNewlyweds = async (ctx, orderId) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        const newlywedsQuestion = new StatelessQuestion('newlyweds', async (ctx) => {
            var _a, _b;
            ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) ? (ctx.session.orders[userId].orders[orderId].newlyweds = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.text) : null;
            await ctx.reply('Записал имена');
            await durationKeyboard(ctx);
        });
        bot.use(newlywedsQuestion.middleware());
        newlywedsQuestion.replyWithMarkdown(ctx, '↓ Введи и отправь мне имена молодоженов ↓');
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
