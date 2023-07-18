import { ref } from 'vue';
<template>
  <div>Todo List</div>
  <form @submit.prevent="addNewTodo">
    <div class="join">
      <input
        type="text"
        id="todo"
        v-model="newTodo"
        name="todo"
        placeholder="Entrer une tache"
        class="input input-bordered join-item"
      />
      <button class="join-item btn btn-outline">Add todo</button>
    </div>
  </form>
  <transition-group tag="ul" name="todo">
    <li v-for="(todo, index) of todos" :key="todo">
      {{ todo.title }}
      <span
        @click="() => removeTodo(todo)"
        class="p-1 text-white bg-red-500 cursor-pointer"
        >X</span
      >
    </li>
  </transition-group>
</template>

<script setup>
import { ref } from "vue";
const newTodo = ref("");
const addNewTodo = () => {
  if (newTodo.value.trim().length > 1) {
    todos.value.push({
      id: todos.value.length,
      title: newTodo.value,
      done: false,
    });
    newTodo.value = "";
  }
};
const todos = ref([
  {
    id: 1,
    title: "Aller au marcher",
    done: false,
  },
  {
    id: 2,
    title: "Faire la cuisine",
    done: false,
  },
  {
    id: 3,
    title: "Faire la vesselle",
    done: false,
  },
  {
    id: 4,
    title: "Preparer son environnement de travaille",
    done: true,
  },
  {
    id: 5,
    title: "Allumer sa machine",
    done: true,
  },
]);
const removeTodo = (todo) => {
  const t = todos.value.indexOf(todo);
  if (t) {
    todos.value.splice(t, 1);
  }
};
</script>

<style lang="scss" scoped>
.todo-enter-from,
.todo-leave-active {
  opacity: 0;
  transform: translateX(-15px);
}
.todo-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.todo-enter-active,
.todo-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}
</style>
