import type { NextApiRequest, NextApiResponse } from "next";

type BrandsData = {
  name: string;
};

export default function getBrands(
  req: NextApiRequest,
  res: NextApiResponse<BrandsData>
) {
  res.status(200).json({ name: "testing api" });
}
