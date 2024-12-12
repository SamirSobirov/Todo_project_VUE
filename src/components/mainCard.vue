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

<style lang="scss">
.add_task_box {
  display: flex;
  margin-top: 10px;
  margin-right: 56px;
  gap: 5px;

  .add_task {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    &:hover {
      background-color: #73b7ff;
    }
  }
  .del_task {
    border-radius: 5px;
    border: none;
    padding: 8px 15px;
    background-color: rgba(44, 44, 44, 0.447);
    color: white;
    &:hover {
      background-color: #404040;
    }
  }
}
.board {
  margin-top: 30px;
  padding-left: 50px;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 280px;
    background-color: #000000ee;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 9px 12px 15px rgba(0, 0, 0, 0.8);

    & > h3 {
      color: white;
    }

    & > .board__cards {
      width: 100%;
      height: 100%;
      margin: 10px 0;
      color: #d3d3d3;
      padding: 15px 15px;
      background-color: #d3d3d349;
      border-radius: 8px;
      font-size: 14px;
    }
  }

  &__title {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__add-button {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 250px;
    border: none;
    background-color: transparent;
    font-size: 14px;
    padding: 10px;
    border-radius: 12px;
    color: white;

    &:hover {
      background-color: #424242;
    }
  }

  &__add-icon {
    font-size: 16px;
    font-weight: bold;
  }

  &__add-text {
    font-size: 14px;
  }

  .input-container {
    display: none;
    position: relative;
    width: 100%;
  }

  .input-container.active {
    display: block;
  }

  .input-container input {
    display: flex;
    width: 100%;
    border: none;
    background-color: rgba(44, 44, 44, 0.447);
    padding: 15px;
    height: 45px;
    border-radius: 12px;
    font-size: 16px;
    color: #fff;
    outline: none;
    font-size: 12px;
  }

  .board__add-button {
    cursor: pointer;
    background-color: rgba(44, 44, 44, 0.447);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #242424;
    }
  }
}

.board {
  transition: margin-left 0.3s ease;

  &.with-aside {
    margin-left: 450px;
  }

  &.without-aside {
    margin-left: 0;
  }
}
</style>
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
