<template>
  <div>
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex">
        <img src="../assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
      </v-col>

      <v-spacer />

      <v-col cols="6">
        <v-row style="justify-content: end !important;">
          <ui-pop-up :icon="pops[0].icon" :title="pops[0].title" :items="pops[0].items" class="ma-0 pa-0" />

          <ui-pop-up :icon="pops[1].icon" :title="pops[1].title" :items="pops[1].items" class="ma-0 pa-0" />

          <router-link v-for="opcion in opciones" :key="opcion.title" class="ma-0 pa-0" :to="opcion.path" style="text-decoration: none;">
            <v-col style="color: white !important; width: 50px !important; max-width: 50px !important;">
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
      pops: [
        { icon: 'mdi-bell', title: 'Mensajes', items: [{ color: 'grey darken-1', message: 'Mensaje 1' }, { color: 'grey darken-1', message: 'Mensaje 2' }, { color: 'grey darken-1', message: 'Mensaje 3' }] },
        { icon: 'mdi-chat', title: 'Notificaciones', items: [{ color: 'grey darken-1', message: 'Notificación 1' }, { color: 'grey darken-1', message: 'Notificación 2' }, { color: 'grey darken-1', message: 'Notificación 3' }] }
      ],
      opciones: [
        { icon: 'mdi-notebook', path: '/' },
        { icon: 'mdi-history', path: '' },
        { icon: 'mdi-account', path: '' }
      ]
    }
  }
}
</script>
