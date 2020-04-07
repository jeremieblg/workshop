<template>
  <div class="containerProgressBar">
    <div class="loadingBar">
      <div class="percent">
        <span>{{ currentQuestion }} / {{ nbMaxQuestion }}</span>
      </div>
      <div class="percentage" :class="animated"></div>
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
      percent: '',
      animated: ''
    }
  },
  watch: {
    currentQuestion(param) {
      this.animated = 'sizeFull'
      setTimeout(() => {
        this.percent = (param / this.nbMaxQuestion) * 100
      }, 1000)
    }
  },
  created() {
    this.animated = 'sizeHalf'
    this.percent = (this.currentQuestion / this.nbMaxQuestion) * 100
  }
}
</script>

<style lang="scss" scoped>
.sizeFull {
  animation: 2s full;
  width: 100% !important;
}
@keyframes full {
  0% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
.sizeHalf {
  animation: 2s half;
  width: 50% !important;
}
@keyframes half {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
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
      width: 0%;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 15px;
      background-color: $color-dark-green;
    }
  }
}
</style>
