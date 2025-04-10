document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // 할일 추가 함수
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.className = 'todo-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                span.classList.toggle('completed');
            });

            const span = document.createElement('span');
            span.className = 'todo-text';
            span.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }

    // 엔터키로 추가
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // 버튼 클릭으로 추가
    addButton.addEventListener('click', addTodo);
});
