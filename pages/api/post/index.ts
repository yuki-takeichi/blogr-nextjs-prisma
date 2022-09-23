import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;

  // TODO use unstable_getSeverSessin instead
  // https://next-auth.js.org/configuration/nextjs#unstable_getserversession
  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}