const jwtConfig = require('./jwt.config');

const cookieConfig = {
  httpOnly: true,
  maxAge: jwtConfig.refresh.expiresIn,
};

module.exports = cookieConfig;