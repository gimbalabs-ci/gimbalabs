import Link from "next/link";
import React from "react";
import Logo from "../brand/Logo";
import LogoWithText from "../brand/LogoWithText";
import MenuLinks from "../menu/MenuLinks";

export default function Footer({ footerBg = "bg-offWhite" }) {
  const textColor =
    footerBg === "bg-black2-900" ? "text-offWhite" : "text-black2-900";
  return (
    <div
      className={`relative overflow-hidden spacing-x spacing-y ${footerBg} ${textColor} `}
    >
      <div className="mb-7 lg:mb-9 flex justify-center">
        <Link href="/gimbalgrid">
          <a>
            <LogoWithText className="w-12" />
          </a>
        </Link>
      </div>
      <MenuLinks />
    </div>
  );
}
