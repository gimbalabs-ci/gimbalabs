import CalendarPage from "../calendar/CalendarPage";
import MenuPage from "../menu/MenuPage";
import TeamPage from "../team/TeamPage";
import UpdatePage from "../updates/UpdatePage";
import StakePoolPage from "../stakepools/StakePoolPage"
import GimbalGrid from "./GimbalGrid";
import BlankWhite from "./gridboxes/BlankWhite";
import GBCalendar from "./gridboxes/GBCalendar";
import GBLogo from "./gridboxes/GBLogo";
import Letter from "./gridboxes/Letter";
import WelcomeTo2024 from "./gridboxes/WelcomeTo2024";
import Letter6xl from "./gridboxes/Letter6xl";
import GBBlog from "./gridboxes/GBBlog";
import GBSolutions from "./gridboxes/GBSolutions";
import GovernancePage from "../governance/GovernancePage";
import Governance from "./gridboxes/Governance";
import OpenSpacesCard from "./gridboxes/OpenSpacesCard";
import GoLiveCodingCard from "./gridboxes/GoLiveCodingCard";
import PlaygroundSessionsCard from "./gridboxes/PlaygroundSessionsCard";
import AndamioCard from "./gridboxes/AndamioCard";
import MeshLiveCodingCard from "./gridboxes/MeshLiveCodingCard";
import MainPosterCard from "./gridboxes/MainPosterCard";
import DigestCard from "./gridboxes/DigestCard";


const { default: DandelionPage } = require("../dandelion/DandelionPage");
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
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-black2-900",
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
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-3`,
    gridBoxComponent: GoLiveCodingCard,
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
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: Letter6xl,
    gridBoxProps: {
      l: "2",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: Letter6xl,
    gridBoxProps: {
      l: "0",
    },
  },
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-4`,
    gridBoxComponent: DigestCard,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: Letter6xl,
    gridBoxProps: {
      l: "2",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: Letter6xl,
    gridBoxProps: {
      l: "4",
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
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-3`,
    gridBoxComponent: OpenSpacesCard,
  },
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-3`,
    gridBoxComponent: PlaygroundSessionsCard,
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
    gridBoxStyle: ` col-span-full sm:col-span-6 row-span-4`,
    gridBoxComponent: Governance,
    fullPageComponent: GovernancePage,
    transitionColor: "bg-black",
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
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-6`,
    gridBoxComponent: MeshLiveCodingCard,
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
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-2 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-black2-900",
    },
  },
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-8 row-span-6`,
    gridBoxComponent: AndamioCard,
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

  // {
  //   gridBoxStyle: "col-span-2 row-span-1 bg-black2-900",
  //   gridBoxComponent: HamburgerMenu,
  //   transitionColor: "bg-offWhite",
  //   gridBoxProps: {},
  //   fullPageComponent: MenuPage,
  //   fullPageProps: {},
  // },
  {
    gridBoxStyle: ` col-span-2 row-span-1 `,
    gridBoxComponent: GBCalendar,
    gridBoxProps: {},
    transitionColor: "bg-offWhite",
    fullPageComponent: CalendarPage,
    fullPageProps: {},
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-2 row-span-1 `,
    gridBoxComponent: GBBlog,
    gridBoxProps: {},
    transitionColor: "bg-offWhite",
    fullPageProps: {},
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-2 row-span-1 `,
    gridBoxComponent: GBSolutions,
    gridBoxProps: {},
    transitionColor: "bg-offWhite",
    fullPageProps: {},
  },
  // {
  //   gridBoxStyle: ` col-span-2 row-span-1 `,
  //   gridBoxComponent: GBWeeklyUpdates,
  //   gridBoxProps: {},
  //   transitionColor: "bg-offWhite",
  //   fullPageComponent: UpdatePage,
  //   fullPageProps: {},
  // },
  // {
  //   gridBoxComponent: GBPBL,
  //   gridBoxProps: {},
  //   gridBoxStyle: `col-span-full sm:col-span-6 row-span-2`,
  //   transitionColor: "bg-offWhite",
  //   fullPageComponent: PBLPage,
  //   fullPageProps: {
  //     text:
  //     "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
  //   },
  // },
  // {
  //   disable: true,
  //   gridBoxStyle: `col-span-full sm:col-span-8 row-span-1 `,
  //   gridBoxComponent: DandelionContrib,
  //   gridBoxProps: {},
  // },
  // {
  //   disable: true,
  //   gridBoxStyle: ` col-span-full sm:col-span-8 row-span-2  `,
  //   gridBoxComponent: TitleGroupDark,
  //   gridBoxProps: {},
  // },
  // {
  //   transitionColor: "bg-offWhite",
  //   gridBoxStyle: `col-span-full  sm:col-span-6 row-span-2   `,
  //   gridBoxComponent: Testimony,
  //   gridBoxProps: {
  //     owner: "James",
  //   },
  //   fullPageComponent: TeamPage,
  //   fullPageProps: {},
  // },
  // {
  //   transitionColor: "gradient-yellow",
  //   gridBoxStyle: `col-span-full sm:col-span-10 row-span-2   `,
  //   gridBoxComponent: GBDandelion,
  //   gridBoxProps: {},
  //   fullPageComponent: DandelionPage,
  //   fullPageProps: {},
  // },
  // {
  //   transitionColor: "gradient-yellow",
  //   gridBoxStyle: `col-span-full sm:col-span-6 row-span-5`,
  //   gridBoxComponent: UpcomingEvents,
  //   gridBoxProps: {},
  //   fullPageComponent: CalendarPage,
  //   fullPageProps: {},
  // },
  // {
  //   disable: true,
  //   transitionColor: "gradient-video",
  //   gridBoxStyle: `col-span-full sm:col-span-10 row-span-1`,
  //   gridBoxComponent: FeaturedVideo,
  // },

  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-10 row-span-3`,
    gridBoxComponent: WelcomeTo2024,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-full  md:col-span-6 row-span-6 `,
    gridBoxComponent: MainPosterCard,
  }, 
  
  // letters and blank white squares
  ...gimbalabs,
];
