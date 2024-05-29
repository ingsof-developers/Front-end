<template>
  <div class="ma-0 pa-0">
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex justify-center align-center" justify="center">
        <img src="../assets/logo_2.png" height="65" cover>
      </v-col>

      <v-spacer />

      <v-col class="col-auto">
        <v-row class="ma-0 pa-0">
          <router-link v-for="opcion in opciones" :key="opcion.title" :to="opcion.path" style="text-decoration: none;">
            <v-col style="color: white !important; font-size: 20px;">
              {{ opcion.title }}
            </v-col>
          </router-link>
        </v-row>
      </v-col>
    </v-app-bar>

    <Nuxt />
  </div>
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
