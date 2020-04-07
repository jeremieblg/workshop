<template>
  <div class="container">
    <div class="btnContainer">
      <div v-if="!checkSdb" class="act-list" @click="goTo('sdb')">
        <span>Activit&eacute; n°1 : Salle de bain</span>
      </div>
      <div v-if="!checkSalon" class="act-list" @click="goTo('salon')">
        <span>Activit&eacute; n°2 : Salon</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    checkSdb() {
      return (
        this.$store.state.game.sdb.q1 !== '' &&
        this.$store.state.game.sdb.q2 !== ''
      )
    },
    checkSalon() {
      return (
        this.$store.state.game.salon.q1 !== '' &&
        this.$store.state.game.salon.q2 !== ''
      )
    }
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
