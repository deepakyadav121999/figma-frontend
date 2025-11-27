"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";


import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";

type CardData = {
  id: number;
  imageSrc: string;
  title: string;
  excerpt: string;
  href?: string;
  // NEW: objectPosition string accepted by CSS (examples: "center top", "50% 30%")
  objectPosition?: string;
};

const cards: CardData[] = [
  {
    id: 1,
    imageSrc: img1.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    href: "#",
    objectPosition: "center ", // show top-center area of image
  },
  {
    id: 2,
    imageSrc: img2.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim velenatis bibendum.",
    href: "#",
    objectPosition: "center  66%", // shift focal point upward (statue head)
  },
  {
    id: 3,
    imageSrc: img3.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    href: "#",
    objectPosition: "center 22%", // show the girl (adjust percent until satisfied)
  },
  {
    id: 4,
    imageSrc: img4.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    href: "#",
    objectPosition: "center  30%", // default center
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const Page6: React.FC = () => {
  return (
    /* added position: "relative" so the absolutely-positioned gradient line sits inside this section */
    <section className="py-12 bg-white main-div" style={{ position: "relative" }}>
      <div className="mb-10 ml-10">
          <p className="text-sm text-sky-600 font-medium">Lorem ipsum dolor sit amet</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight uppercase">
             LOREM IPSUM dolor sit
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 text-xl">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </div>
      <div className="max-w-4xl mx-auto px-6">
        

        {/* ---------- decorative slanted gradient border / line (behind cards) ---------- */}
        <div
          aria-hidden
          className="absolute -z-10 pointer-events-none"
          style={{
            width: "2018.9139428628887px",
            height: "674.5560130830231px",
            top: "120px",         // small tweak from your huge value so it sits near the cards — change if you want exact position
            left: "-236.89px",
            transform: "rotate(-31.62deg)",
            opacity: 1,
            borderWidth: "2px",
            borderStyle: "solid",
            borderImageSource:
              "linear-gradient(180deg, rgba(21, 90, 218, 0.1) 0%, rgba(11, 116, 59, 0.1) 100%)",
            borderImageSlice: 1,
          }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {cards.map((c, i) => (
            <motion.div key={c.id} variants={item}>
              <Card className="overflow-hidden rounded-xl shadow-sm border-none border-0 rounded-none">
                <div className="relative w-full h-[180px] sm:h-[160px] md:h-[180px]">
                  <Image
                    src={c.imageSrc}
                    alt={c.title}
                    fill
                    priority={i < 2}
                    // apply objectFit + objectPosition per card
                    style={{
                      objectFit: "cover",
                      objectPosition: c.objectPosition ?? "center center",
                    }}
                    className="rounded-t-xl"
                  />
                </div>

                <CardContent className="p-5 border-none border-0 rounded-none">
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.excerpt}</p>

                  <div className="mt-4">
                    <a
                      href={c.href}
                      className="text-sm text-sky-600 font-medium hover:underline inline-flex items-center gap-2"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page6;
