export default {
  name: "Todo",
  data() {
    return {
      dataTodos: [],
      modalTodo: false,
      dataForm: {
        todo: "",
        todoEdit: "",
        todosIdSelected: "",
      },
    };
  },
  methods: {
    handleSaveTodo() {
      var generateId = Math.random()
        .toString(36)
        .substr(2, 9);
      this.dataTodos.push({
        id: generateId,
        name: this.dataForm.todo,
      });
      this.dataForm.todo = "";
    },
    handleDeleteTodos(todoId) {
      var anjir = this.dataTodos.filter((index) => index.id !== todoId);
      this.dataTodos = anjir;
    },
    handleEditTodos(todoId, todoName) {
      this.dataForm.todoEdit = todoName;
      this.dataForm.todosIdSelected = todoId;
      this.modalTodo = true;
    },
    handleSaveEditTodos() {
      this.dataTodos.map((data) => {
        if (data.id === this.dataForm.todosIdSelected) {
          data.name = this.dataForm.todoEdit;
          this.modalTodo = false;
        }
      });
    },
  },
  mounted() {},
};
