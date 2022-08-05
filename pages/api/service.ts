import type { NextApiRequest, NextApiResponse } from "next";
import { IService } from "./interfaces";
import { ServicesData } from "./data";

const getService = (req: NextApiRequest, res: NextApiResponse<IService[]>) => {
  return res.status(200).json(ServicesData);
};

export default getService;
