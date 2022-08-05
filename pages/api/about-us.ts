import type { NextApiRequest, NextApiResponse } from "next";
import { AboutData } from "./data";
import { IAbout } from "./interfaces";

const getAbout = (req: NextApiRequest, res: NextApiResponse<IAbout>) => {
  res.status(200).json(AboutData);
};

export default getAbout;
