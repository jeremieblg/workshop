<template>
  <div class="activityContainer">
    <div class="mainTitle" :class="animated">{{ title }}</div>
    <div class="mainCorp" :class="animated">{{ text }}</div>
    <el-switch
      v-model="responseToggle"
      :class="animated"
      style="display: block"
      active-color="#6eae35"
      inactive-color="#508026"
      :active-text="response1"
      :inactive-text="response2"
    ></el-switch>
  </div>
</template>
<script>
export default {
  props: {
    activity: {
      type: String,
      required: true
    },
    question: {
      type: Number,
      required: true
    },
    q: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      responseToggle: true,
      title: '',
      text: '',
      response1: '',
      response2: '',
      animated: '',
      sdb: [
        {
          title: 'Salle de bain',
          text:
            'Le lave linge est rempli, mais ne tourne pas, vous avez le choix de la température',
          response: [
            {
              text: '30°C',
              correct: 'true'
            },
            {
              text: '90°C',
              correct: 'false'
            }
          ]
        },
        {
          title: 'Salle de bain',
          text:
            "Un robinet classique est installé dans l'évier, vous avez le choix d'installer un mousseur",
          response: [
            {
              text: 'Oui',
              correct: 'true'
            },
            {
              text: 'Non',
              correct: 'false'
            }
          ]
        }
      ],
      salon: [
        {
          title: 'Salon',
          text:
            "Une multi prises est allumée sur laquelle sont branchées la box internet, TV et console de jeux. Vous avez le choix d'éteindre la multi prises",
          response: [
            {
              text: 'Oui',
              correct: 'true'
            },
            {
              text: 'Non',
              correct: 'false'
            }
          ]
        },
        {
          title: 'Salon',
          text:
            "Les ampoules sont allumées, vous avez le choix du type d'ampoule utilisée",
          response: [
            {
              text: 'LED',
              correct: 'true'
            },
            {
              text: 'Classique',
              correct: 'false'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  watch: {
    question(value) {
      this.save()
      this.animated = 'animate'
      setTimeout(() => {
        this.getQuestion(this.activity, value)
      }, 1000)
    },
    responseToggle(value) {
      this.save()
    }
  },
  beforeDestroy() {
    this.save()
  },
  created() {
    this.getQuestion(this.activity, this.question)
    this.save()
  },

  methods: {
    save() {
      const question = 'q' + this.q
      this.$store.commit({
        type: 'response',
        activity: this.activity,
        question,
        value: this.responseToggle
      })
    },
    getQuestion(activity, question) {
      if (activity === 'sdb') {
        this.title = this.sdb[question].title
        this.text = this.sdb[question].text
        this.response1 = this.sdb[question].response[0].text
        this.response2 = this.sdb[question].response[1].text
      }
      if (activity === 'salon') {
        this.title = this.salon[question].title
        this.text = this.salon[question].text
        this.response1 = this.salon[question].response[0].text
        this.response2 = this.salon[question].response[1].text
      }
    }
  }
}
</script>

<style lang="scss">
.animate {
  animation: 2s outIn;
}
@keyframes outIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
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
  .mainTitle {
    font-size: 35px;
    color: $color-light-green;
  }
  .mainCorp {
    text-align: left;
    color: $color-light-green;
    font-size: 22px;
  }
  .mainInfo {
    text-align: left;
  }
  .mainForm {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .containerInput {
      display: flex;
      justify-content: space-between;
      .name {
        width: 70%;
      }
      .age {
        width: 20%;
      }
    }
  }
  .el-switch {
    height: 30px;
    .el-switch__label {
      color: $color-white;
      height: 30px;
      &.is-active {
        color: $color-light-green;
      }
      &.el-switch__label--left {
        margin-left: 10px;
      }
      &.el-switch__label--right {
        margin-right: 0;
      }
      span {
        font-size: 30px;
      }
    }
  }
}
</style>
