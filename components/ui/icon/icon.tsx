import React, { FC, useEffect, useRef, useState } from "react";
import { IIconProps } from "@/components/ui/icon/icon.type";
import styles from "./icon.module.scss";
const Icon: FC<IIconProps> = ({ name, className }) => {
  const SvgIcon = useRef<React.FC<React.SVGProps<SVGSVGElement>> | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      SvgIcon.current = (await import(`@/assets/images/icons/${name}.svg`)).ReactComponent;
    };

    importIcon().then(() => setLoading(false));
  }, [name]);

  if (SvgIcon.current && !loading) {
    return (
      <span className={styles.icon + " icon " + className}>
        <SvgIcon.current />
      </span>
    );
  }

  return null;
};

export default Icon;
