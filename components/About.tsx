import React from 'react';
import { motion } from 'framer-motion';
import interexImage from '../images/interex_industries.png';

const FloatingParticle: React.FC<{ delay: number; x: number[]; y: number[]; size: number }> = ({ delay, x, y, size }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-[#4A9B9B] opacity-10"
      style={{ width: size, height: size }}
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Animated Floating Molecules Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large particles */}
        <FloatingParticle size={300} delay={0} x={[0, 50, -30]} y={[0, -50, 20]} />
        <div className="absolute top-1/4 right-0">
          <FloatingParticle size={200} delay={2} x={[0, -40, 20]} y={[0, 60, -20]} />
        </div>
        <div className="absolute bottom-0 left-1/3">
           <FloatingParticle size={150} delay={5} x={[0, 30, -30]} y={[0, -40, 10]} />
        </div>

        {/* Small molecular dots */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-[#1E3A5F] rounded-full opacity-20"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-6 h-6 bg-[#4A9B9B] rounded-full opacity-20"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#2D2D2D] rounded-full opacity-10"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
             >
                <img
                  src={interexImage}
                  alt="Interex Industries Facility"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/20 mix-blend-multiply"></div>
             </motion.div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#2D2D2D]"
            >
              About Interex Industries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B7280] leading-relaxed"
            >
              With over 27 years of experience in chemical manufacturing, Interex Industries has established itself as a trusted name in producing high-quality silica and adhesive solutions. We are committed to innovation and excellence in every batch we produce.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#6B7280] leading-relaxed"
            >
              Based in Rajkot, Gujarat, we pride ourselves on delivering consistent quality, competitive pricing, and reliable service to clients across 10+ countries. Our logistical expertise ensures your materials arrive safely and on time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#6B7280] leading-relaxed border-l-4 border-[#4A9B9B] pl-4"
            >
              Our state-of-the-art manufacturing facility and dedicated team ensure that every product meets the highest standards of purity and performance.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
