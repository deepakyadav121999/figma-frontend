"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import hero from "../assets/hero.png";
import honda from "../assets/honda.png";
import bajaj from "../assets/bajaj.png";
import tvs from "../assets/tvs.png";
import royal from "../assets/royal.png";
import yamaha from "../assets/yamha.png";
import ktm from "../assets/ktm.png";
import ather from "../assets/ather.jpg";
import ola from "../assets/ola.png";
import revolt from "../assets/revolt.png";
import ultra from "../assets/ultra.jpg";
import tork from "../assets/tork.jpg";

type LogoItem = {
  src: string;
  alt: string;
  overrideClass?: string; // tailwind class for max height
  scale?: number; // visual scale applied to the image wrapper (e.g. 1.2)
};

const logos: LogoItem[] = [
  // Normal logos
  { src: hero.src, alt: "Hero", overrideClass: "max-h-[72px]" },
  { src: honda.src, alt: "Honda", overrideClass: "max-h-[84px]" },
  { src: bajaj.src, alt: "Bajaj", overrideClass: "max-h-[68px]" },
  { src: tvs.src, alt: "TVS", overrideClass: "max-h-[68px]" },

  // Logos that are small in the file — increase container and scale them up
  { src: royal.src, alt: "Royal Enfield", overrideClass: "max-h-[64px]", scale: 1.4 },
  { src: yamaha.src, alt: "Yamaha", overrideClass: "max-h-[72px]" },
  { src: ktm.src, alt: "KTM", overrideClass: "max-h-[64px]" },

  // Small or narrow logos — boost scale slightly
  { src: ather.src, alt: "Ather", overrideClass: "max-h-[56px]", scale: 1.15 },
  { src: ola.src, alt: "Ola Electric", overrideClass: "max-h-[56px]", scale: 1.25 },
  { src: revolt.src, alt: "Revolt", overrideClass: "max-h-[64px]" },

  // Very small logos — larger scale
  { src: ultra.src, alt: "Ultraviolette", overrideClass: "max-h-[56px]", scale: 1.4 },
  { src: tork.src, alt: "Tork Motors", overrideClass: "max-h-[64px]" },
];

/* animation: container staggers, item uses custom (index) to add progressive delay */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

/* itemVariants uses custom to set delay based on index */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, delay: i * 0.06 },
  }),
};

export default function Page5() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<LogoItem | null>(null);

  function openPreview(logo: LogoItem) {
    setActive(logo);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closePreview() {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = "";
  }

  return (
    <section className="w-full bg-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-3xl md:text-[28px] lg:text-[32px] font-bold tracking-wide uppercase"
                style={{ letterSpacing: "-0.02em" }}
              >
                Lorem ipsum dolor sit amet
                <br />
                consectetur. commodo leo amet.
              </motion.h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center place-items-center"
            >
              {logos.map((logo, idx) => (
                <motion.button
                  key={idx}
                  variants={itemVariants}
                  custom={idx} /* passed to show() for delay */
                  onClick={() => openPreview(logo)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[160px] h-[84px] flex items-center justify-center p-2 bg-transparent border-0 rounded focus:outline-none"
                  aria-label={`Open ${logo.alt}`}
                >
                  {/* wrapper handles container sizing; we apply transform scale for tiny logos */}
                  <div
                    className={`w-full h-full flex items-center justify-center ${logo.overrideClass ?? "max-h-[64px]"}`}
                    style={{
                      transform: `scale(${logo.scale ?? 1})`,
                      transition: "transform 160ms ease",
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={300}
                      height={120}
                      style={{ objectFit: "contain", width: "auto", height: "100%" }}
                      className="transition-all duration-300"
                      priority={idx < 6}
                    />
                  </div>
                </motion.button>
              ))}
            </motion.div>

          </CardContent>
        </Card>
      </div>

      {/* Preview Modal */}
      {open && active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closePreview}
            aria-hidden
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="relative z-60 max-w-[720px] w-[90%] bg-white rounded shadow-lg p-6"
          >
            <div className="flex justify-end">
              <button onClick={closePreview} className="text-slate-600 hover:text-slate-900">
                ✕
              </button>
            </div>

            <div className="flex items-center justify-center p-6">
              <div className="max-h-[420px] max-w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={800}
                  height={420}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button onClick={closePreview}>Close</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
