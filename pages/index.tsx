import type { NextPage } from "next";
import { useMainContext } from "../context/MainContext";

import { MainLayout } from "../layouts";

import React from "react";
import {
  BrandSection,
  ProductSection,
  ScaleSection,
  ServiceSection,
} from "../containers";

const Home: NextPage = () => {
  const { setNavbar } = useMainContext();

  React.useEffect(() => {
    setNavbar({
      header: "Mari Berkenalan Dengan Kami!",
      subHeader:
        "Dengan layanan prima dan pengalaman selama lebih dari 20 tahun di industri pakaian, kami siap membantumu untuk maju ke tahap selanjutnya.",
      buttonLabel: "Tentang Kami",
      hasButton: true,
      bgurl: "assets/img/bg/bgHompage.png",
    });
  }, []);

  return (
    <MainLayout>
      <BrandSection />
      <ProductSection />
      <ServiceSection />
      <ScaleSection />
    </MainLayout>
  );
};

export default Home;
