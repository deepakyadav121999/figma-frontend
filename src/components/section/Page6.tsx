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
    objectPosition: "center ",
  },
  {
    id: 2,
    imageSrc: img2.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim velenatis bibendum.",
    href: "#",
    objectPosition: "center  66%",
  },
  {
    id: 3,
    imageSrc: img3.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    href: "#",
    objectPosition: "center 22%",
  },
  {
    id: 4,
    imageSrc: img4.src,
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    href: "#",
    objectPosition: "center  30%",
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
  // generate 20 curved path `d` strings with slightly varying control points so they cross
  const curvePaths = Array.from({ length: 20 }).map((_, i) => {
    // tuned parameters to create crossing shapes in the middle-area
    const startX = -50 + i * 40;
    const startY = 560 + i * 2;
    const c1x = 300 + i * 18;
    const c1y = 420 - i * 6;
    const c2x = 980 + i * 8;
    const c2y = 260 + i * 6;
    const endX = 1820 - i * 6;
    const endY = 140 - i * 2;
    return `M${startX} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`;
  });

  return (
    /* added position: "relative" so the absolutely-positioned gradient SVG sits inside this section */
    <section className="py-12 bg-white main-div" style={{ position: "relative" }}>
      {/* ---------------- DECORATIVE CURVED SVG (behind cards) ----------------
          REPLACED: static path list -> programmatic generation of 20 curves
          - Gradient stroke
          - Rotated and positioned to match Figma direction
      */}
      <svg
        aria-hidden
        className="absolute z-0 pointer-events-none"
        width="2018.9139428628887"
        height="674.5560130830231"
        viewBox="0 0 2018.9139 674.556"
        preserveAspectRatio="none"
        style={{
          top: "100px", // adjust if you want it higher/lower relative to cards
          left: "-236.89px",
          transform: "rotate(40deg)", // Figma rotation
          opacity: 1,
        }}
      >
        <defs>
          <linearGradient id="gStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#155ADA" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0B743B" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#gStroke)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {curvePaths.map((d, idx) => (
            <path key={idx} d={d} opacity={0.95 - idx * 0.02} />
          ))}
        </g>
      </svg>

      {/* --------------------------------------------------------------------- */}

      <div className="mb-10 ml-10">
        <p className="text-sm text-sky-600 font-medium">Lorem ipsum dolor sit amet</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight uppercase">LOREM IPSUM dolor sit</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 text-xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam
          mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* keep cards above the svg curves */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10"
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
                    <a href={c.href} className="text-sm text-sky-600 font-medium hover:underline inline-flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
