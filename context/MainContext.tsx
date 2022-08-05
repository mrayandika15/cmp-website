import React, { useContext } from "react";

interface INavbar {
  header: string;
  subHeader: string;
  buttonLabel?: string;
  hasButton?: boolean;
  bgurl: string;
}

type NavbarContextType = {
  navbar: INavbar;
  setNavbar: (navbar: INavbar) => void;
};

type Props = {
  children: React.ReactNode;
};

const main = React.createContext<NavbarContextType | null>(null);

const MainContext: React.FC<Props> = ({ children }) => {
  const [navbar, setNavbar] = React.useState<INavbar>({
    header: "",
    subHeader: "",
    buttonLabel: "",
    hasButton: false,
    bgurl: "",
  });

  return (
    <main.Provider value={{ navbar, setNavbar }}>{children}</main.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(main);

  if (!context) throw Error("useMainContext should be used inside MainContext");

  return context;
};

export default MainContext;
