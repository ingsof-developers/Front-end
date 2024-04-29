<template>
  <div>
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex justify-center align-center" justify="center">
        <img src="../assets/logo_2.png" height="60" cover>
      </v-col>

      <v-spacer />

      <v-col class="col-xss-5 col-xs-5 col-m-3 col-lg-3 col-2">
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
