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
  }

  removeTask() {
    const data = getData();
    const index = data.findIndex((item) => item.index === this.index);
    data.splice(index, 1);
    for (let j = index; j < data.length; j += 1) {
      data[j].index -= data[j].index;
    }
    saveData(data);
  }
}
