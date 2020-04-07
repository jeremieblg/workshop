<template>
  <div class="result">
    <div class="cardResult">
      <div class="scoreLogo"></div>
      <span class="title">{{ activity.title }}</span>
      <div class="moneyContainer">
        <div class="logo"></div>
        <span class="saving">10€</span>
      </div>
    </div>
    <div v-if="false" class="detail">
      <div class="info">
        <div class="first">
          <div class="icon"></div>
          <span class="text"></span>
          <div class="savingsLader">
            <div class="logo"></div>
            <span class="text"></span>
          </div>
        </div>
        <div class="last">
          <div class="savingsLader">
            <div class="logo"></div>
            <span class="text"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true
    },
    responses: {
      type: Object,
      required: true
    },
    score: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.result {
  height: 45px;
  width: 100%;
  .cardResult {
    height: 45px;
    width: 100%;
    background-color: $color-light-green;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 28px;
    padding-right: 28px;
    .scoreLogo {
      position: absolute;
      top: -20px;
      left: -20px;
      height: 40px;
      width: 40px;
      background-image: url('../static/score_b_dark.png');
      background-size: 40px;
      background-position: 0;
      background-repeat: no-repeat;
    }
    .title {
      height: fit-content;
      font-size: 20px;
      color: $color-white;
    }
    .moneyContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100px;
      .logo {
        height: 40px;
        width: 40px;
        background-image: url('../static/pig_saving.png');
        background-size: 40px;
        background-position: 0;
      }
      .saving {
        height: fit-content;
        font-size: 20px;
        color: $color-white;
      }
    }
  }
}
</style>
