const gds = require("./design_system/gds");

// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...gds.theme,
    container: {
      center: true,
    },
    fontFamily: {
      body: ["CeraReg", "ui-sans-serif", "system-ui"],
      heading: ["CeraBold", "ui-sans-serif", "system-ui"],
      sans: ["Noto Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["Courier Prime", "ui-monospace", "SFMono-Regular"],
      title: ["Saira", "ui-sans-serif", "system-ui"],
      dandelion: ["RocknRoll One", "ui-sans-serif", "system-ui"],
    },
    extend: {
      ...gds.extend,
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      backgroundImage: (theme) => ({
        tinker: "url('/tinker.jpeg')",
        learn: "url('/learn.jpeg')",
        collab: "url('/collab.jpeg')",
        polygon: "url('/polygon.png')",
        passcha: "url('/projects/passwordchaos.png')",
      }),
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus"],
    extend: {
      display: ["hover", "focus"],
      boxSizing: ["hover", "focus"],
      rotate: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
