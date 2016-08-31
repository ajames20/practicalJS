var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!");
        } else {
            console.log("My todos: ");
            for (var i = 0; i < this.todos.length; i++) {
                if(this.todos[i].completed === true) {
                  console.log("(x)",this.todos[i].todoText);
                } else {
                  console.log("( )",this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
      var completedTodos = 0;
      var totalTodos = this.todos.length;

      for (var i = 0; i < totalTodos; i++) {
        if(this.todos[i].completed === true) {
          completedTodos++;
        }
      }

      if(completedTodos === totalTodos) {
        for(var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
      } else {
        for(var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
      this.displayTodos();
    }
};



var handlers = {
  displayTodos: function (){
  todoList.displayTodos();
  },

  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },

  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value ='';
    changeTodoTextInput.value = '';
  },

  deleteTodo: function() {
    var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
    todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
    deleteTodoInputPosition.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
    toggleCompletedInputPosition.value = '';
  },

  toggleAll: function () {
    todoList.toggleAll();
  }
};


var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

  for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      todoLi.textContent = todoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  },

};
