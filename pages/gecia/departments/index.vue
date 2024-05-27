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

          <div class="ma-0 pa-0 mx-15" justify="center" align="center">
            <v-row class="ma-0 pa-0 mt-7" justify="center" align="center">
              <p style="font-size: 20px" justify="center" align="center">
                {{ departamento_data.descriptionInfo }}
              </p>
            </v-row>

            <v-row class="ma-0 pa-0 mt-7" justify="center" align="center">
              <p class="ma-0 pa-0 mb-5" style="font-size: 25px; font-weight: 600;" justify="center" align="center">
                Servicios
              </p>

              <v-row v-for="servicio in departamento_data.services" :key="servicio.name">
                <v-row class="ma-0 pa-0 mb-5" justify="center" align="center">
                  <p class="ma-0 pa-0" style="font-size: 21px" justify="center" align="center">
                    • {{ servicio.name }}
                  </p>

                  <p class="ma-0 pa-0" style="font-size: 20px" justify="center" align="center">
                    {{ servicio.descripcion }}
                  </p>
                </v-row>
              </v-row>
            </v-row>

            <v-row class="ma-0 pa-0 mt-7" justify="center" align="center">
              <p style="font-size: 25px; font-weight: 600;" justify="center" align="center">
                Programación de citas
              </p>

              <p style="font-size: 20px" justify="center" align="center">
                {{ departamento_data.dates }}
              </p>
            </v-row>

            <v-row class="ma-0 pa-0 mt-7" justify="center" align="center">
              <p style="font-size: 25px; font-weight: 600;" justify="center" align="center">
                Más información
              </p>

              <p style="font-size: 20px" justify="center" align="center">
                {{ departamento_data.info }}
              </p>
            </v-row>
          </div>

          <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
            <v-btn rounded color="#00468C" class="ma-0 pa-6" @click="cita()">
              <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Agendar cita</span>
            </v-btn>
          </v-row>
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GeciaDepartments',
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
    axios.get('http://localhost:8081/departamentos/all')
      .then((response) => {
        const departments = response.data
        const departamentoName = localStorage.getItem('department_name')

        console.log('Departamento departments', departamentoName)

        if (departamentoName) {
          this.departamento_data = this.findDepartamento(departamentoName, departments)
        }
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  },
  methods: {
    findDepartamento (name, departments) {
      const departamento = departments.find(departamento => departamento.name === name)
      if (departamento) {
        // Guarda el ID del departamento en localStorage
        localStorage.setItem('department_id', departamento.id)
      }
      return departamento
    },
    cita () {
      this.$router.push({ name: 'gecia-date' })
    }
  }
}
</script>
