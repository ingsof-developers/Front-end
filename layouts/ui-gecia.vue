<template>
  <div>
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex">
        <router-link to="/gecia" class="ma-0 pa-0">
          <img src="../assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
        </router-link>
      </v-col>

      <v-spacer />

      <v-col cols="6">
        <v-row style="justify-content: end !important;">
          <ui-pop-up :icon="pops[0].icon" :title="pops[0].title" :items="pops[0].items" />

          <ui-pop-up :icon="pops[1].icon" :title="pops[1].title" :items="pops[1].items" />

          <router-link v-for="opcion in opciones" :key="opcion.icon" class="ma-0 pa-0" :to="opcion.path" style="text-decoration: none;">
            <v-col style="color: white !important; width: 50px !important; max-width: 50px !important;">
              <v-icon dark>
                {{ opcion.icon }}
              </v-icon>
            </v-col>
          </router-link>

          <ui-pop-up :icon="profile.icon" :title="profile.title" :items="profile.items" />
        </v-row>
      </v-col>
    </v-app-bar>

    <Nuxt />
  </div>
</template>

<script>

export default {
  name: 'AppBarGecia',
  data () {
    return {
      //
    }
  },
  computed: {
    pops () {
      return this.$store.state.pops
    },
    opciones () {
      return this.$store.state.opciones
    },
    profile () {
      return this.$store.state.profile
    }
  }
}
</script>
