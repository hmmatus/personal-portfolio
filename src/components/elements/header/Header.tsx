"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";
import Image from "next/image";
type LinkT = {
  link: {
    route: string;
    value: string;
  };
  onClick?(): void;
};
const data = [
  {
    route: "home",
    value: "Home",
  },
  {
    route: "about",
    value: "About",
  },
  {
    route: "contact",
    value: "Contact",
  },
];

const CustomLink = ({ link, onClick }: LinkT) => {
  return (
    <Link className="text-white text-2xl block m-4" href={link.route}>
      <label onClick={onClick}>{link.value}</label>
    </Link>
  );
};

const MobileNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-lg focus:outline-none pr-4"
        >
          <Image
            alt="Menu mobile"
            width={30}
            height={30}
            src={`/images/icons/${
              isMobileMenuOpen ? "menu-open.svg" : "menu.svg"
            }`}
          />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className={`flex flex-col absolute right-0 ${styles["mobile-div"]}`}
        >
          {data.map((elto) => (
            <CustomLink
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              key={elto.route}
              link={elto}
            />
          ))}
        </div>
      )}
    </>
  );
};

const LaptopNav = () => {
  return (
    <>
      <div className="flex">
        {data.map((elto) => (
          <CustomLink key={elto.route} link={elto} />
        ))}
      </div>
    </>
  );
};

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <label>LOGO</label>
      {windowWidth && windowWidth >= 1024 ? <LaptopNav /> : <MobileNav />}
    </nav>
  );
}
