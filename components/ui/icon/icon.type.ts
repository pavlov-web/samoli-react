export type TIconName =
  | "arrow-double"
  | "arrow-down"
  | "arrow-down-small"
  | "arrow-left"
  | "arrow-line-left"
  | "arrow-line-right"
  | "arrow-right"
  | "arrow-up"
  | "check"
  | "diaphragm"
  | "update";

export interface IIconProps {
  name: TIconName;
  className: string;
}
