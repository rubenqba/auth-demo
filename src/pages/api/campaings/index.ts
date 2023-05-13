import createHttpError from "http-errors";
import * as Yup from "yup";

import { NextApiHandler } from "next";

import { apiHandler } from "@utils/api";
// import { validateRequest } from "utils/yup";
import { CampaignService } from "@service/campaign-service";
import { getToken } from "next-auth/jwt";
import { CampaignPage, ICampaign } from "@model/campaigns";

export type CampaignResponse = {
  data: CampaignPage | ICampaign;
};

/**
 * returns all articles or the article with the given id if query string is provided
 */
const getCampaign: NextApiHandler<CampaignResponse> = async (req, res) => {
  const token = await getToken({ req });
  const { id } = req.query;
  const service = new CampaignService({token?.accessToken});
  if (id) {
    // find and return article with given id
    const campaign = await service.findCampaign(id as string);
    if (!campaign)
      throw new createHttpError.NotFound(`Campaign with id ${id} not found!`);
    res.status(200).json({ data: campaign });
  } else {
    const page = await service.getCampaignsPage({});
    res.status(200).json({ data: page });
  }
};

export default apiHandler({
  GET: getCampaign,
});
