<template>
  <v-col class="d-flex ma-0 pa-0" align="center" style="width: 50px !important; max-width: 50px !important;">
    <v-menu min-width="400" absolute class="ma-0 pa-0" rounded="xxl">
      <template #activator="{ on, attrs }">
        <v-icon dark v-bind="attrs" class="ma-0 pa-0" v-on="on">
          {{ icon }}
        </v-icon>
      </template>

      <v-list class="ma-0 pa-0">
        <v-list-item-title style="font-size: 25px; font-weight: 600;" class="ma-6 mb-10">
          {{ title }}
        </v-list-item-title>

        <v-list-item v-for="(item, i) in items" :key="i" class="ma-5 pa-0" :class="{ 'divider': i !== items.length - 1 }" @click="() => {}">
          <v-row class="pa-0 ma-0 justify-center align-center" justify="center" align="center ">
            <v-col class="d-flex justify-center align-center ma-0 pa-0" cols="2">
              <v-avatar class="mb-4" :color="item.color" size="50" />
            </v-col>

            <v-col>
              <v-list-item-title style="font-size: 18px;">
                {{ item.message }}
              </v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
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
