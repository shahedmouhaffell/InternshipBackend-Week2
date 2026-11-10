const findDuplicates = require("../exercises/findDuplicates");

describe("findDuplicates", () => {
  test("should return duplicated elements only once", () => {
    const items = ["hi", "hello", "hi", "babys", "babys"];

    const result = findDuplicates(items);

    expect(result).toEqual(["hi", "babys"]);
  });

  test("should return an empty array when there are no duplicates", () => {
    const result = findDuplicates([1, 2, 3]);

    expect(result).toEqual([]);
  });

  test("should return an empty array when input is empty", () => {
    const result = findDuplicates([]);

    expect(result).toEqual([]);
  });

  test("should handle elements appearing more than twice", () => {
    const result = findDuplicates([1, 2, 2, 2, 3, 3]);

    expect(result).toEqual([2, 3]);
  });

  test("should not modify the original array", () => {
    const items = [1, 2, 2, 3];
    const originalItems = [...items];

    findDuplicates(items);

    expect(items).toEqual(originalItems);
  });
});
