"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Bike2 from '../assets/bike2.png'
import Bike3 from '../assets/bike3.png'
import Bike4 from '../assets/bike4.png'
import Bike5 from '../assets/bike5.png'
const Page2 = () => {
    const features = [
        {
            image: `${Bike3.src}`,
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: "Vestibulum ornare fermentum feugiat."
        },
        {
            image: `${Bike4.src}`,
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: "Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."
        },
        {
            image: `${Bike5.src}`,
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: "Vestibulum nisl morbi metus gravida eu facilisi enim. Ut cliam auctor tortor tincidunt."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header with blue text */}
            <div className="container mx-auto px-4 pt-8">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.35 }}
                    className="text-blue-600 font-medium text-sm mb-2"
                >
                    Lorem ipsum dolor sit
                </motion.p>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.12 }}
                        className="space-y-6"
                    >
                        {/* Heading with yellow border */}
                        <div className="border-l-4 border-yellow-400 pl-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                LOREM IPSUM<br />DOLOR SIT AMET
                            </h1>
                        </div>

                        {/* Description paragraph */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.45, delay: 0.18 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-gray-700 leading-relaxed text-sm"
                        >
                            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                        </motion.p>

                        {/* Feature Cards */}
                        <div className="space-y-4 mt-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.35, delay: 0.35 + index * 0.12 }}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 items-start group cursor-pointer"
                                >
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded relative">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            sizes="80px"
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.8 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Lorem ipsum
                                <motion.svg
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.2, repeat: Infinity }}
                                    className="ml-2 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {/* horizontal line */}
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="15"
                                        y2="12"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />

                                    {/* arrow head > */}
                                    <polyline
                                        points="15,6 21,12 15,18"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </motion.svg>

                            </motion.button>

                            <motion.a
                                href="tel:123456789"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded font-medium text-sm flex items-center gap-2 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                123456789
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Motorcycle Image */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        style={{ transformOrigin: 'left' }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.18 }}
                            viewport={{ once: false, amount: 0.2 }}
                            whileInView={{ scaleX: 1 }}
                            className="rounded-lg overflow-hidden shadow-2xl relative aspect-[4/3]"
                        >
                            <Image
                                src={`${Bike2.src}`}
                                alt="Motorcycles"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom colored bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="h-6 bg-gradient-to-r from-blue-900 via-teal-600 to-purple-900 mt-12"
                style={{ transformOrigin: 'left' }}
            />
        </div>
    );
};

export default Page2;
