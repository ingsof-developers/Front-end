<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/geci" class="ma-0 pa-0">
            <img src="@/assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </router-link>
        </v-col>

        <v-spacer />

        <v-col cols="6">
          <v-row style="justify-content: end !important;" align="center">
            <ui-pop-up :icon="profile.icon" :title="profile.title" :items="profile.items" />
          </v-row>
        </v-col>
      </v-app-bar>

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10" align="center">
        <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
          <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
            Citas de {{ student.name }}
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 mt-15" justify="center" align="center">
          <v-data-table
            :headers="headers_appointments"
            :items="appointments"
            :items-per-page="10"
            hide-default-footer
            class="ma-0 pa-0"
          />
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StudentAppointments',
  data () {
    return {
      student: {},
      appointments: [],
      headers_appointments: [
        { text: 'Fecha', value: 'fecha', align: 'center' },
        { text: 'Hora', value: 'hora', align: 'center' },
        { text: 'Departamento', value: 'departamentoName', align: 'center' }
      ]
    }
  },
  computed: {
    profile () {
      return this.$store.state.profile
    }
  },
  mounted () {
    this.getStudentData()
    this.getStudentAppointments()
  },
  methods: {
    async getStudentData () {
      const studentId = this.$route.params.studentId
      // datos del estudiante. Este es un ejemplo
      const response = await axios.get(`http://localhost:8081/students/${studentId}`)
      this.student = response.data
    },
    async getStudentAppointments () {
      const studentId = this.$route.params.studentId
      try {
        const response = await axios.get(`http://localhost:8081/citas/student/${studentId}`)
        this.appointments = response.data.map(cita => ({
          departamentoName: cita.departamentoName,
          fecha: cita.fecha ? cita.fecha.split('T')[0] : 'N/A',
          hora: cita.hora
        }))
      } catch (error) {
        console.error('There was an error!', error)
      }
    }
  }
}
</script>
