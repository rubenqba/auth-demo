import { authOptions } from "@api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import createError from "http-errors";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserListResponse>
) {
  const session = await getServerSession(req, res, authOptions);
  const token = await getToken({req});

  if (req.method === "GET") {
    console.log("hasta aqui llego!!");
    if (token) {
      console.log("hay session");
      const { searchParams } = new URL(`${process.env.NEXTAUTH_URL}${req.url}`);
      const page = parseInt(searchParams.get("page") || "0");
      const size = parseInt(searchParams.get("size") || "10");
      const filter = searchParams.get("filter") || "";
      const sort = searchParams.get("sort") || "";

      res.status(200).json({
        page,
        size,
        filter,
        sort,
      });
    } else {
      res.status(401).json(createError(401, "no session detected"));
    }
  } else {
    res.status(405).send();
  }
}
