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

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10" align="center">
        <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
          <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
            Agenda de citas
          </p>
        </v-row>

        <ui-calendar class="ma-0 pa-0" :citas-pasadas="departamento_data" />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'

export default {
  data () {
    return {
      departamento_data: [],
      departamentos: [],
      mensajeDepartamento: 'No hay citas pasadas.',
      showAllCitas: true
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
    this.getDepartamentoData()
  },
  methods: {
    getDepartamentoData () {
      this.departamento_data = [
        { departamentoName: 'Tutoría', fecha: '2024-05-01', hora: '11:00' },
        { departamentoName: 'Activación física', fecha: '2024-04-26', hora: '12:00' },
        { departamentoName: 'Activación física', fecha: '2024-04-26', hora: '13:00' },
        { departamentoName: 'Activación física', fecha: '2024-04-25', hora: '16:00' },
        { departamentoName: 'Activación', fecha: '2024-02-10', hora: '08:00' },
        { departamentoName: 'Nutrición', fecha: '2024-03-10', hora: '10:00' },
        { departamentoName: 'Nutrición', fecha: '2024-03-11', hora: '14:00' }
      ]
    }
  }
}
</script>
