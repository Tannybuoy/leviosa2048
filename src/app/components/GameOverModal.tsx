import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface GameOverModalProps {
  won: boolean;
  score: number;
  moves: number;
  onReset: () => void;
  onContinue?: () => void;
}

export function GameOverModal({
  won,
  score,
  moves,
  onReset,
  onContinue,
}: GameOverModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#F5EFE6] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#7A5A5A] mb-4">
            {won ? "You Win!" : "Game Over"}
          </h2>
          {won && (
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-[#F5C842]" />
            </div>
          )}
          <p className="text-[#7A5A5A] text-lg mb-2">
            <span className="font-bold">{score}</span> points scored in{" "}
            <span className="font-bold">{moves}</span> moves.
          </p>
          <p className="text-[#8B7A8B] mb-6">
            {won ? "You've mastered the Elder Wand! ⚡" : "Try again to reach the Elder Wand!"}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onReset}
            className="w-full bg-[#F5F5F0] hover:bg-[#E8E8DD] text-[#7A5A5A] py-4 rounded-2xl transition-all font-semibold border-2 border-[#8B7A8B]"
          >
            Start Over
          </button>
          {won && onContinue && (
            <button
              onClick={onContinue}
              className="w-full bg-[#8B7A8B] hover:bg-[#7A5A7A] text-white py-4 rounded-2xl transition-all font-semibold"
            >
              Keep Going
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
