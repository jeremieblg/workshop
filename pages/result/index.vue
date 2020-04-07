<template>
  <div class="containerAct">
    <div class="activityContainer">
      <div class="mainTitle">Score</div>
      <result
        :activity="activities.sdb"
        :responses="this.$store.state.game.sdb"
        :score="countScoreSdb()"
      ></result>
      <result
        :activity="activities.salon"
        :responses="this.$store.state.game.salon"
        :score="countScoreSalon()"
      ></result>
      <div class="mainTitle">Total</div>
      <div class="containerTotal">
        <div class="logo" :class="scoreLogo"></div>
        <div class="savingAll">
          <div class="pig"></div>
          <span class="savingMoney">{{ countMoney() }}€</span>
        </div>
      </div>
    </div>
    <div class="main-button" @click="submit()">
      <span>Accueil</span>
    </div>
  </div>
</template>

<script>
import result from '~/components/result.vue'
export default {
  middleware: 'store',
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
  computed: {
    scoreLogo() {
      switch (this.countScore()) {
        case 'a':
          return 'scoreA'
        case 'b':
          return 'scoreB'
        case 'c':
          return 'scoreC'

        default:
          return ''
      }
    }
  },
  methods: {
    countMoney() {
      const sdb = this.countScoreSdb()
      const salon = this.countScoreSalon()
      return sdb.count + salon.count
    },
    countScore() {
      const sdb = this.countScoreSdb()
      const salon = this.countScoreSalon()
      if (sdb.score === 'a' && salon.score === 'a') {
        return 'a'
      }
      if (
        (sdb.score === 'b' && salon.score === 'a') ||
        (sdb.score === 'a' && salon.score === 'b')
      ) {
        return 'b'
      }
      if (
        (sdb.score === 'c' && salon.score === 'a') ||
        (sdb.score === 'a' && salon.score === 'c')
      ) {
        return 'b'
      }
      if (sdb.score === 'b' && salon.score === 'b') {
        return 'b'
      }
      if (
        (sdb.score === 'b' && salon.score === 'c') ||
        (sdb.score === 'c' && salon.score === 'b')
      ) {
        return 'b'
      }
      if (sdb.score === 'c' && salon.score === 'c') {
        return 'c'
      }
    },
    countScoreSdb() {
      if (
        this.$store.state.game.sdb.q1 === true &&
        this.$store.state.game.sdb.q2 === true
      ) {
        const count =
          this.activities.sdb.council[0].count +
          this.activities.sdb.council[1].count
        return { score: 'a', count }
      }
      if (
        this.$store.state.game.sdb.q1 === false &&
        this.$store.state.game.sdb.q2 === true
      ) {
        const count = this.activities.sdb.council[1].count
        return { score: 'b', count }
      }
      if (
        this.$store.state.game.sdb.q1 === true &&
        this.$store.state.game.sdb.q2 === false
      ) {
        const count = this.activities.sdb.council[0].count
        return { score: 'b', count }
      }
      if (
        this.$store.state.game.sdb.q1 === false &&
        this.$store.state.game.sdb.q2 === false
      ) {
        const count = 0
        return { score: 'c', count }
      }
    },
    countScoreSalon() {
      if (
        this.$store.state.game.salon.q1 === true &&
        this.$store.state.game.salon.q2 === true
      ) {
        const count =
          this.activities.salon.council[0].count +
          this.activities.salon.council[1].count
        return { score: 'a', count }
      } else if (
        this.$store.state.game.salon.q1 === false &&
        this.$store.state.game.salon.q2 === true
      ) {
        const count = this.activities.salon.council[1].count
        return { score: 'b', count }
      } else if (
        this.$store.state.game.salon.q1 === true &&
        this.$store.state.game.salon.q2 === false
      ) {
        const count = this.activities.salon.council[0].count
        return { score: 'b', count }
      } else if (
        this.$store.state.game.salon.q1 === false &&
        this.$store.state.game.salon.q2 === false
      ) {
        const count = 0
        return { score: 'c', count }
      } else {
        return { score: '', count: '' }
      }
    },
    submit() {
      this.$router.push({
        path: '/'
      })
      this.$store.commit('clear')
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

<style lang="scss" scoped>
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
    height: 530px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 2;
    padding-top: 40px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    align-items: center;
  }
  .mainTitle {
    font-size: 35px;
    color: $color-light-green;
  }
  .containerTotal {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .savingAll {
      width: 56%;
      background-size: 164px;
      background-position: 0;
      background-repeat: no-repeat;
      background-image: url('../../static/saving_all.png');
      display: flex;
      align-items: center;
      padding: 10px;
      .pig {
        height: 55px;
        width: 55px;
        background-size: 92px;
        background-position: -22px -25px;
        background-repeat: no-repeat;
        background-image: url('../../static/pig_saving_light.png');
      }
      .savingMoney {
        font-size: 36px;
        color: white;
      }
    }
  }
  .logo {
    height: 100px;
    width: 100px;
    background-size: 100px;
    background-position: 0;
    background-repeat: no-repeat;
    &.scoreA {
      background-image: url('../../static/score_a_light.png');
    }
    &.scoreB {
      background-image: url('../../static/score_b_light.png');
    }
    &.scoreC {
      background-image: url('../../static/score_c_light.png');
    }
  }
}
</style>
