import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { termsOfReferenceKeyboard } from '../keyboards/keyboards';
import { editPreferencesKeyboardActions } from '../keyboards/keyboardActions';
import { StatelessQuestion } from '@grammyjs/stateless-question';
import { bot } from '../init/bot';
export const chooseEditPreferences = async (ctx, orderId, editPreferences) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        switch (editPreferences) {
            case true:
                const editPreferencesQuestion = new StatelessQuestion('editPreferences', async (ctx) => {
                    var _a;
                    ctx.session.orders[userId].orders[orderId].editPreferences = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text;
                    await ctx.reply('Записал твои пожелания');
                    await termsOfReferenceKeyboard(ctx);
                });
                bot.use(editPreferencesQuestion.middleware());
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${editPreferencesKeyboardActions.YES}`);
                editPreferencesQuestion.replyWithMarkdown(ctx, '↓ Введи и отправь мне твой комментарий с предпочтениями по монтажу ↓');
                break;
            case false:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${editPreferencesKeyboardActions.NO}`);
                await termsOfReferenceKeyboard(ctx);
                break;
            default:
                break;
        }
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
