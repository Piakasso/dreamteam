import React, { ReactNode } from "react";
import { MainEl } from "./main.styles";

interface IMain {
  children: ReactNode;
}

const Main = ({ children }: IMain) => {
  return <MainEl>{children}</MainEl>;
};

export default Main;
