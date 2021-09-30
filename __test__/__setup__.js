global.document.body.innerHTML = `
<div class="card shadow">
      <div class="d-flex justify-content-between ps-3 pe-3 pt-3">
        <h5 class="align-self-center">Today's To Do</h5>
        <div class="animate-icon p-2" id="refresh"><i class="fas fa-sync text-secondary" ></i></div>
      </div>
      <hr />
      <form
        action="#"
        autocomplete="off"
        class="d-flex justify-content-between ps-3 pe-3 pb-0"
        id="addTaskForm"
      >
        <input
          class="p-1 fst-italic w-100"
          type="text"
          placeholder="Add to your list.."
          id="add-input"
        />
        <i class="fas fa-level-down-alt fa-rotate-90 mx-3 text-secondary" type='submit' id="addTask-btn"></i>
      </form>
      <hr />
      <div id="todos-list"></div>

      <div class="d-flex justify-content-center bg-light pb-3 pt-2">
        <a class="text-center text-secondary" id="clear-completed">Clear all completed</a>
      </div>
    </div>
`;