import passport from 'passport';
import { Strategy as DiscordStrategy, Profile } from 'passport-discord';

import User from '../models/User';
import { CLIENT_ID, CLIENT_SECRET, CLIENT_REDIRECT } from './constants';

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) done(null, user);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CLIENT_REDIRECT,
      scope: ['identify', 'email'],
    },
    async (accessToken, refreshToken, profile: Profile, done) => {
      try {
        const user = await User.findOne({ _id: profile.id });
        if (user) {
          done(null, user);
        } else {
          const newUser = await User.create({
            _id: profile.id,
            username: profile.username,
            email: profile.email,
          });
          const saveUser = await newUser.save();
          done(null, saveUser);
        }
      } catch (err) {
        console.log(err);
        done(err, null);
      }
    }
  )
);
