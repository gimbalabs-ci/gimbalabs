import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useWindowSize } from "../../../lib/hooks";
import DiscordButton from "../../shared_ui/DiscordButton";
import WithTransfer from "../WithTransfer";

export default function Testimony(props) {
  const james = "/team/james-square.jpg";
  const juliane = "/team/juliane-square.jpg";
  const roberto = "/team/roberto-square.jpg";
  const kyle = "/team/kyle.png";
  return (
    <WithTransfer {...props}>
      <div className="p-6 flex flex-col">
        <div className={`text-2xl font-heading mb-2 text-black2-900 `}>
          For three years, Gimbalabs has been a place to learn, build, and make sense of new possibilities for building decentralized ecosystems on the Cardano blockchain. We have helped launch projects etc. Now we are inviting you to get involved.
        </div>
        <div className={`gg-subtitle mb-2 text-black2-900 `}>

        </div>

        <div className="mt-auto flex items-center">
          <div className="flex flex-col w-full">
            <div className={`gg-subtitle  text-black2-900 flex `}>
              Want to learn more? Join Gimbalabs on Discord
            </div>
            <DiscordButton className="w-6 pt-4 text-red-600" />
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}

export function LiveCoding(props) {
  return (
    <WithTransfer {...props}>
      <div className="p-6 flex flex-col">
        <div className={`text-4xl font-heading mb-2 text-black2-900 `}>
          Live Coding Sessions
        </div>
        <div className={`gg-subtitle mb-2 text-black2-900 `}></div>

        <div className="mt-auto flex items-center">
          <div className="mt-auto flex items-center">
            <div className="flex flex-col w-full">
              <div className={`gg-subtitle  text-black2-900 flex `}>
                Every Wednesday and Thursday 1430-1600utc
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}
