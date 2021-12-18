import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { successActions } from '../keyboards/keyboardReplies';
import { termsOfReferenceKeyboardActions } from '../keyboards/keyboardActions';
import { bot } from '../init/bot';
import { StatelessQuestion } from '@grammyjs/stateless-question';
import { mainKeyboard } from '../keyboards/keyboards';
import { saveToDatabase } from '../logic/saveToDatabase';
export const chooseTermsOfReference = async (ctx, orderId, termsOfReference) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        switch (termsOfReference) {
            case true:
                const termsOfReferenceQuestion = new StatelessQuestion('termsOfReference', async (ctx) => {
                    var _a, _b, _c;
                    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.document) {
                        const file = await ctx.getFile();
                        const fileName = (_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.file_name;
                        await file.download(`files/${userId}_${orderId}_termsOfReference_${fileName}`);
                        ctx.session.orders[userId].orders[orderId].termsOfReference = ctx.message.document;
                        await ctx.reply('Файл с ТЗ получен');
                        await ctx.reply(successActions.MESSAGE);
                        saveToDatabase(ctx);
                        mainKeyboard(ctx);
                    }
                    else {
                        await ctx.reply('Ты передумал отправлять ТЗ');
                        await ctx.reply(successActions.MESSAGE);
                        saveToDatabase(ctx);
                        mainKeyboard(ctx);
                    }
                });
                bot.use(termsOfReferenceQuestion.middleware());
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${termsOfReferenceKeyboardActions.YES}`);
                termsOfReferenceQuestion.replyWithMarkdown(ctx, '↓ Прикрепи и отправь мне файл с ТЗ (не более 20 Мб, .pdf). ↓\nЕсли передумаешь оправлять файл, просто ответь любым текстом на это сообщение.');
                break;
            case false:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${termsOfReferenceKeyboardActions.NO}`);
                await ctx.reply(successActions.MESSAGE);
                saveToDatabase(ctx);
                mainKeyboard(ctx);
                break;
            default:
                break;
        }
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
