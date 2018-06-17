const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AuthError } = require('../../lib/auth');

const auth = {
  async signup(parent, args, ctx) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    // TODO: tokenはcookieにのせる
    // https://github.com/prismagraphql/graphql-yoga/pull/256
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async login(parent, { email, password }, ctx) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new AuthError();
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new AuthError();
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};

module.exports = { auth };
