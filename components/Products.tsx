import React, { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import colloidalSilicaImg from '../images/sodium_silica.png';
import sodiumSilicateImg from '../images/sodium_silicate.png';
import textileAdhesiveImg from '../images/textile_adhesive.png';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Colloidal Silica",
    description: "High-purity colloidal silica solutions designed for precision polishing, advanced coatings, and catalyst applications.",
    image: colloidalSilicaImg
  },
  {
    id: 2,
    title: "Sodium Silicate",
    description: "Versatile sodium silicate solutions optimized for industrial adhesives, detergent formulations, and binding applications.",
    image: sodiumSilicateImg
  },
  {
    id: 3,
    title: "Textile Adhesive",
    description: "Specialized adhesive solutions engineered specifically for high-strength textile and fabric bonding applications.",
    image: textileAdhesiveImg
  }
];

const TiltCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Reduced rotation range slightly for better image visibility
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform
        }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full overflow-hidden group"
      >
        {/* Image Section */}
        <div
          className="h-56 w-full relative bg-white flex items-center justify-center p-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gray-100"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <h3
            className="text-2xl font-bold text-[#2D2D2D] mb-4"
            style={{ transform: "translateZ(30px)" }}
          >
            {product.title}
          </h3>

          <p
            className="text-[#6B7280] leading-relaxed mb-6 flex-grow"
            style={{ transform: "translateZ(20px)" }}
          >
            {product.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4"
          >
            Our Products
            <span className="block w-20 h-1 bg-[#4A9B9B] mx-auto mt-4 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7280] text-lg"
          >
            Premium quality chemical solutions tailored for diverse industrial applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <TiltCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;