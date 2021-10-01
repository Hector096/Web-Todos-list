import './style.css';
import { isCompleted, isEdit, clearCompleted } from './isCompleted';
import Task from './dataModel';
import { getData } from './localStorageHandler';

const element = document.getElementById('todos-list');
const addInput = document.getElementById('add-input');
const addTaskForm = document.getElementById('addTaskForm');
const refreshBtn = document.getElementById('refresh');
const clear = document.getElementById('clear-completed');

const addList = (todosList) => {
  todosList.forEach((todoItem) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('d-flex');
    taskItem.classList.add('justify-content-between');
    taskItem.classList.add('ps-3');
    taskItem.classList.add('pe-3');
    taskItem.classList.add('align-items-center');
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('d-flex');
    innerDiv.classList.add('justify-content-evenly');
    innerDiv.classList.add('align-items-center');
    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.classList.add('form-check-input');
    inputCheck.id = `checkBox${todoItem.index}`;
    const desc = document.createElement('input');
    desc.classList.add('p-2');
    desc.classList.add('ms-3');
    desc.value = `${todoItem.description}`;
    if (todoItem.completed) {
      inputCheck.checked = true;
      desc.style.textDecoration = 'line-through';
      desc.style.opacity = '0.5';
    }
    innerDiv.appendChild(inputCheck);
    innerDiv.appendChild(desc);

    const menuButton = document.createElement('i');
    menuButton.classList.add('fas');
    menuButton.classList.add('fa-ellipsis-v');
    menuButton.classList.add('text-secondary');
    menuButton.id = `menu${todoItem.index}`;
    const hr = document.createElement('hr');
    taskItem.appendChild(innerDiv);
    taskItem.appendChild(menuButton);
    element.appendChild(taskItem);
    element.appendChild(hr);

    desc.addEventListener('change', () => {
      if (desc.value !== '') {
        isEdit(todoItem.index, desc.value.trim());
        menuButton.classList.remove('fas');
        menuButton.classList.remove('fa-ellipsis-v');
        menuButton.classList.add('far');
        menuButton.classList.add('fa-trash-alt');
      } else {
        const item = new Task(
          todoItem.description,
          todoItem.index,
          todoItem.completed,
        );
        item.removeTask();
        element.innerHTML = '';
        addList(getData());
      }
    });

    desc.addEventListener('click', () => {
      menuButton.classList.remove('fas');
      menuButton.classList.remove('fa-ellipsis-v');
      menuButton.classList.add('far');
      menuButton.classList.add('fa-trash-alt');
    });

    desc.addEventListener('blur', () => {
      menuButton.classList.add('fas');
      menuButton.classList.add('fa-ellipsis-v');
      menuButton.classList.remove('far');
      menuButton.classList.remove('fa-trash-alt');

      menuButton.addEventListener('click', () => {
        const item = new Task(
          todoItem.description,
          todoItem.index,
          todoItem.completed,
        );
        item.removeTask();
        element.innerHTML = '';
        addList(getData());
      });
    });

    inputCheck.addEventListener('change', () => {
      if (inputCheck.checked) {
        isCompleted(todoItem.index);
        desc.style.textDecoration = 'line-through';
        desc.style.opacity = '0.5';
      } else {
        isCompleted(todoItem.index);
        desc.style.textDecoration = 'none';
        desc.style.opacity = '1';
        inputCheck.checked = false;
      }
    });
  });
};

clear.addEventListener('click', () => {
  clearCompleted();
  element.innerHTML = '';
  addList(getData());
});

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (addInput.value !== '') {
    const item = new Task(addInput.value.trim(), getData().length + 1, false);
    item.addNewTask();
    addInput.value = '';
    element.innerHTML = '';
    addList(getData());
  }
});

refreshBtn.addEventListener('click', () => {
  refreshBtn.classList.toggle('rotate');
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

addList(getData());
