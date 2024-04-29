<template>
  <v-alert :color="color" :type="type" shaped prominent style="position: absolute !important; top: 0; left: 0; ; z-index: 1;">
    <span style="color: white; font-size: 20px;">{{ text }}</span>
  </v-alert>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  }
}
</script>
