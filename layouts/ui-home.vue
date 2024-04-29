<template>
  <div>
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex justify-center align-center" justify="center">
        <img src="../assets/logo_2.png" height="60" cover>
      </v-col>

      <v-spacer />

      <v-col cols="6">
        <v-row style="justify-content: end !important;">
          <router-link v-for="opcion in opciones" :key="opcion.title" class="pa-2 ml-auto" :to="opcion.path" style="text-decoration: none;">
            <v-col style="color: white !important; font-size: 20px;">
              <v-icon dark>
                {{ opcion.icon }}
              </v-icon>
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
        { icon: 'mdi-bell', path: '' },
        { icon: 'mdi-chat', path: '' },
        { icon: 'mdi-notebook', path: '' },
        { icon: 'mdi-restore', path: '' },
        { icon: 'mdi-account', path: '' }
      ]
    }
  }
}
</script>
