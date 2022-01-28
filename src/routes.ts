import './utils/discordStrategy';

import passport from 'passport';
import { Router } from 'express';

const router = Router();

router.get('/discord', passport.authenticate('discord'));

router.get(
  '/discord/callback',
  passport.authenticate('discord', {
    failureRedirect: '/auth',
    successRedirect: '/',
  })
);

export default router;
