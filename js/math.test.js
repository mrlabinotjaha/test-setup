const { add, subtract, multiply, divide } = require("./math");

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("subtract", () => {
  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("returns negative when second is larger", () => {
    expect(subtract(3, 7)).toBe(-4);
  });
});

describe("multiply", () => {
  test("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
