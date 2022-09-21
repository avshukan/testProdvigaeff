export const spy = (forSpy) => {
  const hash = {};

  const total = (value) => hash[value] ?? 0;

  const spied = (...args) => {
    args.forEach((value) => {
      hash[value] = 1 + (hash[value] ?? 0);
    });
    return forSpy(...args);
  };

  return { spied, total };
};
