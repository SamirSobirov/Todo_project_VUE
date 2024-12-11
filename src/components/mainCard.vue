<template>
  <main class="Cards_box">
    <div class="card">
        <h3>Нужно сделать</h3>
        <div class="inside"></div>


        <button>  
            <p>+</p>
            <p class="secondP">Добавить карточку</p>
        </button>
        
    </div>
   
  </main>
</template>

<style lang="scss">
.Cards_box {
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
}

.Cards_box .card {
    align-items: center;
    justify-content: center;
  height: 100%;
  width: 280px;
  background-color: #000000ee;
  padding: 20px 20px;
  border-radius: 8px;
  box-shadow: 9px 12px 15px rgba(0, 0, 0, 0.8);
  h3 {
color: white;
  }
  p {
    color: white;
  }
}

button {
    margin-top: 15px;
    display: flex;
    width: 250px;
    gap: 12px;
    border: none;
    background-color: #00000000;
    font-size: 14px;
    padding: 10px 10px;
    border-radius: 12px;

    &:hover {
          background-color: #424242;
        }
}


</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainCardVue",
});
</script>
