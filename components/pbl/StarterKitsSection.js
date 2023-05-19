import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import LargeCards from "./LargeCards";

const gdsEase12 = {
  duration: 0.7,

  ease: "easeInOut",
};
export default function StarterKitsSection({ csks, colors }) {
  const [hov, setHov] = useState(false);

  return (
    <section
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="text-black2-900  "
    >
      <div className=" spacing-y spacing-x flex flex-col ld:flex-row justify-stretch">
        <LargeCards list={csks} colors={colors.blueColors} />
        <div>
          <Link href={`/pbl/csk`}>
            <a>
              <div>
                <motion.h3
                  animate={{ transition: { ...gdsEase12 }, y: hov ? -21 : 0 }}
                  className="relative z-10  max-w-13 mt-5   text-6xl "
                >
                  Cardano Starter Kits
                </motion.h3>

                <div className="w-full flex justify-end">
                  <div>
                    <button className="gds-btn bg-blue-600 hover:bg-blue-200 text-blue-100 hover:text-black2-900 border-blue-600">
                      /csk
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
