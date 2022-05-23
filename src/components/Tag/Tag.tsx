import { HTMLAttributes } from "react";
import { Icon } from "../../images";
import { Typography } from "../Typography/Typography";

export const Tag = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex w-fit px-3 py-1 inset-0 bg-green-200 hover:bg-green-300 text-green-900 rounded-full">
    <div className="mr-1">
      <Icon.Discount />
    </div>
    <Typography.Paragraph className="text-sm font-semibold leading-tight">
      {children}
    </Typography.Paragraph>
  </div>
);
