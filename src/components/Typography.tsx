import { type } from "os";
import React, { HTMLAttributes } from "react";

const Paragraph = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`whitespace-no-wrap ${className}`} {...rest}>
    {children}
  </p>
);

enum Headings {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
}

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: keyof typeof Headings;
}

const Heading = ({
  className,
  children,
  variant = "h1",
  ...rest
}: TypographyProps) =>
  React.createElement(
    variant,
    { className: `whitespace-no-wrap ${className || ""}`, ...rest },
    children
  );

export const Typography = {
  Paragraph,
  Heading,
};
