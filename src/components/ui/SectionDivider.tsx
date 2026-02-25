import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative my-32">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent" />
      </div>

      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-3 h-3 rounded-full bg-[#00f0ff] shadow-[0_0_20px_#00f0ff]"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
