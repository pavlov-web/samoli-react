import React, { FC, forwardRef } from "react";
import { useClasses } from "@/hooks/useClasses";
import styles from "./button.module.scss";
import type { ButtonProps } from "./button.type";
import Icon from "@/components/ui/icon/icon";

const defaultProps = {
  size: "normal",
  type: "default",
  color: "green",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  const { size, type, color, label, icon, iconRight, rounded, className, onClick } = {
    ...defaultProps,
    ...props,
  };

  const classes = useClasses("btn", styles, [color, type, size, { rounded }]);

  return (
    <button ref={ref} className={classes + " " + className} onClick={onClick}>
      {icon && <Icon className={styles.btn__prepend_icon} name={icon} />}
      {label}
      {children}
      {iconRight && <Icon className={styles.btn__append_icon} name={iconRight} />}
    </button>
  );
});
Button.displayName = "Button";
Button.defaultProps = defaultProps as ButtonProps;
export default Button;
