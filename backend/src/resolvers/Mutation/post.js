const { getUserId } = require('../../lib/auth');

const post = {
  async createDraft(parent, { title, content }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          content,
          published: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info,
    );
  },

  async publish(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error("Post not found or you're not the author");
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { published: true },
      },
      info,
    );
  },

  async deletePost(parent, { id }, ctx) {
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error("Post not found or you're not the author");
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },
};

module.exports = { post };
