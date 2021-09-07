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
};

export default function GetIcon({ iconName, className }) {
  const Icon = icons[iconName];
  return <Icon className={className} />;
}
