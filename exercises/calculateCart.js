//exercise (2):
function calculateCart(items) {
  let itemsCount = 0;
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    const { price, quantity } = items[i];

    if (price < 0 || quantity < 0) {
      throw new Error("Price and quantity cannot be negative");
    }

    itemsCount += quantity;
    subtotal += price * quantity;
  }

  return { itemsCount, subtotal };
}

// console.log(
//   calculateCart([
//     { name: "hi", price: 30, quantity: 2 },
//     { name: "hi", price: 40, quantity: 2 },
//     { name: "hi", price: 10, quantity: 3 },
//   ]),
// );
module.exports = calculateCart;
