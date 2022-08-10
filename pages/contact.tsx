import React from "react";

import type { NextPage } from "next";

import { MainLayout } from "../layouts";
import { useMainContext } from "../context/MainContext";
import { CalculatorProduct, EndSection, Location } from "../containers";

const Contact: NextPage = () => {
  const { setNavbar } = useMainContext();

  React.useEffect(() => {
    setNavbar({
      header: "Ada yang bisa dibantu?",
      subHeader: "Tertarik bekerja sama? Hubungi Kami.",
      bgurl: "assets/img/bg/bgContact.png",
      hasButton: false,
    });
  }, []);

  return (
    <MainLayout>
      <CalculatorProduct />
      <Location />
      <EndSection />
    </MainLayout>
  );
};

export default Contact;
