<template>
  <div class="container">
    <navbar></navbar>
    <div class="activityContainer">
      <div class="mainTitle">Salle de bain</div>
      <div class="mainCorp">
        Le lave linge est rempli, mais ne tourne pas, vous avez le choix de la
        température
      </div>
    </div>
    <div class="main-button">
      <span>Suivant</span>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  },
  data() {
    return {}
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
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  align-items: center;
  .mainTitle {
    font-size: 25px;
    color: $color-light-green;
  }
  .mainCorp {
    text-align: left;
    color: $color-light-green;
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
