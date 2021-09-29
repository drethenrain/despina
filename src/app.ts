import express from 'express';
import session from 'express-session';
import passport from 'passport';
import router from './routes';

const app = express();

app.use(
  session({
    secret: 'yesbaby',
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', router);

export default app;
