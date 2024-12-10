<template>
  <aside class="aside-block">
    <div class="box">
      <div class="aside-item_1">
        <h3>
          TODO: рабочее пространство
          <p>Бесплатно</p>
        </h3>
        <button>
          <img src="../../public/icons/arrow_left.svg" alt="arrow" />
        </button>
      </div>

      <hr />

      <button class="aside-button_1">
        <img src="../../public/icons/board.svg" alt="" />
        <p>Доски</p>
      </button>


      <button class="aside-button_2">
        <img src="../../public/icons/participants.svg" alt="" />
        <p>Участники</p>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AsideVue",
};
</script>

<style lang="scss">
.aside-block {
  width: 500px;
  height: 100vh;
  background-color: #161a1d;
  display: flex;
  flex-direction: column;

  .box {
    padding: 0px 10px;
    align-items: center;
    justify-content: center;
    
    

    .aside-item_1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px;
      h3 {
        font-size: 18px;
        color: #9fadbc;

        p {
          font-size: 14px;
          font-weight: 400;
        }
      }

      button {
        border: none;
        height: 32px;
        width: 32px;
        background-color: #161a1d;

        img {
          height: 22px;
          width: 22px;
        }
      }
    }

    .aside-button_1 {
      display: flex;
      width: 100%;
      text-align: left;
      padding-right: 380px;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #161a1d;
      color: white;
      gap: 12px;

      p {
        font-weight: 100;
        font-size: 17px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }


    .aside-button_2 {
    
      display: flex;
      width: 100%;
      text-align: left;
      padding-right: 350px;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #161a1d;
      color: white;
      gap: 12px;

      p {
        font-weight: 100;
        font-size: 17px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }




  }
}
</style>
