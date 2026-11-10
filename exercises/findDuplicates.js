//exercise (4):
function findDuplicates(items) {
  return items.filter((el, index) => {
    let count = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i] === el) {
        count++;
      }
    }

    const isFirstOccurrence = items.indexOf(el) === index;

    return count > 1 && isFirstOccurrence;
  });
}
// console.log(findDuplicates(["hi", "hello", "hi", "babys", "babys"]));

module.exports = findDuplicates;
