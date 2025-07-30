document.getElementById('year').textContent = new Date().getFullYear();

let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveToStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-base-100 p-3 rounded shadow';

        if (todo.editing) {
          li.innerHTML = `
            <input type="text" id="edit-${index}" class="input input-bordered w-full mr-2" value="${todo.text}" />
            <button class="btn btn-success btn-sm mr-2" onclick="saveTodo(${index})">Simpan</button>
            <button class="btn btn-warning btn-sm" onclick="cancelEdit(${index})">Batal</button>
          `;
        } else {
          li.innerHTML = `
            <span>${todo.text}</span>
            <div class="flex gap-2">
              <button class="btn btn-info btn-sm" onclick="editTodo(${index})">Edit</button>
              <button class="btn btn-error btn-sm" onclick="deleteTodo(${index})">Hapus</button>
            </div>
          `;
        }

        list.appendChild(li);
      });
  }

  function addTodo() {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
      if (value !== '') {
        todos.push({ text: value, editing: false });
        input.value = '';
        saveToStorage();
        renderTodos();
      }
  }

  function deleteTodo(index) {
      todos.splice(index, 1);
      saveToStorage();
      renderTodos();
  }

  function editTodo(index) {
      todos[index].editing = true;
      renderTodos();
  }

  function saveTodo(index) {
    const newText = document.getElementById(`edit-${index}`).value.trim();
      if (newText !== '') {
        todos[index].text = newText;
        todos[index].editing = false;
        saveToStorage();
        renderTodos();
      }
  }

  function cancelEdit(index) {
    todos[index].editing = false;
      renderTodos();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderTodos();

    const form = document.getElementById('todo-form');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          addTodo();
    });

    // Ambil task dari file task.json (Granite AI)
  fetch('task.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Gagal memuat task.json");
      }
      return response.json();
    })
    .then(data => {
      const taskList = document.getElementById('task-list');

      data.forEach(task => {
        const li = document.createElement('li');
        li.className = 'bg-yellow-100 p-3 rounded shadow mb-2';

        // Jika ada deskripsi
        li.innerHTML = `
          <strong>${task.title}</strong> (${task.priority})<br/>
          ${task.category} - ${task.done ? "✅" : "❌"}<br/>
          <em>${task.description || "Tidak ada deskripsi."}</em>
        `;

        taskList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = `<li class="text-red-500">Gagal memuat task.json</li>`;
    });
});