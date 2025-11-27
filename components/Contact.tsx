import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#4A9B9B] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
             <h3 className="text-2xl font-semibold text-[#1E3A5F]">Contact Information</h3>
             
             <div className="space-y-6">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F0E8] transition-colors group">
                 <div className="bg-[#4A9B9B]/10 p-3 rounded-full text-[#4A9B9B] group-hover:bg-[#4A9B9B] group-hover:text-white transition-colors">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-[#2D2D2D] mb-1">Our Location</h4>
                   <p className="text-[#6B7280] text-sm leading-relaxed">
                     Anand Liners Gate, Plot No. 19, Svy No. 239,<br />
                     Shapar - Veraval, Rajkot - 360024
                   </p>
                 </div>
               </a>

               <a href="tel:+919904440729" className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F0E8] transition-colors group">
                 <div className="bg-[#4A9B9B]/10 p-3 rounded-full text-[#4A9B9B] group-hover:bg-[#4A9B9B] group-hover:text-white transition-colors">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-[#2D2D2D] mb-1">Phone Number</h4>
                   <p className="text-[#6B7280] text-sm">+91 9904440729</p>
                 </div>
               </a>

               <a href="mailto:info@intrexindustries.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F0E8] transition-colors group">
                 <div className="bg-[#4A9B9B]/10 p-3 rounded-full text-[#4A9B9B] group-hover:bg-[#4A9B9B] group-hover:text-white transition-colors">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-[#2D2D2D] mb-1">Email Address</h4>
                   <p className="text-[#6B7280] text-sm">info@intrexindustries.com</p>
                 </div>
               </a>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] outline-none transition-all" placeholder="+91..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#4A9B9B] text-white font-semibold py-4 rounded-lg hover:bg-[#3d8282] transition-colors flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;