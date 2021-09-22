import './style.css';

const element = document.getElementById('todos-list');

const myTasks = [
  { description: 'To buy veggies', index: 0, completed: false },
  { description: 'To meet Erick', index: 1, completed: false },
  { description: 'To complete Microverse Capstone', index: 2, completed: false },
];

const addList = (todosList) => {
  for (let i = 0; i < todosList.length; i += 1) {
    const listItem = ` <div class="d-flex justify-content-between ps-3 pe-3 align-items-center">
        <div class="d-flex">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}">
        <div class="ps-3">${todosList[i].description}</div>
        </div>
        <i class="fas fa-ellipsis-v text-secondary" id=""></i>
      </div>
      <hr>`;

    element.innerHTML += listItem;
  }
};

addList(myTasks);