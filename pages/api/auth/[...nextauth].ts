import { NextApiHandler } from 'next';
import NextAuth from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
// https://next-auth.js.org/providers/google
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};