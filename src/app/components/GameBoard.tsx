import { motion, AnimatePresence } from "motion/react";
import { Tile } from "./Tile";
import type { BoardState, TileData } from "../types/game";

interface GameBoardProps {
  board: BoardState;
  tiles: TileData[];
}

export function GameBoard({ board, tiles }: GameBoardProps) {
  return (
    <div className="relative bg-[#8B7A8B] p-3 rounded-2xl shadow-2xl w-fit aspect-square">
      {/* Grid Background */}
      <div className="grid grid-cols-4 gap-3 aspect-square">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-[#6D5C6D] rounded-xl aspect-square"
          />
        ))}
      </div>

      {/* Tiles Layer */}
      <div className="absolute inset-3">
        <AnimatePresence>
          {tiles.map((tile) => (
            <Tile key={tile.id} tile={tile} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}