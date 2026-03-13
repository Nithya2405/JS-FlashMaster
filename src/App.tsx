import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, BrainCircuit } from 'lucide-react';
import { FLASHCARDS } from './constants';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    if (currentIndex < FLASHCARDS.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setDirection(0);
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  const currentCard = FLASHCARDS[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 font-sans text-slate-900">
      {/* Header */}
      <header className="mb-12 text-center space-y-2">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200">
            <BrainCircuit className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            JS <span className="text-indigo-600">FlashMaster</span>
          </h1>
        </div>
        <p className="text-slate-500 font-medium">Master JavaScript concepts one card at a time.</p>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center space-y-10">
        {/* Progress Section */}
        <ProgressBar current={currentIndex} total={FLASHCARDS.length} />

        {/* Card Container */}
        <div className="relative w-full flex justify-center h-96 items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full flex justify-center"
            >
              <FlashCard 
                card={currentCard} 
                isFlipped={isFlipped} 
                onFlip={() => setIsFlipped(!isFlipped)} 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-4 rounded-full transition-all duration-200 ${
              currentIndex === 0 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
            }`}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === FLASHCARDS.length - 1}
            className={`p-4 rounded-full transition-all duration-200 ${
              currentIndex === FLASHCARDS.length - 1 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:shadow-xl hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0'
            }`}
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Keyboard Hint */}
        <div className="pt-8 text-slate-400 text-xs font-medium uppercase tracking-widest">
          Tip: Click the card to reveal the answer
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} JS FlashMaster • Built for Developers
      </footer>
    </div>
  );
}
