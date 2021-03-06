const jwt = require('jsonwebtoken');

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

module.exports = {
  getUserId,
  AuthError,
};
