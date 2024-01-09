export const pagination = (current, last) => {
  const delta = 1;
  const rangeWithDots = [];

  if (last <= 7) {
    for (let i = 1; i <= last; i++) {
      rangeWithDots.push(i);
    }
    return rangeWithDots;
  }

  // Відображення перших чотирьох сторінок
  if (current <= 4) {
    for (let i = 1; i <= 4; i++) {
      rangeWithDots.push(i);
    }
    rangeWithDots.push("...");
    rangeWithDots.push(last);
    return rangeWithDots;
  }

  // Логіка для сторінок в середині пагінації
  rangeWithDots.push(1);
  rangeWithDots.push("...");

  if (current >= last - 3) {
    for (let i = last - 3; i <= last; i++) {
      rangeWithDots.push(i);
    }
    return rangeWithDots;
  }

  // Логіка для відображення сторінок навколо поточної
  for (let i = current - delta; i <= current + delta; i++) {
    rangeWithDots.push(i);
  }

  rangeWithDots.push("...");
  rangeWithDots.push(last);

  return rangeWithDots;
};
