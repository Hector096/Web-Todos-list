import { saveData, getData } from './localStorageHandler';

export default class Task {
  constructor(description, index, completed) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }

  addNewTask() {
    const data = getData();
    const newTask = new Task(this.description, this.index, this.completed);
    data.push(newTask);
    saveData(data);
    return newTask
  }

  removeTask() {
    const data = getData();
    const index = data.findIndex((item) => item.index === this.index);
    data.splice(index, 1);
    let i = 1;
    data.forEach((item) => {
      item.index = i;
      i += 1;
    });
    saveData(data);
  }
}
