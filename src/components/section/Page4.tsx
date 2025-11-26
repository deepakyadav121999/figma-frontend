"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Bike6 from '../assets/bike6.png';
const Page4: React.FC = () => {
    return (
        <section className="relative w-full min-h-[620px]  overflow-hidden">
            {/* Background image (local file from /public/assets/hero.jpg) */}
            <div className="absolute inset-0">
                <Image
                    src={`${Bike6.src}`}          // <-- put your local image at public/assets/hero.jpg
                    alt="Hero background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="pointer-events-none"
                    priority
                />

                {/* clipped slanted shape: adjust polygon to match your screenshot */}
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(38% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        WebkitClipPath: "polygon(38% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        // keep the image visible behind clip-path by using mix-blend / nothing else needed
                    }}
                />
                {/* overlay gradient + darken center for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20" />
            </div>

            {/* Logo top-left */}
            <div className="absolute top-6 left-6 z-20 bg-gray-300 px-5 py-2">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-xl md:text-2xl font-bold cursor-pointer "
                >
                    LOGO
                </motion.div>
            </div>

            {/* Main content centered */}
            <div className="relative z-30 flex items-center justify-center min-h-screen px-6">
                <div className="text-center max-w-4xl">
                    {/* Headline (motion) */}
                    <motion.h1
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-3xl leading-tight tracking-[-0.02em] font-bold text-white"
                        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                    >
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                    </motion.h1>

                    {/* paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="mt-6 text-sm text-white/90 max-w-[680px] mx-auto"
                    >
                       Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.

                    </motion.p>
                    
                       <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                        className="mt-6 text-sm text-white/90 max-w-[680px] mx-auto"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.

                    </motion.p>

                    {/* CTA */}
                    <div className="mt-8 flex justify-center">
                        {/* If you have shadcn's Button component: use this */}
                        <Button asChild>
                            <a href="#" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white text-slate-900 font-medium shadow hove:text-white"> 
                                Lorem Ipsum
                                <motion.span 
                                    animate={{ x: [0, 6, 0] }} 
                                    transition={{ duration: 1.5, repeat: Infinity }}    
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }} 
                                    className="ml-2 inline-block"
                                >
                                    ➜
                                </motion.span>
                            </a>
                        </Button>

                    
                    </div>
                </div>
            </div>

            {/* subtle inner border like screenshot */}
            {/* <div className="pointer-events-none absolute inset-2 border border-[#bfe0ff] rounded-sm opacity-80" /> */}
        </section>
    );
};

export default Page4;
