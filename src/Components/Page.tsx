import { motion } from "framer-motion";

export const Page = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-row w-[70vw] h-[80vh] shadow-lg bg-white rounded-lg"
    >
      {children}
    </motion.div>
  );
};
