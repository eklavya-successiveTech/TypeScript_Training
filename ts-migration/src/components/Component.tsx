const Component = ( start: number,end: number,exclude: number[] = []): number => {
  const excludeArr: number[] = Array.isArray(exclude) ? exclude : [exclude];

  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const rand = Math.floor(Math.random() * (end - start + 1)) + start;
    if (!excludeArr.includes(rand)) {
      return rand;
    }
    attempts++;
  }

  return 0;
};

export default Component;
