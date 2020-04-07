<template>
  <div class="containerAct">
    <div class="activityContainer">
      <result
        :activity="activities.sdb"
        :responses="this.$store.state.game.sdb"
        :score="countScore()"
      ></result>
      <result
        :activity="activities.salon"
        :responses="this.$store.state.game.salon"
        :score="countScore()"
      ></result>
    </div>
    <div class="main-button" @click="submit()">
      <span>Accueil</span>
    </div>
  </div>
</template>

<script>
import result from '~/components/result.vue'
export default {
  components: {
    result
  },
  data() {
    return {
      activities: {
        sdb: {
          title: 'Salle de bain',
          council: [
            {
              text:
                'Laver son linge à 30°C : 3 fois moins d’énergie qu’un lavage à 90°C',
              count: 136
            },
            {
              text:
                'Utiliser des mousseurs:160 € pour une douche +35€ x 2 robinets',
              count: 230
            }
          ]
        },
        salon: {
          title: 'Salon',
          council: [
            {
              text:
                'Eteindre la multiprise:80€/an pour les veilles + 13€ pour la boxe',
              count: 93
            },
            {
              text:
                'Utilisé des ampoules LED: 156 €/an pour 10 ampoules changées',
              count: 156
            }
          ]
        }
      }
    }
  },
  methods: {
    countScore() {},
    submit() {
      this.$router.push({
        path: '/'
      })
    },
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
  }
}
</script>

<style lang="scss">
.containerAct {
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $color-black;
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
  }
}
</style>
