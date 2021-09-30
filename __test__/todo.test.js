import Task from "../src/dataModel";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe("Add item and Remove item", () => {
  let list = [];
  test("add item to the localstorage", () => {
    let task = new Task("to buy a new Phone", list.length + 1, false);
    list.push(task);
    expect(list.length).toBe(1);
  });

  test("remove item to the list", () => {
    list.splice(0, 1);
    expect(list.length).toBe(0);
  });
});
