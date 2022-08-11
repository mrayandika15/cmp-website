import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layouts";
import { useMainContext } from "../context/MainContext";
import { ProductOverview } from "../containers";
import Head from "next/head";

const Product: NextPage = () => {
  const { setNavbar } = useMainContext();

  React.useEffect(() => {
    setNavbar({
      header: "Produk Kami",
      subHeader:
        "Kami konsisten untuk terus menciptakan produk yang berkualitas, dengan pengerjaan yang profesional dan ketepatan waktu penyelesaian produk, namun dengan harga yang bersaing. ",
      hasButton: false,
      bgurl: "assets/img/bg/bgProduct.png",
    });
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Produk</title>
      </Head>
      <ProductOverview />
    </MainLayout>
  );
};

export default Product;
