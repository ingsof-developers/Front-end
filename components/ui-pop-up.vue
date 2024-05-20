<template>
  <v-col class="d-flex ma-0 pa-0 align-center justify-center" style="width: 50px !important; max-width: 50px !important;">
    <v-menu
      min-width="400"
      absolute
      class="ma-0 pa-0"
      rounded="xxl"
      style="z-index: 10000 !important;"
    >
      <template #activator="{ on, attrs }">
        <v-icon dark v-bind="attrs" class="ma-0 pa-0" style="width: 24px !important; height: 24px !important;" v-on="on">
          {{ icon }}
        </v-icon>
      </template>

      <v-list class="ma-0 pa-0">
        <v-list-item-title style="font-size: 25px; font-weight: 600;" class="ma-6">
          {{ title }}
        </v-list-item-title>

        <router-link
          v-for="(item, i) in items"
          :key="i"
          class="ma-0 pa-0"
          :to="item.path"
          style="text-decoration: none;"
        >
          <v-list-item class="ma-0 pa-0" :class="{ 'divider': i !== items.length - 1 }">
            <v-row class="pa-0 ma-5 justify-center align-center" justify="center" align="center">
              <v-col class="d-flex flex-column justify-center align-center ma-0 pa-0" align="center" justify="center" cols="2">
                <v-avatar class="ma-0 pa-0" :color="item.color" size="50" />
              </v-col>

              <v-col class="ma-0 pa-0 ml-5">
                <v-list-item-title style="font-size: 18px;">
                  {{ item.message }}
                </v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item>
        </router-link>
      </v-list>
    </v-menu>
  </v-col>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    }
  }
}
</script>
