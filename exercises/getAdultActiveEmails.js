//exercise (6):
function activeUsers(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      result.push(users[i]);
    }
  }
  return result;
}

function usersAboveAge(users, minAge) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > minAge) {
      result.push(users[i]);
    }
  }
  return result;
}

function getEmails(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].email);
  }
  return result;
}

function sortAlphabetically(users) {
  const copy = users.slice();
  copy.sort();
  return copy;
}

function getAdultActiveEmails(users) {
  const active = activeUsers(users);
  const adults = usersAboveAge(active, 18);
  const emails = getEmails(adults);
  const sorted = sortAlphabetically(emails);
  return sorted;
}

console.log(
  getAdultActiveEmails([
    { name: "Omar", email: "omar@mail.com", age: 17, active: true },
    { name: "Ahmad", email: "ahmad@mail.com", age: 30, active: false },
    { name: "Sara", email: "sara@mail.com", age: 25, active: true },
    { name: "Lina", email: "lina@mail.com", age: 40, active: true },
  ]),
);
module.exports = {
  activeUsers,
  usersAboveAge,
  getEmails,
  sortAlphabetically,
  getAdultActiveEmails,
};
