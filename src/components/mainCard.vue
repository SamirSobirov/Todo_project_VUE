<template>
  <main class="board" :class="{ 'with-aside': isAsideVisible }">
    <div class="board__column" v-for="(column, index) in columns" :key="index">
      <h3 class="board__title">{{ column.title }}</h3>
      <div class="board__cards"></div>

      <div :class="['input-container', { active: activeColumn === index }]">
        <input
          type="text"
          :id="`input-field-${index}`"
          placeholder=""
          v-model="column.inputValue"
        />
        <label :for="`input-field-${index}`" class="placeholder">
          Введите название или вставьте <br />
          ссылку
        </label>
      </div>

      <button class="board__add-button" @click="toggleInput(index)">
        <p class="board__add-icon">+</p>
        <p class="board__add-text">Добавить карточку</p>
      </button>
    </div>
  </main>
</template>

<style lang="scss">
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
      height: 100px;
      margin: 10px 0;
      background-color: #ffffff11;
      border-radius: 8px;
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
    padding: 10px;
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
  }

  .input-container input:focus + .placeholder,
  .input-container input:not(:placeholder-shown) + .placeholder {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease-in-out;
  }

  .input-container .placeholder {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
    white-space: pre-wrap;
    transition: 0.2s ease-in-out;
    opacity: 1;
    visibility: visible;
  }

  .board__add-button {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
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
import { defineComponent, ref } from "vue";
import { isAsideVisible } from "./store";

export default defineComponent({
  name: "BoardCardVue",
  setup() {
    const columns = ref([
      { title: "Нужно сделать", inputValue: "" },
      { title: "В процессе", inputValue: "" },
      { title: "Готово", inputValue: "" },
    ]);
    const activeColumn = ref<number | null>(null);

    const toggleInput = (index: number) => {
      activeColumn.value = activeColumn.value === index ? null : index;
    };

    return {
      columns,
      activeColumn,
      toggleInput,
      isAsideVisible,
    };
  },
});
</script>
