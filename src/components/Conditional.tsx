interface Props extends ComponentProps {
  renderIf: boolean;
}

export const Conditional = ({ children, renderIf }: Props) => {
  if (renderIf) {
    return <>{children}</>;
  }

  return null;
};
