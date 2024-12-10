<template>
  <header class="header">
    <nav class="nav">
      <h1>TODO</h1>
        
      <div class="box">
        <input type="text" placeholder="Поиск">
      <button>Создать</button>
    </div>
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
  height: 70px;
  width: 100%;
  background-color: #1D2125;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;



    .box {
        display: flex;
        gap: 10px;
        button {
            padding: 10px 25px;
            border-radius: 10px;
            background-color: #579DFF;
            border: none;
        }


        input {
            padding: 5px 5px;
            border-radius: 6px;
            border: none;
            background-color: #22272B;
        }

    }



  }
}
</style>