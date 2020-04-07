<template>
  <div class="containerAct">
    <progressbar
      :current-question="currentQuestion"
      :nb-max-question="nbMaxQuestion"
    ></progressbar>
    <question
      :activity="currentActivity"
      :question="curQuestion"
      :q="currentQuestion"
    ></question>
    <div class="main-button" @click="submit()">
      <span>Suivant</span>
    </div>
  </div>
</template>

<script>
import progressbar from '~/components/progressBar.vue'
import question from '~/components/question.vue'

export default {
  components: {
    progressbar,
    question
  },
  props: {
    currentActivity: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentQuestion: 1,
      nbMaxQuestion: 2
    }
  },
  computed: {
    curQuestion() {
      return this.currentQuestion - 1
    }
  },
  methods: {
    submit() {
      if (this.currentQuestion === 2) {
        if (this.checkSdb() && this.checkSalon()) {
          this.$router.push({
            path: '/result'
          })
        } else {
          this.$router.push({
            path: '/overview'
          })
        }
      } else {
        this.currentQuestion += 1
      }
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
}
</style>
