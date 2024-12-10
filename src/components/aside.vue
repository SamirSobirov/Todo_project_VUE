<template>
  <aside class="aside-block">
    <div class="box">
      <div class="aside-box">
        <h3>
          TODO: рабочее пространство
          <p>Бесплатно</p>
        </h3>
        <button><img  src="../../public/icons/arrow_left.svg" alt="arrow" /></button>
      </div>

      <hr>
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


  .box {
    padding-left: 15px;

    .aside-box {
      display: flex;
      align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
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
  }
}
</style>
