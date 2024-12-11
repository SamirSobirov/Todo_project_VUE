<template>
    <header class="main_header">
      <nav class="nav">
        <h1>Моя доска Todo</h1>
  
        
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "MainVue"
  };
  </script>


<style lang="scss">
.main_header {
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: #00000058;
  transition: transform 0.3s ease-in-out; // Плавное перемещение

  &.shifted {
    transform: translateX(-250px); // Сдвиг текста влево, когда панель закрыта (250px — это ширина aside)
  }

  h1 {
    margin: 0 auto; // Центровка текста по умолчанию
    font-size: 20px;
    color: white;
  }
}</style>