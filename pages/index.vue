<template>
  <div class="container">
    <navbar></navbar>
    <progressbar></progressbar>
    <div class="main">
      <div class="mainLogo"></div>
      <div class="mainTitle">Appartement Temoin</div>
      <div class="mainCorp">
        Cet outil a pour but de vous permettre de réaliser plusieurs activités
        afin de mesurer votre comportement sur consommation énergétique
      </div>
      <div class="mainForm">
        <div class="mainInfo">
          Pour commencer nous avons besoin de quelques informations
        </div>
        <div class="containerInput">
          <el-input v-model="input" placeholder="Nom" class="name"></el-input>
          <el-input v-model="input" placeholder="Age" class="age"></el-input>
        </div>
      </div>
    </div>
    <div class="main-button">
      <span>Commencer</span>
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
      input: ''
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
.main {
  background-color: $color-grey;
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
  }
  .mainLogo {
    background-image: url('../static/logo.png');
    background-size: 120px;
    background-position: -10px;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
  }
  .mainCorp {
    text-align: left;
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
