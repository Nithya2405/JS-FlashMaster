import { motion } from 'motion/react';
import { FlashCardData } from '../types';

interface FlashCardProps {
  card: FlashCardData;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function FlashCard({ card, isFlipped, onFlip }: FlashCardProps) {
  return (
    <div 
      className="perspective-1000 w-full max-w-md h-80 cursor-pointer group"
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
          <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
            {card.category}
          </span>
          <h3 className="text-xl font-semibold text-slate-800 leading-tight">
            {card.question}
          </h3>
          <p className="mt-6 text-sm text-slate-400 font-medium animate-pulse">
            Click to flip
          </p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-indigo-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center text-white rotate-y-180"
        >
          <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-indigo-200 opacity-50">
            Answer
          </span>
          <p className="text-lg font-medium leading-relaxed">
            {card.answer}
          </p>
          <p className="mt-6 text-sm text-indigo-200 font-medium">
            Click to see question
          </p>
        </div>
      </motion.div>
    </div>
  );
}
