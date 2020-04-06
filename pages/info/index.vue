<template>
  <div class="container">
    <navbar></navbar>
    <div class="main-div">
      <table class="table-sum">
        <tr>
          <td>
            <table class="activity-table">
              <tr>
                <td @click="goTo('sdb')">
                  Activit&eacute; n°1 : Salle de bain
                </td>
              </tr>
            </table>

            <table class="activity-table">
              <tr>
                <td @click="goTo('salon')">Activit&eacute; n°2 : Salon</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  },

  methods: {
    goTo(param) {
      if (param === 'sdb') {
        this.$router.push({
          path: '/activity/1'
        })
      } else if (param === 'salon') {
        this.$router.push({
          path: '/activity/2'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  flex-direction: column;
  justify-content: center;
}

table.activity-table {
  width: 18em;
  height: 10em;
  margin: 2em;
  td {
    background-color: $color-light-green;
    font-size: 30px;
    color: $color-grey;
    &:hover {
      background-color: $color-dark-green;
      cursor: pointer;
    }
  }
}
</style>
