import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface Props {
  name: string;
  icon: string;
  level: number;
  description: string;
  index: number;
}

export default function SkillCard({ name, icon, level, description, index }: Props) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={2000}
      className="relative group"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
        <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-xl transition-all" />
              <img src={icon} alt={name} className="w-12 h-12 relative z-10" />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}