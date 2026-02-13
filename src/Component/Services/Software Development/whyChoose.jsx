import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  DollarSign,
  Users,
  Lightbulb
} from "lucide-react";

const whyChoose = [
  { title: "Expert Team", icon: ShieldCheck },
  { title: "On-time Delivery", icon: Clock },
  { title: "Cost Effective", icon: DollarSign },
  { title: "Client Centric", icon: Users },
  { title: "Innovative", icon: Lightbulb },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-blue-800 mb-4"
        >
          Why Choose GlobalXperts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          We combine technical expertise, reliability, and innovation to
          deliver solutions that truly create impact.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {whyChoose.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border border-gray-100 p-6
                           shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl
                                bg-blue-100 text-blue-700
                                flex items-center justify-center
                                group-hover:bg-blue-700
                                group-hover:text-white
                                transition">
                  <Icon size={22} />
                </div>

                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
