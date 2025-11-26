"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

import Person1 from '../assets/person1.png';

import Logo1 from '../assets/logo1.png';
const Page3 = () => {
    const features = [
        {
            image: `${Logo1.src}`,
            title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
            description: "VLorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.."
        },
        {
            image: `${Logo1.src}`,
            title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
            description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor."
        },
        {
            image: `${Logo1.src}`,
            title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
            description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header with blue text */}
            <div className="container mx-auto px-4 pt-8">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-blue-600 font-medium text-sm mb-2"
                >
                    Lorem ipsum dolor sit amet
                </motion.p>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Heading with yellow border */}
                        <div className="border-l-4 border-yellow-400 pl-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase">
                                Lorem ipsum dolor sit amet consectetur. Eu elit.
                            </h1>
                        </div>

                        {/* Description paragraph */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
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
                                    transition={{ duration: 0.1, delay: 0.6 + index * 0.2 }}
                                    whileHover={{ x: 10 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="flex gap-4 items-start group justify-center align-center cursor-pointer"
                                >
                                    <div className="w-7 h-7 flex-shrink-0 overflow-hidden rounded relative">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            sizes="40px"
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

                     
                    </motion.div>

                    {/* Right Column - Motorcycle Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="rounded-lg overflow-hidden shadow-2xl relative aspect-[4/3]"
                        >
                            <Image
                                src={`${Person1.src}`}
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
                transition={{ duration: 0.6, delay: 1.6 }}
                className="h-6 bg-gradient-to-r from-blue-900 via-teal-600 to-purple-900 mt-12"
                style={{ transformOrigin: 'left' }}
            />
        </div>
    );
};

export default Page3;
