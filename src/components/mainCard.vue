<template>
  <main class="board" :class="{ 'board--with-aside': isAsideVisible }">
    <div
      class="board__column"
      v-for="(column, index) in columns"
      :key="index"
      @dragover.prevent="onDragOver"
      @drop="onDrop(index)"
      :class="{ 'board__column--drop-target': isDropTarget(index) }"
    >
      <h3 class="board__column__title">{{ column.title }}</h3>
      <div
        v-for="(task, taskIndex) in column.tasks"
        :key="taskIndex"
        class="board__column__card"
        draggable="true"
        @dragstart="onDragStart(index, taskIndex)"
      >
        {{ task }}
      </div>

      <div
        :class="[
          'board__input-container',
          { 'board__input-container--active': column.isAddTaskBoxVisible },
        ]"
      >
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
        <p class="board__add-button__icon">+</p>
        <p class="board__add-button__text">Добавить задачу</p>
      </button>

      <div v-if="column.isAddTaskBoxVisible" class="board__task-actions">
        <button class="board__task-actions__add-task" @click="addTask(index)">
          Добавить задачу
        </button>
        <button
          class="board__task-actions__cancel-task"
          @click="toggleAddTaskBox(index)"
        >
          X
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { isAsideVisible } from "../main";

export default defineComponent({
  name: "BoardCardVue",
  setup() {
    const columns = ref([
      {
        title: "Нужно сделать",
        inputValue: "",
        tasks: ["Задача 1"],
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

    const draggedTask = ref<{ columnIndex: number; taskIndex: number } | null>(
      null
    );

    const saveToLocalStorage = () => {
      localStorage.setItem("columns", JSON.stringify(columns.value));
    };

    const onDragStart = (columnIndex: number, taskIndex: number) => {
      draggedTask.value = { columnIndex, taskIndex };
    };

    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
    };

    const onDrop = (targetColumnIndex: number) => {
      if (draggedTask.value) {
        const { columnIndex, taskIndex } = draggedTask.value;

        if (columnIndex !== targetColumnIndex) {
          const task = columns.value[columnIndex].tasks.splice(taskIndex, 1)[0];
          columns.value[targetColumnIndex].tasks.push(task);
          saveToLocalStorage();
        }

        draggedTask.value = null;
      }
    };

    const isDropTarget = (index: number) => {
      return draggedTask.value && draggedTask.value.columnIndex !== index;
    };

    const addTask = (index: number) => {
      const column = columns.value[index];
      const inputValue = column.inputValue.trim();
      if (inputValue) {
        column.tasks.push(inputValue);
        column.inputValue = "";
        saveToLocalStorage();
      }
    };

    const toggleAddTaskBox = (index: number) => {
      columns.value[index].isAddTaskBoxVisible =
        !columns.value[index].isAddTaskBoxVisible;
    };

    onMounted(() => {
      const storedColumns = localStorage.getItem("columns");
      if (storedColumns) {
        try {
          columns.value = JSON.parse(storedColumns) || columns.value;
        } catch (error) {
          console.error("Error in columns:", error);
        }
      }
    });

    return {
      columns,
      addTask,
      toggleAddTaskBox,
      onDragStart,
      onDragOver,
      onDrop,
      isDropTarget,
      isAsideVisible,
    };
  },
});
</script>
