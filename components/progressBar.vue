<template>
  <div class="containerProgressBar">
    <div class="loadingBar">
      <div class="percent">
        <span>{{ currentQuestion }} / {{ nbMaxQuestion }}</span>
      </div>
      <div class="percentage" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: {
      type: Number,
      required: true
    },
    nbMaxQuestion: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      percent: ''
    }
  },
  watch: {
    currentQuestion(param) {
      this.percent = (param / this.nbMaxQuestion) * 100
    }
  },
  created() {
    this.percent = (this.currentQuestion / this.nbMaxQuestion) * 100
  }
}
</script>

<style lang="scss" scoped>
.containerProgressBar {
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 54px;
  .loadingBar {
    background-color: $color-black;
    position: relative;
    height: 18px;
    border-radius: 15px;
    border: 1px solid $color-white;
    .percent {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
      text-align: center;
      color: $color-white;
      z-index: 1;
      span {
        height: 12px;
        font-size: 12px;
      }
    }
    .percentage {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 15px;
      background-color: $color-dark-green;
    }
  }
}
</style>
