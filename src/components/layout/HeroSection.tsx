'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, ChevronDown, Loader2, Menu, X } from 'lucide-react';
import Bike1 from '../assets/bike1.png';

// Email validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Main Page Component
const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Newsletter signup:', email);

    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Main Container with Split Layout */}

      {/* Header/Navigation */}
      <div className='absolute top-0 left-0 w-full z-20 '>
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 md:px-12 lg:px-16 py-5 border-b border-gray-200 lg:border-0 lg:mr-30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 md:gap-12 lg:gap-16 bg-gray-300 px-5 py-2 ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-xl md:text-2xl font-bold cursor-pointer "
              >
                LOGO
              </motion.div>
            </div>
            <div className='flex items-center justify-between'>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 lg:gap-10">
                {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group flex items-center  text-xl text-[#1959AC] hover:text-blue-700 font-medium relative"
                  >
                    {item}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Desktop Sign In Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block "
            >
              <Button
                variant="outline"
                className="bg-white border-gray-300 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md px-8 py-2 "
              >
                Sign In
              </Button>
            </motion.div>

            {/* Mobile Menu Button & Sign In */}
            <div className="flex items-center gap-3 lg:hidden">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-white border-gray-300 hover:bg-gray-50 text-sm px-4"
                >
                  Sign In
                </Button>
              </motion.div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden bg-gray-50"
              >
                <nav className="flex flex-col gap-4 py-4 border-t border-gray-200 mt-4">
                  {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between text-sm text-blue-600 hover:text-blue-700 font-medium py-2 px-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
      <div className="flex min-h-screen relative">
        {/* Left Section - White/Gray Background */}
        <div className="w-full lg:w-1/2 bg-gray-50 relative z-10 flex flex-col">




          {/* Hero Content */}
          <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
            <div className="max-w-lg w-full">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-black "
              >
                Lorem ipsum dolor sit amet
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8"
              >
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
                sceliq. Sed mi rhoncus id in habitant. In urna tellus nisl platea morbi libero
                imperdiet neque. Justo suspendisse tristique sollicitudin quis et viverra.
                Nunc euismod ultrices elam nulla habitasse.
              </motion.p>

              <motion.form
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="mb-4 md:mb-6"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      disabled={isSubmitting}
                      className={`h-12 md:h-14 bg-white border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
                        }`}
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#1959AC] hover:bg-blue-700 text-white px-6 md:px-8 h-12 md:h-14 text-base whitespace-nowrap w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <motion.svg
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
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

                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </motion.form>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md"
                >
                  <p className="text-green-700 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Successfully subscribed to newsletter!
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"
                >
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                </motion.div>
                <span className="text-sm text-gray-700 font-medium">No credit card required!</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Section - Image (Hidden on mobile) */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block lg:w-1/2 relative bg-gray-50"
        >
          {/* Background Image with Diagonal Curve */}
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${Bike1.src})`,
              clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
              WebkitClipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;