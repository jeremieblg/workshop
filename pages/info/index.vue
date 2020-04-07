<template>
  <div class="container">
    <navbar></navbar>
    <div class="btnContainer">
      <div class="act-list" @click="goTo('sdb')">
        <span>Activit&eacute; n°1 : Salle de bain</span>
      </div>
      <div class="act-list" @click="goTo('salon')">
        <span>Activit&eacute; n°2 : Salon</span>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  },

  methods: {
    goTo(param) {
      if (param === 'sdb') {
        this.$router.push({
          path: '/activity/1'
        })
      } else if (param === 'salon') {
        this.$router.push({
          path: '/activity/2'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  flex-direction: column;
  justify-content: center;
}
.btnContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .act-list {
    display: flex;
    align-items: center;
    width: 65%;
    height: 6em;
    margin: 1%;
    cursor: pointer;
    background-color: $color-light-green;
    font-size: 30px;
    color: $color-grey;
    &:hover {
      background-color: $color-dark-green;
    }
    span {
      margin: auto;
    }
  }
}
</style>
