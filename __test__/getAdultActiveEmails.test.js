const {
  activeUsers,
  usersAboveAge,
  getEmails,
  sortAlphabetically,
  getAdultActiveEmails,
} = require("../exercises/getAdultActiveEmails");

describe("activeUsers", () => {
  test("should return only active users", () => {
    const users = [
      { name: "Sara", active: true },
      { name: "Omar", active: false },
    ];

    expect(activeUsers(users)).toEqual([{ name: "Sara", active: true }]);
  });

  test("should return an empty array when no users are active", () => {
    const users = [{ name: "Omar", active: false }];

    expect(activeUsers(users)).toEqual([]);
  });
});

describe("usersAboveAge", () => {
  test("should return users older than minAge", () => {
    const users = [
      { name: "Omar", age: 17 },
      { name: "Sara", age: 18 },
      { name: "Lina", age: 25 },
    ];

    expect(usersAboveAge(users, 18)).toEqual([{ name: "Lina", age: 25 }]);
  });
});

describe("getEmails", () => {
  test("should return emails only", () => {
    const users = [
      { name: "Sara", email: "sara@mail.com" },
      { name: "Lina", email: "lina@mail.com" },
    ];

    expect(getEmails(users)).toEqual(["sara@mail.com", "lina@mail.com"]);
  });
});

describe("sortAlphabetically", () => {
  test("should sort emails alphabetically", () => {
    const emails = ["sara@mail.com", "ahmad@mail.com", "lina@mail.com"];

    expect(sortAlphabetically(emails)).toEqual([
      "ahmad@mail.com",
      "lina@mail.com",
      "sara@mail.com",
    ]);
  });

  test("should not modify the original array", () => {
    const emails = ["sara@mail.com", "ahmad@mail.com"];
    const originalEmails = [...emails];

    sortAlphabetically(emails);

    expect(emails).toEqual(originalEmails);
  });
});

describe("getAdultActiveEmails", () => {
  test("should return sorted emails of active users older than 18", () => {
    const users = [
      { name: "Omar", email: "omar@mail.com", age: 17, active: true },
      { name: "Ahmad", email: "ahmad@mail.com", age: 30, active: false },
      { name: "Sara", email: "sara@mail.com", age: 25, active: true },
      { name: "Lina", email: "lina@mail.com", age: 40, active: true },
    ];

    expect(getAdultActiveEmails(users)).toEqual([
      "lina@mail.com",
      "sara@mail.com",
    ]);
  });

  test("should return an empty array when no users match the conditions", () => {
    const users = [
      { name: "Omar", email: "omar@mail.com", age: 17, active: true },
      { name: "Ahmad", email: "ahmad@mail.com", age: 30, active: false },
    ];

    expect(getAdultActiveEmails(users)).toEqual([]);
  });
});
