<template>
  <div class="result" :class="full">
    <div class="cardResult" @click="showMe()">
      <div class="scoreLogo" :class="scoreLogo"></div>
      <span class="title">{{ activity.title }}</span>
      <div class="moneyContainer">
        <div class="logo"></div>
        <span class="saving">{{ score.count }}€</span>
      </div>
    </div>
    <div v-if="displayFull" class="info">
      <div class="detail" :class="goodAnswerQ1">
        <div class="icon" :class="goodAnswerQ1"></div>
        <span class="text">{{ activity.council[0].text }}</span>
        <div class="savingsLader">
          <span class="text">
            {{ getPriceQ1(activity.council[0].count) }}€/{{
              activity.council[0].count
            }}€
          </span>
        </div>
      </div>
      <div class="detail" :class="goodAnswerQ2">
        <div class="icon" :class="goodAnswerQ2"></div>
        <span class="text">{{ activity.council[1].text }}</span>
        <div class="savingsLader">
          <span class="text">
            {{ getPriceQ2(activity.council[1].count) }}€/{{
              activity.council[1].count
            }}€
          </span>
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
      type: Object,
      required: true
    },
    displayFull: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    goodAnswerQ1() {
      if (this.responses.q1) {
        return 'true'
      } else {
        return 'false'
      }
    },
    goodAnswerQ2() {
      if (this.responses.q2) {
        return 'true'
      } else {
        return 'false'
      }
    },
    full() {
      if (this.displayFull) {
        return 'full'
      } else {
        return ''
      }
    },
    scoreLogo() {
      switch (this.score.score) {
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
    getPriceQ1(max) {
      if (this.responses.q1) {
        return max
      } else {
        return '0'
      }
    },
    getPriceQ2(max) {
      if (this.responses.q2) {
        return max
      } else {
        return '0'
      }
    },
    showMe() {
      this.$router.push({
        path: `/result/${this.activity.id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.result {
  height: 45px;
  width: 100%;
  &.full {
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 81%;
  }
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
      background-size: 40px;
      background-position: 0;
      background-repeat: no-repeat;
      &.scoreA {
        background-image: url('../static/score_a_dark.png');
      }
      &.scoreB {
        background-image: url('../static/score_b_dark.png');
      }
      &.scoreC {
        background-image: url('../static/score_c_dark.png');
      }
    }
    .title {
      height: fit-content;
      font-size: 20px;
      color: $color-white;
    }
    .moneyContainer {
      display: flex;
      justify-content: space-between;
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
  .info {
    height: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 80px;
    .detail {
      height: 70px;

      border-radius: 24px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      padding-right: 6px;
      padding-top: 4px;
      padding-bottom: 4px;
      justify-content: space-between;
      position: relative;
      width: 93%;
      margin-left: 20px;
      &.true {
        border: 1px solid $color-dark-green;
      }
      &.false {
        border: 1px solid red;
      }
      .icon {
        position: absolute;
        top: 11px;
        left: -35px;
        height: 40px;
        width: 40px;
        background-size: 40px;
        background-position: 0;
        background-repeat: no-repeat;
        &.true {
          background-image: url('../static/true.png');
        }
        &.false {
          background-image: url('../static/false.png');
        }
      }
      .text {
        height: fit-content;
        width: 60%;
        color: $color-white;
        font-size: 14px;
      }
      .savingsLader {
        height: 57px;
        width: 104px;
        background-size: 104px;
        background-position: 0;
        background-repeat: no-repeat;
        background-image: url('../static/saving_one.png');
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
          width: max-content;
        }
      }
    }
  }
}
</style>
