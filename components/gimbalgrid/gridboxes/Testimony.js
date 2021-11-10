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
        <div className={`text-4xl font-heading mb-2 text-black2-900 `}>
          At Gimbalabs,
        </div>
        <div className={`gg-subtitle mb-2 text-black2-900 `}>
          we're building a community of developers, thinkers, and builders.
        </div>

        <div className="mt-auto flex items-center">
          <div className="flex justify-start">
            <div className="rounded-full w-8 h-8 overflow-hidden">
              <img src={james} />
            </div>
          </div>
          <div className="ml-5 flex flex-col w-full">
            <div className={`gg-subtitle  text-black2-900 flex `}>
              James Dunseith
            </div>
            <div className="w-full flex justify-between">
              <div className="text-sm text-gray-400">co-founder</div>
              <DiscordButton className="w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}

export function TestimonyRoberto(props) {
  const james = "/team/james-square.jpg";
  const juliane = "/team/juliane-square.jpg";
  const roberto = "/team/roberto-square.jpg";
  const kyle = "/team/kyle.png";
  return (
    <WithTransfer {...props}>
      <div className="p-6 flex flex-col">
        <div className={`text-4xl font-heading mb-2 text-black2-900 `}>
          Let's open source
        </div>
        <div className={`gg-subtitle mb-2 text-black2-900 `}>the world</div>

        <div className="mt-auto flex items-center">
          <div className="flex justify-start">
            <div className="rounded-full w-8 h-8 overflow-hidden">
              <img src={roberto} />
            </div>
          </div>
          <div className="ml-5 flex flex-col w-full">
            <div className={`gg-subtitle  text-black2-900 flex `}>Roberto C. Morano</div>
            <div className="w-full flex justify-between">
              <div className="text-sm text-gray-400">co-founder</div>
              <div className="w-6 text-2xl">✌️</div>
            </div>
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}
