"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

const Page9: React.FC = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <section className="flex justify-center py-16 md:py-20 px-6">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fade}
            className="flex justify-center mb-6"
          >
            <Card className="shadow-none border-none ">
              <CardContent className="p-0 text-sm font-semibold">
                <div className="flex items-center gap-8 md:gap-12 lg:gap-16 bg-gray-300 px-5 py-2 ">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-xl md:text-2xl font-bold cursor-pointer "
                  >
                    LOGO
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fade}
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight"
          >
            LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. DUI.
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={fade}
            className="mt-4 max-w-2xl mx-auto  md:text-base text-xl"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu.
            Ipsum nullam.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            variants={fade}
            className="mt-8"
          >
            <Button asChild className="px-6 py-2 bg-[#1959AC]">
              <a href="#" className="inline-flex items-center gap-2">
                Loerum Ipsum
                <svg width="18" height="18" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M5 9h10M11 5l4 4-4 4" />
                </svg>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0D121C] text-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div>
              <Card className="bg-[#E5E7EB] w-fit px-6 py-1 rounded-sm shadow-none border-none">
                <CardContent className="p-0 text-black font-semibold text-sm">
                  LOGO
                </CardContent>
              </Card>
            </div>

            {[1, 2, 3, 4].map((col) => (
              <Card
                key={col}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="p-0">
                  <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page9;