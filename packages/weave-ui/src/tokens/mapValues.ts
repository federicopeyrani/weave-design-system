const mapValues = <T extends object, U>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => U
): { [K in keyof T]: U } => {
  const entries = Object.entries(obj).map(([key, value]) => [
    key,
    fn(value, key as keyof T),
  ]);
  return Object.fromEntries(entries) as { [K in keyof T]: U };
};

export default mapValues;
