<template>
    <main class="board">
      <div class="board__column">
        <h3 class="board__title">Нужно сделать</h3>
        <div class="board__cards"></div>
  
        <button class="board__add-button">
          <p class="board__add-icon">+</p>
          <p class="board__add-text">Добавить карточку</p>
        </button>
      </div>
  
      <div class="board__column">
        <h3 class="board__title">В процессе</h3>
        <div class="board__cards"></div>
  
        <button class="board__add-button">
          <p class="board__add-icon">+</p>
          <p class="board__add-text">Добавить карточку</p>
        </button>
      </div>
  
      <div class="board__column">
        <h3 class="board__title">Готово</h3>
        <div class="board__cards"></div>
  
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
        height: 200px;
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
      justify-content: center;
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
  }
  </style>
  

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainCardVue",
});
</script>
