import React from 'react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section className="w-full h-[300px] md:h-[400px] relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
      >
        <iframe 
          title="Interex Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.456789012345!2d70.78!3d22.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE1JzAwLjAiTiA3MMKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Overlay gradient to soften edges */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_10px_30px_rgba(0,0,0,0.1)]"></div>
      </motion.div>
    </section>
  );
};

export default MapSection;