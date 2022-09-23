import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId as string },
    data: { published: true },
  });
  res.json(post);
}