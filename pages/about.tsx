import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layouts";
import { useMainContext } from "../context/MainContext";
import { IntroSection, DivisionSection } from "../containers";
import axios from "axios";

export interface IService {
  name: string;
  imgUrl: string;
}

export interface IDivision {
  name: string;
  imgUrl: string;
}

export type IAbout = {
  division: IDivision[];
  service: IService[];
};

const About: NextPage = () => {
  const { setNavbar } = useMainContext();

  const [resource, setResource] = React.useState<IAbout>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    setNavbar({
      header: "Tentang Kami",
      hasButton: false,
      subHeader:
        "Perusahaan produsen pakaian yang telah berdiri sejak 2001, dengan komitmen untuk selalu meningkatkan kualitas produk dan layanan. Kami percaya bahwa produk yang baik didukung juga oleh penyelesaian produk yang tepat waktu.",
      bgurl: "assets/img/bg/bgAboutUs.png",
    });

    (async () => {
      await axios.get("/api/about-us").then((response) => {
        setResource(response?.data);
        setIsLoading(false);
      });
    })();
  }, []);

  return (
    <MainLayout>
      <IntroSection data={resource?.service} isLoading={isLoading} />
      <DivisionSection data={resource?.division} />
    </MainLayout>
  );
};

export default About;
