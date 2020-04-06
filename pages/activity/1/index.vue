<template>
  <div class="container">
    <navbar></navbar>
    <progressbar
      :current-question="currentQuestion"
      :nb-max-question="nbMaxQuestion"
    ></progressbar>
    <div class="activityContainer">
      <div class="mainTitle">Salle de bain</div>
      <div class="mainCorp">
        Le lave linge est rempli, mais ne tourne pas, vous avez le choix de la
        température
      </div>
      <el-switch
        v-model="value2"
        style="display: block"
        active-color="#6eae35"
        inactive-color="#508026"
        active-text="90°C"
        inactive-text="30°C"
      >
      </el-switch>
    </div>
    <div class="main-button">
      <span>Suivant</span>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import progressbar from '~/components/progressBar.vue'

export default {
  components: {
    navbar,
    progressbar
  },
  data() {
    return {
      currentQuestion: 1,
      nbMaxQuestion: 2,
      value2: true
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.container {
  flex-direction: column;
  justify-content: flex-start;
}
.activityContainer {
  background-color: $color-black;
  height: 500px;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 2;
  padding-top: 40px;
  padding-bottom: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  align-items: center;
  .mainTitle {
    font-size: 35px;
    color: $color-light-green;
  }
  .mainCorp {
    text-align: left;
    color: $color-light-green;
    font-size: 22px;
  }
  .mainInfo {
    text-align: left;
  }
  .mainForm {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .containerInput {
      display: flex;
      justify-content: space-between;
      .name {
        width: 70%;
      }
      .age {
        width: 20%;
      }
    }
  }
  .el-switch {
    height: 30px;
    .el-switch__label {
      color: $color-white;
      height: 30px;
      &.is-active {
        color: $color-light-green;
      }
      &.el-switch__label--left {
        margin-left: 10px;
      }
      &.el-switch__label--right {
        margin-right: 0;
      }
      span {
        font-size: 30px;
      }
    }
  }
}
.main-button {
  width: 100%;
  height: 70px;
  background-color: $color-light-green;
  z-index: 1;
  margin-top: -30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: center;
  span {
    height: max-content;
    margin-top: 30px;
    font-size: 30px;
    color: $color-grey;
  }
  &:hover {
    background-color: $color-dark-green;
    cursor: pointer;
  }
}
</style>
