const { getUserId } = require('../../lib/auth');

const post = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({ where: { published: true } }, info);
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx);

    const where = {
      isPublished: false,
      author: {
        id,
      },
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info);
  },
};

module.exports = { post };
