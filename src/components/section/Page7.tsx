"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Bike6 from '../assets/bg2.png';
const Page7: React.FC = () => {
    return (
        <section className="relative w-full min-h-[520px]  overflow-hidden">
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
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl leading-tight tracking-[-0.02em] font-bold text-white uppercase"
                        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                    >
                       dolor sit amet consectetur. Quis
                       <br/>
                        adipiscing purus egestas aliquam viverra <br/> mi. dolor sit amet consectetur. Quis <br/> adipiscing 
                    </motion.h1>

                 
                    

                    
                    
                </div>
            </div>

            {/* subtle inner border like screenshot */}
            {/* <div className="pointer-events-none absolute inset-2 border border-[#bfe0ff] rounded-sm opacity-80" /> */}
        </section>
    );
};

export default Page7;
