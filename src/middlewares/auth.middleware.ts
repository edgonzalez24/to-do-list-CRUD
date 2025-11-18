import passport from '../config/passport.config.js';

export const authenticateJwt = passport.authenticate('jwt', { session: false });
