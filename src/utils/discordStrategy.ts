import passport from 'passport';
import { Strategy as DiscordStrategy, Profile } from 'passport-discord';

import User from '../models/User';

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
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      callbackURL: process.env.CLIENT_REDIRECT as string,
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
