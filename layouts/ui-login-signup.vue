<template>
  <v-app>
    <v-main>
      <v-sheet>
        <v-app-bar height="80" color="#00468C">
          <v-col class="d-flex">
            <img src="../assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </v-col>

          <v-spacer />

          <v-col cols="5" sm="4" md="3" lg="2">
            <v-row>
              <router-link v-for="opcion in opciones" :key="opcion.title" :to="opcion.path" style="text-decoration: none;">
                <v-col style="color: white !important; font-size: 20px;">
                  {{ opcion.title }}
                </v-col>
              </router-link>
            </v-row>
          </v-col>
        </v-app-bar>

        <Nuxt />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'AppBar',
  data () {
    return {
      opciones: [
        { title: 'Sign Up', path: '/signup' },
        { title: 'Log In', path: '/' }
      ]
    }
  }
}
</script>
