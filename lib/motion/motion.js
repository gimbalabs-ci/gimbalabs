import React from "react";

export const ease1 = { ease: [0.6, 0.01, -0.05, 0.8] };

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
