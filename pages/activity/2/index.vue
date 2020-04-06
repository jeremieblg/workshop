<template>
  <activity :current-activity="currentActivity"></activity>
</template>

<script>
import activity from '~/components/activity.vue'

export default {
  components: {
    activity
  },
  data() {
    return {
      currentActivity: 'salon'
    }
  }
}
</script>

<style lang="scss"></style>
