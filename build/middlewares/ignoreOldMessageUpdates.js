const threshold = 15 * 60; // 5 minutes
export function ignoreOldMessageUpdates(ctx, next) {
    var _a, _b;
    // Check if context update type is a message
    if (ctx.message) {
        if (new Date().getTime() / 1000 - ctx.message.date < threshold) {
            return next();
        }
        else {
            console.log(`Ignoring message from ${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id} at ${(_b = ctx.chat) === null || _b === void 0 ? void 0 : _b.id} (${new Date().getTime() / 1000}:${ctx.message.date})`);
        }
    }
    else {
        return next();
    }
}
