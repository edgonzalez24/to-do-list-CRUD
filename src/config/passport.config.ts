
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, type StrategyOptions } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id: payload.sub } });
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      return done(err as Error, false);
    }
  })
);

export default passport;