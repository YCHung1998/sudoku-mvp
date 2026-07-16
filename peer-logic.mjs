/**
 * Determine whether (row, col) is a "peer" of the selected cell for
 * highlight purposes: same row, same column, or same 3x3 box — but not
 * the selected cell itself (that gets the stronger `.selected` style).
 */
export function isPeerCell(row, col, selectedRow, selectedCol, boxSize = 3) {
  if (row === selectedRow && col === selectedCol) return false;

  const sameRow = row === selectedRow;
  const sameCol = col === selectedCol;
  const sameBox =
    Math.floor(row / boxSize) === Math.floor(selectedRow / boxSize) &&
    Math.floor(col / boxSize) === Math.floor(selectedCol / boxSize);

  return sameRow || sameCol || sameBox;
}
