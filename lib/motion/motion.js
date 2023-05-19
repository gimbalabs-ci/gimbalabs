import React from "react";

export const ease1 = { ease: [0.6, 0.01, -0.05, 0.8] };
export const gdsEase12 = { duration: 0.5, ease: "easeInOut" };

export const stagger1Parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const stagger1ChildLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: ease1 },
  exit: {
    opacity: 0,
  },
};
export const stagger1Child = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { ease: "anticipate" } },
  exit: {
    opacity: 0,
  },
};
export const stagger1ChildRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: ease1 },
  exit: {
    opacity: 0,
  },
};

export const animate = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const GdsPageTransition = {
  initial: {
    y: 0,
    // x: -96,
    // skewY: -2,
    opacity: 1,
    // scale: 0.97,
  },
  animate: {
    transition: {
      ...gdsEase12,
    },

    opacity: 1,
  },
  exit: {
    // x: 96,
    // y: 32,
    // skewY: 2,
    // scale: 0.97,
    opacity: 1,
    transition: {
      ...gdsEase12,
    },
  },
};
