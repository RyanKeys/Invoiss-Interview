// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default function hello(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(400).send({ ERROR: "Only POST requests allowed" });
  }
  const { id, name } = JSON.parse(req.body);
  if (typeof id !== "string" || typeof name !== "string") {
    res.status(400).send({
      ERROR: "Both 'id' and 'response' must be datatype 'string'",
    });
  }
  res.status(200).json({ id: name });
}
