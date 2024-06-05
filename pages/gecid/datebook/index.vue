<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/gecid" class="ma-0 pa-0">
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

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10" align="center">
        <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
          <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
            Agenda de citas
          </p>
        </v-row>

        <ui-calendar-department class="ma-0 pa-0 mt-5" :citas-pasadas="departamento_data" />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GecidDateBook',
  data () {
    return {
      departamento_data: null,
      departamentoName: '',
      departamentos: [],
      mensajeDepartamento: 'No hay citas pasadas.',
      showAllCitas: true
    }
  },
  computed: {
    pops () {
      return this.$store.state.gecid_pops
    },
    opciones () {
      return this.$store.state.gecid_opciones
    },
    profile () {
      return this.$store.state.gecid_profile
    }
  },
  mounted () {
    this.getCitasData()
  },
  methods: {
    async getCitasData () {
      try {
        const email = this.$store.state.user.email // Asegúrate de que el email está en el estado de la tienda

        const response = await axios.get(`http://localhost:8081/citas/tutor/${email}`)
        this.departamento_data = response.data.map(cita => ({
          id: cita.id,
          departamentoName: cita.departamentoName,
          fecha: cita.fecha ? cita.fecha.split('T')[0] : 'N/A', // Proporciona un valor predeterminado si fecha es nulo
          hora: cita.hora
        }))
        console.log('Citas:', this.departamento_data)
      } catch (error) {
        console.error('There was an error!', error)
      }
    }
  }
}
</script>
