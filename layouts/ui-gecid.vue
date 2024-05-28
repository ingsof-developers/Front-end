<template>
  <div>
    <v-app-bar height="80" color="#00468C">
      <v-col class="d-flex">
        <router-link to="/gecid" class="ma-0 pa-0">
          <img src="../assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
        </router-link>
      </v-col>

      <v-spacer />

      <v-col cols="6">
        <v-row style="justify-content: end !important;">
          <v-col class="d-flex ma-0 pa-0" style="width: 50px !important; max-width: 50px !important;">
            <v-menu
              min-width="400"
              absolute
              class="ma-0 pa-0"
              rounded="xxl"
              style="z-index: 10000 !important;"
            >
              <template #activator="{ on, attrs }">
                <v-icon dark v-bind="attrs" class="ma-0 pa-0" v-on="on">
                  {{ pops[0].icon }}
                </v-icon>
              </template>

              <v-list class="ma-0 pa-0">
                <v-list-item-title style="font-size: 25px; font-weight: 600;" class="ma-6 mb-10">
                  {{ pops[0].title }}
                </v-list-item-title>

                <router-link
                  v-for="(item, i) in pops[0].items"
                  :key="i"
                  class="ma-5 pa-0"
                  :to="item.path"
                  style="text-decoration: none;"
                >
                  <v-list-item :class="{ 'divider': i !== pops[0].items.length - 1 }">
                    <v-row class="pa-0 ma-0 justify-center align-center" justify="center" align="center">
                      <v-col class="d-flex justify-center align-center ma-0 pa-0" cols="2">
                        <v-avatar class="mb-4" :color="item.color" size="50" />
                      </v-col>

                      <v-col class="ma-0 pa-0">
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

          <v-col class="d-flex ma-0 pa-0" style="width: 50px !important; max-width: 50px !important;">
            <v-menu
              min-width="400"
              absolute
              class="ma-0 pa-0"
              rounded="xxl"
              style="z-index: 10000 !important;"
            >
              <template #activator="{ on, attrs }">
                <v-icon dark v-bind="attrs" class="ma-0 pa-0" v-on="on">
                  {{ pops[1].icon }}
                </v-icon>
              </template>

              <v-list class="ma-0 pa-0">
                <v-list-item-title style="font-size: 25px; font-weight: 600;" class="ma-6 mb-10">
                  {{ pops[1].title }}
                </v-list-item-title>

                <router-link
                  v-for="(item, i) in pops[1].items"
                  :key="i"
                  class="ma-5 pa-0"
                  :to="item.path"
                  style="text-decoration: none;"
                >
                  <v-list-item :class="{ 'divider': i !== pops[1].items.length - 1 }">
                    <v-row class="pa-0 ma-0 justify-center align-center" justify="center" align="center">
                      <v-col class="d-flex justify-center align-center ma-0 pa-0" cols="2">
                        <v-avatar class="mb-4" :color="item.color" size="50" />
                      </v-col>

                      <v-col class="ma-0 pa-0">
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

          <router-link
            v-for="opcion in opciones"
            :key="opcion.title"
            exact
            class="ma-0 pa-0"
            :to="{ path: opcion.path, state: { popupData: opcion.popupData } }"
            style="text-decoration: none;"
          >
            <v-col style="color: white !important; width: 50px !important; max-width: 50px !important;">
              <v-icon dark>
                {{ opcion.icon }}
              </v-icon>
            </v-col>
          </router-link>

          <v-col class="d-flex ma-0 pa-0" style="width: 50px !important; max-width: 50px !important;">
            <v-menu
              min-width="400"
              absolute
              class="ma-0 pa-0"
              rounded="xxl"
              style="z-index: 10000 !important;"
            >
              <template #activator="{ on, attrs }">
                <v-icon dark v-bind="attrs" class="ma-0 pa-0" v-on="on">
                  {{ profile.icon }}
                </v-icon>
              </template>

              <v-list class="ma-0 pa-0">
                <v-list-item-title style="font-size: 25px; font-weight: 600;" class="ma-6 mb-10">
                  {{ profile.title }}
                </v-list-item-title>

                <router-link
                  v-for="(item, i) in profile.items"
                  :key="i"
                  class="ma-5 pa-0"
                  :to="item.path"
                  style="text-decoration: none;"
                >
                  <v-list-item :class="{ 'divider': i !== profile.items.length - 1 }">
                    <v-row class="pa-0 ma-0 justify-center align-center" justify="center" align="center">
                      <v-col class="d-flex justify-center align-center ma-0 pa-0" cols="2">
                        <v-avatar class="mb-4" :color="item.color" size="50" />
                      </v-col>

                      <v-col class="ma-0 pa-0">
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
        </v-row>
      </v-col>
    </v-app-bar>

    <Nuxt />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AppBarGecid',
  data () {
    return {
      pops: [
        { icon: 'mdi-bell', title: 'Mensajes', items: [{ color: 'grey darken-1', message: 'Mensaje 1', path: '' }, { color: 'grey darken-1', message: 'Mensaje 2', path: '' }, { color: 'grey darken-1', message: 'Mensaje 3', path: '' }] },
        { icon: 'mdi-chat', title: 'Notificaciones', items: [{ color: 'grey darken-1', message: 'Notificación 1', path: '' }, { color: 'grey darken-1', message: 'Notificación 2', path: '' }, { color: 'grey darken-1', message: 'Notificación 3', path: '' }] }
      ],
      opciones: [
        { icon: 'mdi-notebook', path: '' },
        { icon: 'mdi-history', path: '' }
      ],
      profile: {
        icon: 'mdi-account', title: '', items: [{ color: 'grey darken-1', message: 'Perfil', path: '/gecid/profile' }, { color: 'grey darken-1', message: 'Log Out', path: '/' }]
      }
    }
  },
  computed: {
    ...mapState(['popUpOpen']),
    popUpOpen: {
      get () {
        return this.$store.state.popUpOpen
      },
      set (value) {
        this.$store.commit('openPopup', value)
      }
    }
  },
  created () {
    this.$watch(
      () => this.$route,
      () => {
        console.log('Ruta cambiada:', this.$route)
        this.closePopup()
      }
    )
  },
  methods: {
    click () {
      console.log('click')
    },
    ...mapMutations(['openPopup', 'closePopup']),
    handleClick () {
      this.popUpOpen ? this.closePopup() : this.openPopup()
      this.$emit('click')
    },
    beforeRouteLeave (to, from, next) {
      this.closePopup()
      next()
    },
    beforeRouteUpdate (to, from, next) {
      this.closePopup()
      next()
    }
  }
}
</script>
