export const blueColors = [
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
];
export const redColors = [
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
];
export const pinkColors = [
  "bg-pink-100",
  "bg-pink-200",
  "bg-pink-300",
  "bg-pink-400",
];
export const bgOptions = {
  BLUE: blueColors,
  RED: redColors,
  PINK: pinkColors,
};
export const textColors = {
  BLUE: {
    100: "text-blue-100",
    900: "text-blue-900",
  },
  RED: {
    100: "text-red-100",
    900: "text-red-900",
  },
  PINK: {
    // notice we switch this for pink
    100: "text-pink-900",
    900: "text-pink-100",
  },
};

export const kitColors = { blueColors, redColors, pinkColors };
