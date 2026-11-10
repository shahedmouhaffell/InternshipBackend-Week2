const normalizeNames = require("../exercises/normalize");

describe("normalizeNames", () => {
  test("should trim and capitalize each name", () => {
    const names = ["  ahmad ", "SARA", "oMaR"];

    const result = normalizeNames(names);

    expect(result).toEqual(["Ahmad", "Sara", "Omar"]);
  });

  test("should return an empty array when input is empty", () => {
    const result = normalizeNames([]);

    expect(result).toEqual([]);
  });

  test("should handle names with mixed casing", () => {
    const names = ["aLi", "sArA", "MOHAMMED"];

    const result = normalizeNames(names);

    expect(result).toEqual(["Ali", "Sara", "Mohammed"]);
  });

  test("should not modify the original array", () => {
    const names = ["  ahmad ", "SARA"];
    const originalNames = [...names];

    normalizeNames(names);

    expect(names).toEqual(originalNames);
  });
});
