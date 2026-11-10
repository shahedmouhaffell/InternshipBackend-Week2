//exercise (5):
function frequency(text) {
  const marks = [".", ",", "!", "?", ";", ":"];
  let cleaned = text.toLowerCase();

  for (let i = 0; i < marks.length; i++) {
    cleaned = cleaned.split(marks[i]).join(" ");
  }

  const words = cleaned.split(" ");
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word !== "") {
      if (result[word]) {
  result[word] = result[word] + 1;
} else {
  result[word] = 1;
}
    }
  }

  return result;
}
module.exports = frequency;
