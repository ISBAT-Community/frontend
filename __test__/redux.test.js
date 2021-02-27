const add = (x, y) => {
  return x + y;
};

test("should add x + y and return 3", () => {
  expect(add(1, 2)).toBe(3);
});
