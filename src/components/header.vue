<template>
  <header class="header">
    <nav class="nav">
      <h1>TODO</h1>
        

      <button>Создать</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>



<style lang="scss">
.header {
  height: 100px;
  width: 100%;
  background-color: #1D2125;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;



    button {
        padding: 10px 25px;
        border-radius: 10px;
        background-color: #579DFF;
        border: none;
    }


  }
}
</style>