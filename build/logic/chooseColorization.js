import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { musicKeyboard } from '../keyboards/keyboards';
import { colorizationKeyboardActions } from '../keyboards/keyboardActions';
import { StatelessQuestion } from '@grammyjs/stateless-question/dist/source';
import { bot } from '../init/bot';
export const chooseColorization = async (ctx, orderId, colorization) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        ctx.session.orders[userId].orders[orderId].colorization = colorization;
        switch (colorization) {
            case true:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${colorizationKeyboardActions.YES}`);
                await musicKeyboard(ctx);
                break;
            case false:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${colorizationKeyboardActions.NO}`);
                const colorizationQuestion = new StatelessQuestion('colorization', async (ctx) => {
                    var _a, _b, _c;
                    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.document) {
                        const file = await ctx.getFile();
                        const fileName = (_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.file_name;
                        await file.download(`files/${userId}_${orderId}_colorization_${fileName}`);
                        ctx.session.orders[userId].orders[orderId].lut = ctx.message.document;
                        await ctx.reply('Файл с LUT получен');
                        await musicKeyboard(ctx);
                    }
                    else {
                        await ctx.reply('Ты передумал отправлять LUT');
                        await musicKeyboard(ctx);
                    }
                });
                bot.use(colorizationQuestion.middleware());
                colorizationQuestion.replyWithMarkdown(ctx, '↓ Прикрепи и отправь мне файл с LUT (не более 20 Мб). ↓\nЕсли передумаешь оправлять файл, просто ответь любым текстом на это сообщение.');
                break;
            default:
                break;
        }
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
