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
                <p style="font-size: 35px;">
                  Nombre y Apellidos
                </p>
              </v-row>

              <v-row class="ma-0 pa-0">
                <p style="font-size: 25px;">
                  Correo
                </p>
              </v-row>
            </v-col>
          </v-row>

          <v-divider class="mt-10 mb-15" />

          <v-row class="ma-0 pa-0" justify="center" align="center">
            <p style="font-size: 25px; letter-spacing: 1px;">
              DEPARTAMENTOS
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-5" justify="center" align="center">
            <v-col v-for="departamento in departamentos" :key="departamento.name" justify="center" align="center">
              <v-card
                class="d-flex flex-column pa-10 justify-center my-5"
                height="200"
                width="200"
                rounded="xxl"
                color="#eff7fe"
                justify="center"
                align="center"
                @click="departamento_seleccionado(departamento)"
              >
                <p style="font-size: 20px;">
                  {{ departamento.name }}
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
import departments from '@/assets/departments.json'

export default {
  name: 'GeciaProfile',
  data () {
    return {
      departamentos: []
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
  },
  mounted () {
    this.departamentos = departments
  },
  methods: {
    departamento_seleccionado (departamento) {
      console.log('departamento name index', departamento.name)
      localStorage.setItem('department_name', departamento.name)
      this.$router.push({ name: 'gecia-departments' })
    }
  }
}
</script>
