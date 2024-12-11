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
  transition: transform 0.3s ease-in-out; 

  &.shifted {
    transform: translateX(-250px); 
  }

  h1 {
    padding-left: 500px;
    font-size: 30px;
    color: white;
  }
}</style>