<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/geci" class="ma-0 pa-0">
            <img src="@/assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </router-link>
        </v-col>

        <v-spacer />

        <v-col cols="6">
          <v-row style="justify-content: end !important;" align="center">
            <ui-pop-up :icon="profile.icon" :title="profile.title" :items="profile.items" />
          </v-row>
        </v-col>
      </v-app-bar>

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10">
        <v-col class="pa-0 ma-0">
          <v-row align="center" justify="center">
            <v-col
              cols="6"
              sm="4"
              md="3"
              lg="2"
              align="center"
              justify="center"
            >
              <v-avatar class="mb-4" color="grey darken-1" size="150" align="center" justify="center" />
            </v-col>

            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0">
                <p class="ma-0 pa-0" style="font-size: 35px;">
                  Nombre y Apellidos
                </p>
              </v-row>

              <v-row class="ma-0 pa-0">
                <p class="ma-0 pa-0" style="font-size: 25px;">
                  Correo
                </p>
              </v-row>
            </v-col>
          </v-row>

          <v-divider class="mt-10 mb-15" />

          <v-row class="ma-0 pa-0" align="center" justify="center">
            <v-col v-for="funcion in funciones" :key="funcion" class="ma-0 pa-0" justify="center" align="center">
              <v-card
                class="ma-0 d-flex flex-column pa-10 justify-center my-5"
                height="200"
                width="200"
                rounded="xxl"
                color="#eff7fe"
                justify="center"
                align="center"
                :to="funcion.path"
              >
                <p class="ma-0 pa-0" style="font-size: 20px;">
                  {{ funcion.name }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'GECID',
  data () {
    return {
      funciones: [
        { name: 'Register managers', path: '/geci/signup' }
      ]
    }
  },
  computed: {
    profile () {
      return this.$store.state.geci_profile
    }
  }
}
</script>
