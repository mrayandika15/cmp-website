import React from "react";
import { TimelineSection } from "../containers";
import { useMainContext } from "../context/MainContext";
import { MainLayout } from "../layouts";

const Service: React.FC = () => {
  const { setNavbar } = useMainContext();

  React.useEffect(() => {
    setNavbar({
      header: "Printing.  Jahit.  Embroidery.",
      subHeader:
        "Kami melayani jasa pembuatan pakaian yang terbagi menjadi printing, jahit, dan embroidery. Model dan kuantitas pakaian yang dipesan tentu dapat disesuaikan dengan kebutuhanmu.",
      hasButton: false,
      bgurl: "/assets/img/bg/bgService.png",
    });
  }, []);

  return (
    <MainLayout>
      <TimelineSection />
    </MainLayout>
  );
};

export default Service;
