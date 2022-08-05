import type { NextApiRequest, NextApiResponse } from "next";
import { IScale } from "../interfaces";
import { ScaleData } from "../data";

const getScale = (req: NextApiRequest, res: NextApiResponse<IScale[]>) => {
  res.status(200).json(ScaleData);
};

export default getScale;
