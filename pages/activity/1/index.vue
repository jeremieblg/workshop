<template>
  <div class="container">
    <navbar></navbar>
    <progressbar
      :current-question="currentQuestion"
      :nb-max-question="nbMaxQuestion"
    ></progressbar>
    <question :activity="currentActivity" :question="curQuestion"></question>
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
  data() {
    return {
      currentQuestion: 1,
      nbMaxQuestion: 2,
      currentActivity: 'sdb'
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
.container {
  flex-direction: column;
  justify-content: flex-start;
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
