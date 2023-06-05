const asArray = <T>(value: T | T[]) => {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
};

export default asArray;
