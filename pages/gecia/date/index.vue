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

          <ui-date-form @update="updateValues" />

          <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
            <v-btn rounded color="#00468C" class="ma-0 pa-6" @click="cita()">
              <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Registrar cita</span>
            </v-btn>
          </v-row>
        </div>
      </v-sheet>

      <ui-alert v-if="showAlert" :text="alertText" :color="alertColor" :type="alertType" />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GeciaDate',
  data () {
    return {
      departamento_data: null,
      departamentoName: '',
      departments: [],
      fecha: null,
      hora: null,
      notas: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: ''
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
    const departamentoId = localStorage.getItem('department_id')

    console.log('Departamento', departamentoId)
    console.log('Departamento', departamentoName)

    axios.get('http://localhost:8081/departamentos/all')
      .then((response) => {
        this.departments = response.data
        if (departamentoName) {
          this.departamento_data = this.findDepartamento(departamentoName)
        }
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  },
  methods: {
    updateValues (values) {
      this.fecha = values.fecha
      this.hora = values.hora
      this.notas = values.notas
    },
    findDepartamento (name) {
      return this.departments.find(departamento => departamento.name === name)
    },
    async cita () {
      const departamentoId = localStorage.getItem('department_id')

      const cita = {
        fecha: this.fecha,
        hora: this.hora,
        descripcion: this.notas,
        students: { id: 1 },
        tutores: { id: 1 },
        departamentos: { id: departamentoId }
      }

      try {
        const response = await axios.post('http://localhost:8081/citas', cita)

        console.log(response.data)

        if (response.data) {
          this.showAlert = true
          this.alertText = response.data.message
          this.alertColor = '#6CDACE'
          this.alertType = 'success'

          setTimeout(() => {
            this.showAlert = false

            this.$router.push('/gecia')
          }, 3000)
        }
      } catch (error) {
        console.error('There was an error!', error.message)

        this.showAlert = true
        this.alertText = error.message
        this.alertColor = '#FF9F8E'
        this.alertType = 'warning'

        setTimeout(() => {
          this.showAlert = false
        }, 3000)
      }
    }
  }
}
</script>
