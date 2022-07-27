import type { IBrands } from "./interfaces";
import { brandsData } from "./data";
import { NextApiRequest, NextApiResponse } from "next";

const getBrands = (req: NextApiRequest, res: NextApiResponse<IBrands[]>) => {
  return res.status(200).json(brandsData);
};

export default getBrands;
