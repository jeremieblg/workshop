<template>
  <div class="containerAct">
    <navbar></navbar>
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
import navbar from '~/components/navbar.vue'
import progressbar from '~/components/progressBar.vue'
import question from '~/components/question.vue'

export default {
  components: {
    navbar,
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
        this.$router.push({
          path: '/info'
        })
      } else {
        this.currentQuestion += 1
      }
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
