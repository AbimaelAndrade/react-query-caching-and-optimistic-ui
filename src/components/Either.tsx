import { ReactNode } from "react";

type EitherProps = {
  renderIf: boolean;
  children: ReactNode;
  orRender: ReactNode;
};

export const Either = ({ children, renderIf, orRender }: EitherProps) => {
  if (renderIf) {
    return <>{children}</>;
  }

  return <>{orRender}</>;
};
