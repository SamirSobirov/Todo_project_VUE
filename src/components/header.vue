<template>
  <header class="header">
    <nav class="nav">
      <h1>TODO</h1>

      <div class="box">
        <input type="text" placeholder="Поиск" />
        <button>Создать</button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
  
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderVue",

});
</script>


<style lang="scss">
.header {
  height: 70px;
  width: 100%;
  background-color: #1d2125;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;

    h1 {
      color: #fff;
    }

    .box {
      display: flex;
      gap: 10px;
      button {
        background-color: #007bff;
        color: #fff; /* Цвет текста */
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #73b7ff;
      }

      input {
        padding: 5px 20px;
        border-radius: 6px;
        border: none;
        background-color: #22272b;
      }
    }
  }
}
</style>
