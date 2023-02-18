import React, { MutableRefObject, ReactNode, Ref } from "react";
import { TIconName } from "@/components/ui/icon/icon.type";

export type type = "default" | "circle";
export type color = "white" | "green" | "gray";
export type size = "small" | "normal";
export interface ButtonProps {
  label?: string;
  icon?: TIconName;
  iconRight?: TIconName;
  size?: size;
  type?: type;
  color?: color;
  children?: ReactNode;
  rounded?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
