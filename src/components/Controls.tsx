import { HTMLAttributes } from "react";
import { Icon } from "../images";

const View = ({ onClick, ...rest }: HTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="w-5 mx-2 transform hover:text-teal-500 hover:scale-110"
    {...rest}
  >
    <Icon.View className="w-6" />
  </button>
);

const Edit = ({ onClick }: HTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="w-5 mx-2 transform hover:text-teal-500 hover:scale-110"
  >
    <Icon.Edit className="w-6" />
  </button>
);

const Remove = ({ onClick }: HTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="w-5 mx-2 transform hover:text-teal-500 hover:scale-110"
  >
    <Icon.Remove className="w-6" />
  </button>
);

const Group = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex item-center justify-start">{children}</div>
);

export const Controls = {
  View,
  Edit,
  Remove,
  Group,
};
