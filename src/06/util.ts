export const getNumberOfPossibleWins = (time: number, distance: number) => {
  let root1 = time / 2 - Math.sqrt(Math.pow((-1 * time) / 2, 2) - distance - 1);
  let root2 = time / 2 + Math.sqrt(Math.pow((-1 * time) / 2, 2) - distance - 1);
  const result = Math.floor(root2) - Math.ceil(root1) + 1;
  return result;
};
