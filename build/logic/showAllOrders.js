export const showAllOrders = (ctx) => ctx.reply(JSON.stringify(Object.entries(ctx.session.orders)));
