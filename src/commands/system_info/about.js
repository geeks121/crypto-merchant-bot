const about = async (ctx) => {
    const { BOT_USERNAME, VERSION } = process.env;

    const msg = `*### Tentang ###*\nš¤ Bot name: @${BOT_USERNAME}\nš Version: ${VERSION}\nšØāš» Powered by: @weneedenter`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { about };