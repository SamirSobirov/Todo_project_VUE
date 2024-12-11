<template>
  <main class="board">
    <div class="board__column">
      <h3 class="board__title">Нужно сделать</h3>
      <div class="board__cards"></div>

      <div class="input-container">
        <input type="text" id="input-field" />
        <label for="input-field" class="placeholder">
          Введите название или вставьте <br />
          ссылку
        </label>


      </div>
      <button class="board__add-button">
        <p class="board__add-icon">+</p>
        <p class="board__add-text">Добавить карточку</p>
      </button>
    </div>

    <div class="board__column">
      <h3 class="board__title">В процессе</h3>
      <div class="board__cards"></div>

      <div class="input-container">
        <input type="text" id="input-field" />
        <label for="input-field" class="placeholder">
          Введите название или вставьте <br />
          ссылку
        </label>
      </div>
      <button class="board__add-button">
        <p class="board__add-icon">+</p>
        <p class="board__add-text">Добавить карточку</p>
      </button>
    </div>

    <div class="board__column">
      <h3 class="board__title">Готово</h3>
      <div class="board__cards"></div>

      <div class="input-container">
        <input type="text" id="input-field" />
        <label for="input-field" class="placeholder">
          Введите название или вставьте <br />
          ссылку
        </label>
      </div>
      <button class="board__add-button">
        <p class="board__add-icon">+</p>
        <p class="board__add-text">Добавить карточку</p>
      </button>
    </div>
  </main>
</template>

<style lang="scss">
.board {
  margin-top: 30px;
  padding-left: 500px;
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
    position: relative;
    width: 100%;

    input {
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

    .placeholder {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      pointer-events: none;
      white-space: pre-wrap;
      transition: 0.2s ease-in-out;

      input:focus + &,
      input:not(:placeholder-shown) + & {
        top: 5px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";


const isInputVisible = ref(false);

const toggleInput = () => {
  isInputVisible.value = !isInputVisible.value;
};

export default defineComponent({
  name: "MainCardVue",
});
</script>
