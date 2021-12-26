import CalendarPage from "../calendar/CalendarPage";
import MenuPage from "../menu/MenuPage";
import TeamPage from "../team/TeamPage";
import UpdatePage from "../updates/UpdatePage";
import GimbalGrid from "./GimbalGrid";
import BlankWhite from "./gridboxes/BlankWhite";
import GBCalendar from "./gridboxes/GBCalendar";
import GBLogo from "./gridboxes/GBLogo";
import GBWeeklyUpdates from "./gridboxes/GBWeeklyUpdates";
import Letter from "./gridboxes/Letter";
import OldG from "./gridboxes/OldG";
import PasswordChaos from "./gridboxes/PasswordChaos";

const { default: DandelionPage } = require("../dandelion/DandelionPage");
const { default: PBLPage } = require("../pbl/PBLPage");
const { default: GBDandelion } = require("./gridboxes/GBDandelion");
const { default: GBPBL } = require("./gridboxes/GBPBL");
const { default: HamburgerMenu } = require("./gridboxes/HamburgerMenu");
const {
  default: Testimony,
  TestimonyRoberto,
} = require("./gridboxes/Testimony");
const {
  TitleGroupDark,
  default: TitleGroup,
} = require("./gridboxes/TitleGroup");

const gimbalabs = [
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "G",
    },
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "i",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "m",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "b",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "a",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "l",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "a",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "b",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "s",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
  // Old G Component
  {
    gridBoxStyle: `col-span-2 row-span-1`,
    gridBoxComponent: OldG,
    transitionColor: "bg-green-600",
    gridBoxProps: {},
    fullPageComponent: MenuPage,
    fullPageProps: {},
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-2 `,
    gridBoxComponent: BlankWhite,
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-black2-900",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-2 `,
    gridBoxComponent: BlankWhite,
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-black2-900",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-3 row-span-3 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-3 row-span-3 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
];

export const gridData = [
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-4 row-span-1    `,
    gridBoxComponent: GBLogo,
  },

  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-4    `,
    gridBoxComponent: TitleGroup,
  },
  {
    gridBoxStyle: "col-span-2 row-span-1 bg-black2-900",
    gridBoxComponent: HamburgerMenu,
    transitionColor: "bg-offWhite",
    gridBoxProps: {},
    fullPageComponent: MenuPage,
    fullPageProps: {},
  },
  {
    gridBoxStyle: ` col-span-2 row-span-1 `,
    gridBoxComponent: GBCalendar,
    gridBoxProps: {},
    transitionColor: "bg-offWhite",
    fullPageComponent: CalendarPage,
    fullPageProps: {},
  },
  {
    gridBoxStyle: ` col-span-2 row-span-1 `,
    gridBoxComponent: GBWeeklyUpdates,
    gridBoxProps: {},
    transitionColor: "bg-offWhite",
    fullPageComponent: UpdatePage,
    fullPageProps: {},
  },
  {
    gridBoxComponent: GBPBL,
    gridBoxProps: {},
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-2`,
    transitionColor: "bg-offWhite",
    fullPageComponent: PBLPage,
    fullPageProps: {
      text:
      "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
  },
  {
    transitionColor: "gradient-yellow",
    gridBoxStyle: `col-span-full sm:col-span-7 row-span-3   `,
    gridBoxComponent: GBDandelion,
    gridBoxProps: {},
    fullPageComponent: DandelionPage,
    fullPageProps: {},
  },
  {
    transitionColor: "bg-offWhite",
    gridBoxStyle: `col-span-full  sm:col-span-5 row-span-2   `,
    gridBoxComponent: TestimonyRoberto,
    gridBoxProps: {},
    fullPageComponent: TeamPage,
    fullPageProps: {},
  },
  {
    transitionColor: "bg-offWhite",
    gridBoxStyle: `col-span-full  sm:col-span-5 row-span-2   `,
    gridBoxComponent: Testimony,
    gridBoxProps: {
      owner: "James",
    },
    fullPageComponent: TeamPage,
    fullPageProps: {},
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-full sm:col-span-8 row-span-5   `,
    gridBoxComponent: TitleGroupDark,
    gridBoxProps: {},
  },
  {
    gridBoxStyle: `col-span-6 row-span-1`,
    gridBoxComponent: PasswordChaos,
    // transitionColor: "bg-red-600",
    //gridBoxProps: {},
    fullPageComponent: MenuPage,
    //fullPageProps: {},
  },

  // letters and blank white squares
  ...gimbalabs,
];
