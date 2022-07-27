import type { NextApiRequest, NextApiResponse } from "next";
import { IProducts } from "./interfaces";
import { productData } from "./data";

const getProducts = (
  req: NextApiRequest,
  res: NextApiResponse<IProducts[]>
) => {
  return res.status(200).json(productData);
};

export default getProducts;
