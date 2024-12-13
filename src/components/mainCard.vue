<template>
  <main class="board" :class="{ 'with-aside': isAsideVisible }">
    <div class="board__column" v-for="(column, index) in columns" :key="index">
      <h3 class="board__title">{{ column.title }}</h3>
      <div class="board__cards">
        <div
          v-for="(task, taskIndex) in column.tasks"
          :key="taskIndex"
          class="board__card"
        >
          {{ task }}
        </div>
      </div>
      <div :class="['input-container', { active: column.isAddTaskBoxVisible }]">
        <input
          type="text"
          :id="`input-field-${index}`"
          placeholder="Введите название задачи"
          v-model="column.inputValue"
        />
      </div>
      <button
        v-if="!column.isAddTaskBoxVisible"
        class="board__add-button"
        @click="toggleAddTaskBox(index)"
      >
        <p class="board__add-icon">+</p>
        <p class="board__add-text">Добавить карточку</p>
      </button>
      <div v-if="column.isAddTaskBoxVisible" class="add_task_box">
        <button class="add_task" @click="addTask(index)">
          Добавить карточку
        </button>
        <button class="del_task" @click="toggleAddTaskBox(index)">X</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { isAsideVisible } from "./store";

export default defineComponent({
  name: "BoardCardVue",
  setup() {
    const columns = ref<
      Array<{
        title: string;
        inputValue: string;
        tasks: string[];
        isAddTaskBoxVisible: boolean;
      }>
    >([
      {
        title: "Нужно сделать",
        inputValue: "",
        tasks: [],
        isAddTaskBoxVisible: false,
      },
      {
        title: "В процессе",
        inputValue: "",
        tasks: [],
        isAddTaskBoxVisible: false,
      },
      {
        title: "Готово",
        inputValue: "",
        tasks: [],
        isAddTaskBoxVisible: false,
      },
    ]);

    onMounted(() => {
      const storedColumns = localStorage.getItem("columns");
      if (storedColumns) {
        try {
          const parsedColumns = JSON.parse(storedColumns);
          if (Array.isArray(parsedColumns)) {
            columns.value = parsedColumns.map((col) => ({
              ...col,
              tasks: Array.isArray(col.tasks) ? col.tasks : [],
              inputValue: col.inputValue || "",
              isAddTaskBoxVisible: col.isAddTaskBoxVisible || false,
            }));
          }
        } catch (error) {
          console.error("Error in localStorage:", error);
        }
      }
    });

    const saveToLocalStorage = () => {
      localStorage.setItem("columns", JSON.stringify(columns.value));
    };

    const addTask = (index: number) => {
      if (index >= 0 && index < columns.value.length) {
        const column = columns.value[index];
        const inputValue = column.inputValue.trim();
        if (inputValue) {
          column.tasks.push(inputValue);
          column.inputValue = "";
          saveToLocalStorage();
        }
      } else {
        console.error(`Invalid column index: ${index}`);
      }
    };

    const toggleAddTaskBox = (index: number) => {
      if (index >= 0 && index < columns.value.length) {
        columns.value[index].isAddTaskBoxVisible =
          !columns.value[index].isAddTaskBoxVisible;
      } else {
        console.error(`Invalid column index: ${index}`);
      }
    };
    return {
      columns,
      addTask,
      toggleAddTaskBox,
      isAsideVisible,
    };
  },
});
</script>
