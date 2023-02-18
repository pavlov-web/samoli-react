import React, { FC } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { EContacts, menuHeader } from "@/data";
import { useRouter } from "next/router";
import { Button } from "@/components/ui";

const Header: FC = () => {
  const router = useRouter();
  const classesLink = (url: string) => {
    return `${styles.header_menu_item} ${router.pathname === url && styles.header_menu_item__active}`;
  };

  return (
    <div className={styles.header}>
      <div className="container row">
        <Link className={styles.header_logo} href={"/"}>
          <Image src={"/images/svg/logo.svg"} width={150} height={55} priority={true} alt={"Sam.Oli"} />
        </Link>

        <div className={styles.header_contact}>
          <div className="phones">
            <a className={"link-underline"} href={"tel:" + EContacts.PHONE_ONE}>
              {EContacts.PHONE_ONE}
            </a>
            {", "}
            <a className={"link-underline"} href={"tel:" + EContacts.PHONE_TWO}>
              {EContacts.PHONE_TWO}
            </a>
          </div>
          <p>{EContacts.WORKING_HOURS}</p>
        </div>

        <ul className={styles.header_menu}>
          {menuHeader.map((link, idx) => {
            return (
              <li className={classesLink(link.href)} key={idx}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>

        <Button label="Оставить заявку" color="white" />
      </div>
    </div>
  );
};

export default Header;
