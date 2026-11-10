//exercise (1):
function normalizeNames(names) {
  return names.map((el) => {
    const normalizedName = el.trim().toLowerCase();
    return normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);
  });
}
console.log(normalizeNames(["ali", "  memy", "mohaMMed"]));

module.exports = normalizeNames;
