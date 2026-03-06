export type BoardState = (number | null)[][];

export interface TileData {
  id: string;
  value: number;
  position: { row: number; col: number };
}

export interface GameState {
  board: BoardState;
  tiles: TileData[];
  score: number;
  moves: number;
  gameOver: boolean;
  won: boolean;
}

export type Direction = "up" | "down" | "left" | "right";
