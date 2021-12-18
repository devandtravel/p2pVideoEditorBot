import { chooseKeyboardReplies } from '../keyboards/keyboardReplies';
import { preferencesKeyboard } from '../keyboards/keyboards';
import { musicKeyboardActions } from '../keyboards/keyboardActions';
import { StatelessQuestion } from '@grammyjs/stateless-question/dist/source';
import { bot } from '../init/bot';
export const chooseMusic = async (ctx, orderId, music) => {
    var _a;
    const userId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    if (userId !== undefined && orderId !== '') {
        ctx.session.orders[userId].orders[orderId].music = music;
        switch (music) {
            case true:
                await ctx.reply('TODO: вот тут, пришли ссылку на ядиск, и мы сохраним его к себе');
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${musicKeyboardActions.YOURS}`);
                const musicQuestion = new StatelessQuestion('music', async (ctx) => {
                    var _a, _b, _c;
                    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.document) {
                        const file = await ctx.getFile();
                        const fileName = (_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.file_name;
                        await file.download(`files/${userId}_${orderId}_music_${fileName}`);
                        ctx.session.orders[userId].orders[orderId].musicFile = ctx.message.document;
                        await ctx.reply('Файл с музыкой получен');
                        preferencesKeyboard(ctx);
                    }
                    else {
                        await ctx.reply('Ты передумал отправлять музыку');
                        preferencesKeyboard(ctx);
                    }
                });
                bot.use(musicQuestion.middleware());
                musicQuestion.replyWithMarkdown(ctx, '↓ Прикрепи и отправь мне файл с музыкой (не более 20 Мб). ↓\nЕсли передумаешь оправлять файл, просто ответь любым текстом на это сообщение.');
                break;
            case false:
                await ctx.reply(`${chooseKeyboardReplies.CHOOSE}${musicKeyboardActions.OUR}`);
                preferencesKeyboard(ctx);
                break;
            default:
                break;
        }
    }
    else
        ctx.reply(chooseKeyboardReplies.exeptions.UNKNOWN_EXEPTION);
};
