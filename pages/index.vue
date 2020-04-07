<template>
  <div class="containerHome">
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
          <el-input
            v-model="name"
            placeholder="Nom"
            class="name"
            :class="missingName"
          ></el-input>
          <el-input
            v-model="age"
            placeholder="Age"
            class="age"
            :class="missingAge"
          ></el-input>
        </div>
      </div>
    </div>
    <div class="main-button" @click="start">
      <span>Commencer</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      missingName: '',
      missingAge: ''
    }
  },
  watch: {
    name(value) {
      if (value) {
        this.missingName = ''
      } else {
        this.missingName = 'missingName'
      }
    },
    age(value) {
      if (value) {
        this.missingAge = ''
      } else {
        this.missingAge = 'missingAge'
      }
    }
  },
  methods: {
    start() {
      if (this.name && this.age) {
        this.$store.commit('setName', this.name)
        this.$router.push({
          path: '/overview'
        })
      } else {
        this.missingName = 'missingName'
        this.missingAge = 'missingAge'
      }
    }
  }
}
</script>

<style lang="scss">
.containerHome {
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $color-black;
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
        &.missingName {
          .el-input__inner:focus {
            border-color: red;
          }
          .el-input__inner {
            border-color: red;
          }
        }
      }
      .age {
        width: 20%;
        &.missingAge {
          .el-input__inner:focus {
            border-color: red;
          }
          .el-input__inner {
            border-color: red;
          }
        }
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
