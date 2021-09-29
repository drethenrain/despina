import './utils/discordStrategy';

import passport from 'passport';
import { Router } from 'express';

export const router = Router();

router.get('/', passport.authenticate('discord'));

router.get(
  '/callback',
  passport.authenticate('discord', {
    failureRedirect: '/auth',
    successRedirect: '/',
  })
);
