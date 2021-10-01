import Task from '../dataModel';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('Add item and Remove item', () => {
  test('add item to the localstorage', () => {
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    const task1 = new Task('to buy a new Phone', data.length + 1, false);
    task1.addNewTask();
    const dataAfterAdding1 = JSON.parse(localStorage.getItem('Tasks'));
    const task2 = new Task('to buy a new Milk', dataAfterAdding1.length + 1, false);
    task2.addNewTask();
    const dataAfterAdding2 = JSON.parse(localStorage.getItem('Tasks'));
    const task3 = new Task('to buy a new Android', dataAfterAdding2.length + 1, false);
    task3.addNewTask();
    const dataAfterAdding = JSON.parse(localStorage.getItem('Tasks'));
    expect(dataAfterAdding.length).toBe(3);
  });

  test('remove item to the list', () => {
    const task = new Task('to buy a new Phone', 1, false);
    task.removeTask();
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    expect(data.length).toBe(2);
  });

  test('Checking the index value after removing the item', () => {
    const task = new Task('to buy a new Phone', 1, false);
    task.removeTask();
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    expect(data[0].index).toBe(1);
  });
});
