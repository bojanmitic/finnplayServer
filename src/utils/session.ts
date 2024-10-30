import session from 'express-session';

export const sessionParser = session({
  secret: 'session-secret',
  name: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // if true only transmit cookie over https
    httpOnly: false, // if true prevent client side JS from reading the cookie
    maxAge: 10000 * 60 * 60 // session max age in milliseconds
  }
});
