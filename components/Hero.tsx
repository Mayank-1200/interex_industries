import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThreeWave from './ThreeWave';
import MagneticWrapper from './MagneticWrapper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden bg-[#FAFAFA]">
      
      {/* 3D Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <ThreeWave />
      </div>

      {/* Gradient Overlay for Readability */}
      {/* Left side is more opaque to support text, fading to transparent on the right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/85 to-white/30 md:to-transparent pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mb-4 inline-block"
          >
            <span className="text-[#4A9B9B] font-bold tracking-widest text-xs md:text-sm uppercase bg-white/60 md:bg-transparent px-3 py-1 rounded-full md:px-0 backdrop-blur-sm md:backdrop-blur-none border border-white/50 md:border-none shadow-sm md:shadow-none">
              Chemical Excellence Since 2009
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D2D2D] leading-[1.15] mb-6 tracking-tight"
          >
            Quality You Can Trust. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A5F] to-[#4A9B9B]">Chemistry You Can Count On.</span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="text-[#6B7280] text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-10 font-medium"
          >
            Leading manufacturer and exporter of Colloidal Silica, Sodium Silicate, and Textile Adhesives for diverse industrial applications.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <MagneticWrapper>
              <a 
                href="#products"
                className="bg-[#4A9B9B] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#3d8282] hover:shadow-lg hover:shadow-[#4A9B9B]/20 transition-all duration-300 group"
              >
                Explore Our Products 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#4A9B9B] to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;