document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const completedList = document.getElementById('completedList');

  addTaskBtn.addEventListener('click', addTask);

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const completeBtn = document.createElement('button');
      completeBtn.textContent = '✓';
      completeBtn.addEventListener('click', function() {
          listItem.classList.toggle('completed');
          if (listItem.classList.contains('completed')) {
              completeBtn.remove();
              deleteBtn.remove();
              completedList.appendChild(listItem);
          } else {
              taskList.appendChild(listItem);
          }
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'x';
      deleteBtn.addEventListener('click', function() {
          listItem.parentElement.removeChild(listItem);
      });

      listItem.appendChild(completeBtn);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);

      taskInput.value = '';
  }
});
