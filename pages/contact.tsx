import React from "react";

import type { NextPage } from "next";

import { MainLayout } from "../layouts";
import { useMainContext } from "../context/MainContext";
import { CalculatorProduct, EndSection, Location } from "../containers";
import Head from "next/head";

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
      <Head>
        <title>Kontak</title>
      </Head>
      <CalculatorProduct />
      <Location />
      <EndSection />
    </MainLayout>
  );
};

export default Contact;
