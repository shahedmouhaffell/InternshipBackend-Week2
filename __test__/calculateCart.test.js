const calculateCart = require("../exercises/calculateCart");

describe("calculateCart", () => {
  test("should calculate itemsCount and subtotal correctly", () => {
    const items = [
      { name: "Keyboard", price: 40, quantity: 2 },
      { name: "Mouse", price: 20, quantity: 1 },
    ];

    const result = calculateCart(items);

    expect(result).toEqual({
      itemsCount: 3,
      subtotal: 100,
    });
  });

  test("should return zero totals for an empty cart", () => {
    const result = calculateCart([]);

    expect(result).toEqual({
      itemsCount: 0,
      subtotal: 0,
    });
  });

  test("should throw an error when price is negative", () => {
    const items = [{ name: "Keyboard", price: -40, quantity: 2 }];

    expect(() => calculateCart(items)).toThrow(
      "Price and quantity cannot be negative",
    );
  });

  test("should throw an error when quantity is negative", () => {
    const items = [{ name: "Mouse", price: 20, quantity: -1 }];

    expect(() => calculateCart(items)).toThrow(
      "Price and quantity cannot be negative",
    );
  });
});
