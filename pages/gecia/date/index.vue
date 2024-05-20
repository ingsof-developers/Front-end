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
        <div v-if="departamento_data" class="ma-0 py-5 px-15 pb-15">
          <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
            <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
              Departamento de {{ departamento_data.name }}
            </p>
          </v-row>

          <ui-date-form />

          <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
            <v-btn rounded color="#00468C" class="ma-0 pa-6" @click="cita()">
              <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Registrar cita</span>
            </v-btn>
          </v-row>
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'

export default {
  name: 'GeciaDate',
  data () {
    return {
      departamento_data: null,
      departamentoName: ''
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
    const departamentoName = localStorage.getItem('department_name')

    console.log('Departamento', departamentoName)

    if (departamentoName) {
      this.departamento_data = this.findDepartamento(departamentoName)
    }
  },
  methods: {
    findDepartamento (name) {
      return departments.find(departamento => departamento.name === name)
    }
  }
}
</script>
