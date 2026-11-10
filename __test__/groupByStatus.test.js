const groupByStatus = require("../exercises/groupByStatus");

describe("groupByStatus", () => {
  test("should group items by status", () => {
    const items = [
      { id: 1, status: "done" },
      { id: 2, status: "pending" },
      { id: 3, status: "done" },
    ];

    const result = groupByStatus(items);

    expect(result).toEqual({
      done: [
        { id: 1, status: "done" },
        { id: 3, status: "done" },
      ],
      pending: [{ id: 2, status: "pending" }],
    });
  });

  test("should return an empty object when input is empty", () => {
    const result = groupByStatus([]);

    expect(result).toEqual({});
  });

  test("should handle new statuses dynamically", () => {
    const items = [
      { id: 1, status: "in-progress" },
      { id: 2, status: "archived" },
    ];

    const result = groupByStatus(items);

    expect(result).toEqual({
      "in-progress": [{ id: 1, status: "in-progress" }],
      archived: [{ id: 2, status: "archived" }],
    });
  });
});
