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
};

export default function GetIcon({ iconName, className }) {
  const Icon = icons[iconName];
  return <Icon className={className} />;
}
