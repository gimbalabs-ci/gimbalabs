import { motion } from "framer-motion";
import React from "react";
import { useWindowSize } from "../../../lib/hooks";
import WithTransfer from "../WithTransfer";

export default function Testimony(props) {
  const james = "/team/james-square.jpg";
  const juliane = "/team/juliane-square.jpg";
  const roberto = "/team/roberto-square.jpg";
  const kyle = "/team/kyle.png";
  console.log(props.quote.split(" ").filter((i, index) => index < 5));
  return (
    <WithTransfer {...props}>
      <div className="p-6 flex flex-col">
        <div className={`text-4xl font-heading mb-2 text-black2-900 `}>
          Welcome to our community,
        </div>
        <div className={`gg-subtitle mb-2 text-black2-900 `}>
          of developers, thinkers, builders. Here to experiment and learn.
        </div>

        <div className="mt-auto flex items-center">
          <div className="flex justify-start">
            <div className="rounded-full w-8 h-8 overflow-hidden">
              <img src={james} />
            </div>
          </div>
          <div className="ml-5 flex flex-col w-full">
            <div className={`gg-subtitle  text-black2-900 flex `}>
              {props.owner}
            </div>
            <div className="w-full flex justify-between">
              <div className="text-sm text-gray-400">Let's chat on discord</div>
              <Discord className="w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}

const Discord = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 19"
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.2135 2.38634C18.7475 1.70278 17.1755 1.19915 15.5319 0.91071C15.502 0.905143 15.4721 0.919055 15.4566 0.94688C15.2545 1.3123 15.0305 1.78903 14.8737 2.16373C13.1059 1.89477 11.3471 1.89477 9.61554 2.16373C9.45869 1.7807 9.22661 1.3123 9.02353 0.94688C9.00811 0.919984 8.97821 0.906072 8.94828 0.91071C7.30556 1.19823 5.73356 1.70185 4.26671 2.38634C4.25401 2.3919 4.24313 2.40119 4.2359 2.41324C1.25415 6.94029 0.43732 11.3561 0.838029 15.7171C0.839842 15.7384 0.851627 15.7589 0.867946 15.7718C2.83522 17.24 4.74087 18.1314 6.61112 18.7221C6.64106 18.7314 6.67277 18.7203 6.69182 18.6953C7.13423 18.0813 7.5286 17.4339 7.86673 16.7531C7.88668 16.7132 7.86764 16.6659 7.82685 16.6502C7.20132 16.409 6.60568 16.115 6.03272 15.7811C5.9874 15.7542 5.98377 15.6883 6.02547 15.6568C6.14604 15.565 6.26664 15.4695 6.38177 15.373C6.4026 15.3554 6.43163 15.3517 6.45612 15.3628C10.2202 17.1093 14.2953 17.1093 18.015 15.3628C18.0395 15.3507 18.0685 15.3545 18.0902 15.3721C18.2054 15.4685 18.326 15.565 18.4474 15.6568C18.4891 15.6883 18.4864 15.7542 18.4411 15.7811C17.8681 16.1215 17.2725 16.409 16.6461 16.6492C16.6053 16.665 16.5871 16.7132 16.6071 16.7531C16.9525 17.4329 17.3468 18.0803 17.7811 18.6943C17.7992 18.7203 17.8319 18.7314 17.8618 18.7221C19.7411 18.1314 21.6467 17.24 23.614 15.7718C23.6313 15.7589 23.6421 15.7394 23.644 15.718C24.1235 10.6762 22.8407 6.29663 20.2434 2.41416C20.237 2.40119 20.2262 2.3919 20.2135 2.38634ZM8.42884 13.0617C7.29558 13.0617 6.36182 12.0044 6.36182 10.7059C6.36182 9.4074 7.27748 8.35009 8.42884 8.35009C9.58924 8.35009 10.514 9.41669 10.4958 10.7059C10.4958 12.0044 9.58016 13.0617 8.42884 13.0617ZM16.0713 13.0617C14.9381 13.0617 14.0043 12.0044 14.0043 10.7059C14.0043 9.4074 14.9199 8.35009 16.0713 8.35009C17.2317 8.35009 18.1564 9.41669 18.1383 10.7059C18.1383 12.0044 17.2317 13.0617 16.0713 13.0617Z" />
    </svg>
  );
};
