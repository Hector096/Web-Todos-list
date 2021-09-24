import { saveData, getData } from './localStorageHandler';

export const isCompleted = (i) => {
  const data = getData();
  const index = data.findIndex((item) => item.index === i);
  if (data[index].completed !== true) {
    data[index].completed = true;
  } else {
    data[index].completed = false;
  }
  saveData(data);
};

export const isEdit = (i, value) => {
  const data = getData();
  const index = data.findIndex((item) => item.index === i);
  data[index].description = value;
  saveData(data);
};