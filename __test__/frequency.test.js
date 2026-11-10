const frequency = require("../exercises/frequency");

describe("frequency", () => {
  test("should count word frequency correctly", () => {
    const result = frequency("hello hello world");

    expect(result).toEqual({
      hello: 2,
      world: 1,
    });
  });

  test("should ignore uppercase and lowercase differences", () => {
    const result = frequency("Hello HELLO HeLLo");

    expect(result).toEqual({
      hello: 3,
    });
  });

  test("should ignore punctuation marks", () => {
    const result = frequency("Hello, world! Hello. How are you?");

    expect(result).toEqual({
      hello: 2,
      world: 1,
      how: 1,
      are: 1,
      you: 1,
    });
  });

  test("should handle multiple spaces", () => {
    const result = frequency("hello   world    hello");

    expect(result).toEqual({
      hello: 2,
      world: 1,
    });
  });

  test("should return an empty object for empty text", () => {
    const result = frequency("");

    expect(result).toEqual({});
  });

  test("should ignore empty words", () => {
    const result = frequency("   hello   ");

    expect(result).toEqual({
      hello: 1,
    });
  });
});
