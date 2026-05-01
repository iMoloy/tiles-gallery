import tiles from "../../public/tiles.json";

export function getTiles() {
  return tiles;
}

export function getFeaturedTiles() {
  return tiles.slice(0, 4);
}

export function getTileById(id) {
  return tiles.find((tile) => tile.id === id);
}
