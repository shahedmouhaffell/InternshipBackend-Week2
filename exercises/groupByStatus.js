//exercise (3):
function groupByStatus(items) {
  const result = {};
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const { status } = item;
    if (!result[status]) {
      result[status] = [];
    }
    result[status].push(item);
  }
  return result;
}
module.exports = groupByStatus;
