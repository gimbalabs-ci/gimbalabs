import CalendarPage from "../calendar/CalendarPage";
import MenuPage from "../menu/MenuPage";
import TeamPage from "../team/TeamPage";
import UpdatePage from "../updates/UpdatePage";
import StakePoolPage from "../stakepools/StakePoolPage"
import GimbalTokenPage from "../gimbaltoken/GimbalTokenPage";
import GimbalGrid from "./GimbalGrid";
import BlankWhite from "./gridboxes/BlankWhite";
import GBCalendar from "./gridboxes/GBCalendar";
import GBLogo from "./gridboxes/GBLogo";
import GBWeeklyUpdates from "./gridboxes/GBWeeklyUpdates";
import Letter from "./gridboxes/Letter";
import Stake from "./gridboxes/Stake";
import Token from "./gridboxes/Token";
import PPBL from "./gridboxes/PPBL";
import GPTE from "./gridboxes/GPTE";
import MasteryPolicyPage from "../masterypolicy/MasteryPolicyPage";
import DandelionContrib from "./gridboxes/DandelionContrib";
import GimbalabsBg from "./gridboxes/GimbalabsBg";
import Voltaire from "./gridboxes/Voltaire";
import VoltaireWorkshop from "./gridboxes/VoltaireWorkshop";

const { default: DandelionPage } = require("../dandelion/DandelionPage");
const { default: VoltairePage } = require("../voltaire/VoltairePage");
const { default: PBLPage } = require("../pbl/PBLPage");
const { default: GBDandelion } = require("./gridboxes/GBDandelion");
const { default: UpcomingEvents } = require("./gridboxes/UpcomingEvents");
const { default: FeaturedVideo } = require("./gridboxes/FeaturedVideo");
const { default: GBPBL } = require("./gridboxes/GBPBL");
const { default: HamburgerMenu } = require("./gridboxes/HamburgerMenu");
const {
  default: Testimony,
  TestimonyRoberto,
  LiveCoding,
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
  // {
  //   gridBoxStyle: `col-span-4 row-span-1`,
  //   gridBoxComponent: Token,
  //   transitionColor: "black",
  //   //gridBoxProps: {},
  //   fullPageComponent: GimbalTokenPage,
  //   //fullPageProps: {},
  // },
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
    gridBoxStyle: `col-span-4 row-span-1`,
    gridBoxComponent: Stake,
    transitionColor: "bg-blue-600",
    //gridBoxProps: {},
    fullPageComponent: StakePoolPage,
    //fullPageProps: {},
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
    fullPageComponent: VoltairePage,
    gridBoxStyle: `bee-cursor col-span-6 row-span-2`,
    gridBoxComponent: Voltaire,
  },
  {
    gridBoxStyle: ` col-span-full sm:col-span-8 row-span-2`,
    gridBoxComponent: PPBL,
    fullPageComponent: MasteryPolicyPage,
    transitionColor: "bg-orange-200",
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
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-8 row-span-1 `,
    gridBoxComponent: DandelionContrib,
    gridBoxProps: {},
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-full sm:col-span-8 row-span-2  `,
    gridBoxComponent: TitleGroupDark,
    gridBoxProps: {},
  },
  {
    transitionColor: "bg-offWhite",
    gridBoxStyle: `col-span-full  sm:col-span-6 row-span-2   `,
    gridBoxComponent: Testimony,
    gridBoxProps: {
      owner: "James",
    },
    fullPageComponent: TeamPage,
    fullPageProps: {},
  },
  {
    transitionColor: "bg-offWhite",
    gridBoxStyle: `col-span-full  sm:col-span-5 row-span-2  `,
    gridBoxComponent: LiveCoding,
    gridBoxProps: {},
    fullPageComponent: CalendarPage,
    fullPageProps: {},
  },
  {
    transitionColor: "gradient-yellow",
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-2   `,
    gridBoxComponent: GBDandelion,
    gridBoxProps: {},
    fullPageComponent: DandelionPage,
    fullPageProps: {},
  },
  {
    transitionColor: "gradient-yellow",
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-5`,
    gridBoxComponent: UpcomingEvents,
    gridBoxProps: {},
    fullPageComponent: CalendarPage,
    fullPageProps: {},
  },
  {
    disable: true,
    transitionColor: "gradient-video",
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-1`,
    gridBoxComponent: FeaturedVideo,
  },
  // {
  //   disable: true,
  //   gridBoxStyle: `bee-cursor col-span-12 row-span-4`,
  //   gridBoxComponent: GimbalabsBg,
  // },
  {
    fullPageComponent: VoltairePage,
    gridBoxStyle: `bee-cursor-dark col-span-8 row-span-4`,
    gridBoxComponent: VoltaireWorkshop,
  },

  // {
  //   disable: true,
  //   transitionColor: "bg-blue-900",
  //   gridBoxStyle: `col-span-full  sm:col-span-3 row-span-1  `,
  //   gridBoxComponent: GPTE,
  //   gridBoxProps: {},
  //   fullPageProps: {},
  // },
  // {
  //   disable: true,
  //   gridBoxStyle: `col-span-full sm:col-span-6 row-span-3    `,
  //   gridBoxComponent: TitleGroup,
  // },


  // letters and blank white squares
  ...gimbalabs,
];
