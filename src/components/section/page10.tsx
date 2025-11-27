"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* shadcn components — make sure you've run npx shadcn init and added Card/Button if needed */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* Replace these imports with your actual asset paths */
import PhoneMock from "../assets/phone-mock.png";
import BadgePlay from "../assets/google-play-badge.png";
import BadgeStore from "../assets/app-store-badge.png";

const Page10: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50  h-[60vh]">
      <div className="max-w-6xl mx-auto px-6 h-[50vh] flex items-center">
        {/* Card wrapper (shadcn) to match screenshot white sheet look */}
        <Card className="rounded-none border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* LEFT: text block */}
              <div className="px-2 md:px-6 lg:px-12">
                <motion.p
                  className="text-sm text-sky-600 font-medium mb-3"
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                >
                  Lorem Ipsum
                </motion.p>

                <motion.h2
                  className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.06 }}
                >
                  Lorem Ipsum Dolor
                  <br />
                  Sit Amet
                </motion.h2>

                <motion.p
                  className="text-sm text-slate-600 max-w-xl mb-6"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.48, delay: 0.12 }}
                >
                  Lorem ipsum dolor sit amet consectetur. Voluptate amet aliquet morbi suspendisse convallis. Urna a
                  urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.18 }}
                >
                  <a href="#" aria-label="Get on Google Play" className="inline-block">
                    <Image src={BadgePlay} alt="Google Play" width={140} height={44} />
                  </a>

                  <a href="#" aria-label="Download on the App Store" className="inline-block">
                    <Image src={BadgeStore} alt="App Store" width={140} height={44} />
                  </a>
                </motion.div>
              </div>

              {/* RIGHT: phone mockup image */}
              <div className="flex items-center justify-end pr-2 md:pr-12 relative">
                <motion.div
                  className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px] pointer-events-none"
                  initial={{ opacity: 0, scale: 0.96, rotate: -8, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -8, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
                    <Image
                      src={PhoneMock}
                      alt="Phone mockup"
                      fill
                      priority
                      style={{ objectFit: "contain" }}
                      className="drop-shadow-2xl w-full h-full"
                    />
                  </div>
                </motion.div>

                {/* decorative curved lines bottom-right */}
                <svg
                  className="absolute -bottom-6 -right-10 w-72 h-72 hidden md:block"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <g stroke="rgba(14,165,233,0.06)" strokeWidth="2" strokeLinecap="round">
                    <path d="M10 150 C50 130, 100 110, 170 90" />
                    <path d="M10 160 C50 140, 100 120, 170 100" />
                    <path d="M10 170 C50 150, 100 130, 170 110" />
                  </g>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Page10;
