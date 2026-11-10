//exc(1):

function testVar() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions.map((fn) => fn());
}

console.log(testVar());
//exc(2):
function testLet() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions.map((fn) => fn());
}

console.log(testLet());
