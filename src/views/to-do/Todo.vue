<template>
  <div
    style="width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;"
  >
    <div
      style="display:flex;justify-content:space-between;align-items:center;flex-direction:row;max-width:500px;width:100%"
    >
      <section>
        <b-modal :width="400" v-model="modalTodo">
          <section class="modal-card-body">
            <b-field label="Edit data">
              <b-input
                type="text"
                v-model="dataForm.todoEdit"
                placeholder="Masukan kata"
              >
              </b-input>
            </b-field>
            <footer class="modal-card-medium">
              <b-button @click="handleSaveEditTodos()">Confirm</b-button>
            </footer>
          </section>
        </b-modal>
      </section>
      <b-input
        type="text"
        placeholder="Hari Ini Mau Apa ?"
        v-model="dataForm.todo"
      ></b-input>
      <b-button type="is-primary" @click="handleSaveTodo()">Simpan!</b-button>
      <b-button type="is-danger" @click="dataTodos = []">Delete All</b-button>
    </div>
    <div
      v-for="todoItem in dataTodos"
      :key="todoItem.name"
      style="margin:15px 0px 15px 0px; width:50%;"
    >
      <div class="card">
        <div class="card-content">
          <div
            class="content"
            style="display:flex;justify-content:space-between;flex-direction:row;"
          >
            <p>{{ todoItem.name }}</p>

            <b-dropdown aria-role="list">
              <template #trigger="{ active }">
                <b-button
                  label="Aksi"
                  type="is-primary"
                  :icon-right="active ? 'menu-up' : 'menu-down'"
                />
              </template>

              <b-dropdown-item
                @click="handleEditTodos(todoItem.id, todoItem.name)"
                aria-role="listitem"
                >Edit</b-dropdown-item
              >
              <b-dropdown-item
                @click="handleDeleteTodos(todoItem.id)"
                aria-role="listitem"
                >Delete</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
