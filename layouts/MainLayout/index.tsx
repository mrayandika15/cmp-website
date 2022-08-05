import React from "react";
import { Footer, Navbar } from "../../containers";

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
