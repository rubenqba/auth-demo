import createHttpError from "http-errors";
import { NextApiHandler } from "next";
import { apiHandler } from "@utils/api";
import { JsonPlaceholderService } from "@service/placeholder-service";
import { UserData } from "@model/users";
import { PageRequest } from "@model/common";

export type UserDataPage = UserData[];
export type UserDataResponse = {
  data: UserDataPage | UserData;
};

const getUsers: NextApiHandler<UserDataResponse> = async (req, res) => {
  const { id } = req.query;
  const service = new JsonPlaceholderService();
  if (id) {
    // find and return article with given id
    const user = await service.findUser(parseInt(id as string));
    if (!user)
      throw new createHttpError.NotFound(`User with id ${id} not found!`);
    res.status(200).json({ data: user });
  } else {
    const pageRequest: PageRequest = { page: 0, size: 10 };
    const page = await service.getUserPage(pageRequest);
    res.status(200).json({ data: page });
  }
};

export default apiHandler({
  GET: getUsers,
});
