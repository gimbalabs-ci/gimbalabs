import React from "react";
import {
  Bonzai,
  Lotus,
  Tree1,
  Tree2,
  KoiFish,
  Axe,
  Butterfly,
  DandelionSeed,
  Bee,
  Bamboo,
} from "./svgs";

const icons = {
  Bonzai,
  Lotus,
  Tree1,
  Tree2,
  KoiFish,
  Axe,
  Butterfly,
  DandelionSeed,
  Bee,
  Bamboo,
};

export default function GetIcon({ iconName, className }) {
  const Icon = icons[iconName];
  if (!Icon) {
    return <span>not an icon</span>;
  }
  return <Icon className={className} />;
}
