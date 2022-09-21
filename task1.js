export const sum = (...args) => args.reduce((acc, value) => (acc === null) ? value : acc + value, null);
