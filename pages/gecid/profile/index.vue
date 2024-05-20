<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/gecia" class="ma-0 pa-0">
            <img src="@/assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </router-link>
        </v-col>

        <v-spacer />

        <v-col cols="6">
          <v-row style="justify-content: end !important;" align="center">
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

      <v-sheet height="100%" width="100%" class="d-flex flex-column px-10 justify-center" justify="center" align="center">
        <div class="pa-0 ma-0 d-flex flex-column justify-center" justify="center" align="center">
          <v-card class="d-flex flex-column pa-10 justify-center" width="500" rounded="xxl" color="#eff7fe" justify="center" align="center">
            <v-col align="center" justify="center">
              <v-row
                cols="6"
                sm="4"
                md="3"
                lg="2"
                align="center"
                justify="center"
              >
                <v-avatar class="mb-4" color="grey darken-1" size="150" align="center" justify="center" />
              </v-row>

              <v-row class="ma-0 pa-0 mt-10" align="center" justify="center">
                <p style="font-size: 35px;">
                  Nombre y Apellidos
                </p>
              </v-row>

              <v-row class="ma-0 pa-0" align="center" justify="center">
                <p style="font-size: 25px;">
                  Correo
                </p>
              </v-row>
            </v-col>
          </v-card>
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
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
