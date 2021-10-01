import Task from '../dataModel';
import { isCompleted, clearCompleted, isEdit } from '../isCompleted';

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
  test('add item to the list', () => {
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

  test('updation of description', () => {
    isEdit(1, 'To buy Honey');
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    const index = data.findIndex((item) => item.index === 1);
    expect(data[index].description).toBe('To buy Honey');
  });

  test('remove item to the list', () => {
    const task = new Task('to buy a new Phone', 1, false);
    task.removeTask();
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    expect(data.length).toBe(2);
  });

  test('Checking the index value after removing the item from the list', () => {
    const task = new Task('to buy a new Phone', 1, false);
    task.removeTask();
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    expect(data[0].index).toBe(1);
  });
});

describe('update completed value and clear completed from the list', () => {
  test('checking updation of isCompleted value', () => {
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    const { index } = data[0];
    isCompleted(index);
    const dataAfterUpdation = JSON.parse(localStorage.getItem('Tasks'));
    expect(dataAfterUpdation[0].completed).toBe(true);
  });

  test('Clear the list with all completed task', () => {
    clearCompleted();
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    expect(data.length).toBe(0);
  });
});
