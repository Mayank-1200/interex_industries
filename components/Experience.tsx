import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Globe, Smile } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: 27,
    suffix: "+",
    label: "Years of Experience",
    icon: Calendar
  },
  {
    id: 2,
    value: 10,
    suffix: "+",
    label: "Countries Exported",
    icon: Globe
  },
  {
    id: 3,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    icon: Smile
  }
];

const StatCard: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // A simple count-up implementation could be more complex,
  // but for pure React/Framer without extra libs this visual fade works well
  // or we simulate it. To keep it robust without extra deps, we'll animate opacity/slide.

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: stat.id * 0.2 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
    >
      <div className="mb-4 p-3 bg-[#F5F0E8] rounded-full text-[#4A9B9B] group-hover:-translate-y-2 transition-transform duration-500">
        <stat.icon size={32} />
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-2 font-poppins">
        {isInView ? (
          <CountUp end={stat.value} duration={2} />
        ) : (
          0
        )}
        {stat.suffix}
      </h3>
      <p className="text-[#6B7280] font-medium">{stat.label}</p>
    </motion.div>
  );
};

const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;