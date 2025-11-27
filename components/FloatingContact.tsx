import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, MoreHorizontal } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close when clicking outside - handled by a simple overlay if needed, 
  // or just relying on toggle logic for simplicity here.

  const actions = [
    { icon: Phone, label: "Call Us", href: "tel:+919904440729", color: "bg-blue-500" },
    { icon: Mail, label: "Email", href: "mailto:info@intrexindustries.com", color: "bg-red-500" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919904440729", color: "bg-green-500" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2">
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="bg-white text-gray-700 text-xs py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity md:block hidden">
                  {action.label}
                </span>
                <div className={`p-3 rounded-full text-white shadow-lg ${action.color} hover:brightness-110 transition-all`}>
                  <action.icon size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="bg-[#4A9B9B] text-white p-4 rounded-full shadow-xl hover:bg-[#3d8282] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A9B9B] focus:ring-offset-2"
        aria-label="Contact Options"
      >
         {isOpen ? <MoreHorizontal size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;