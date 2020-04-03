<template>
  <div class="container">
    <div class="loading-bar">
      <div class="percent">{{ percent }} %</div>
      <div class="percentage" :style="{ width: percentage + '%' }"></div>
    </div>
    <button type="button" @click="prevLvl">Retour</button>
    <button type="button" @click="nextLvl">Avancer</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      percentage: 50
    }
  },

  computed: {
    percent() {
      return this.percentage.toFixed()
    }
  },

  methods: {
    nextLvl() {
      if (this.percentage + 50 < 100) this.percentage += 50
      else this.percentage = 100
    },

    prevLvl() {
      if (this.percentage - 50 > 50) this.percentage -= 50
      else this.percentage = 50
    }
  }
}
</script>

<style lang="scss" scoped>
.percent {
  position: relative;
  text-align: center;
  font-size: 25px;
  color: #fff;
  z-index: 1;
}
.loading-bar {
  background-color: $color-black;
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
    0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: $color-dark-green;
    background-size: 30px 30px;
    /*background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
      transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
      rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
      transparent); */
  }
}
</style>
