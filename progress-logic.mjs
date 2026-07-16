/**
 * Calculate completion of cells that the player needs to fill.
 * Given cells are already part of the puzzle and must not count as progress.
 */
export function calculateProgressPercent({ filled, given, totalOpen }) {
  if (totalOpen <= 0) return 0;

  const playerFilled = Math.max(0, filled - given);
  return Math.min(100, Math.round((playerFilled / totalOpen) * 100));
}
