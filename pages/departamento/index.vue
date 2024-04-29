<template>
  <v-app>
    <v-main>
      <v-sheet height="90vh" width="100%" color="#fcfdff" class="d-flex flex-column pa-10">
        <div v-if="departamento_data" class="ma-0 py-5 px-15 pb-15">
          <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
            <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
              Departamento de {{ departamento_data.name }}
            </p>
          </v-row>

          <div class="ma-0 pa-0 mx-15" justify="center" align="center">
            <v-row class="ma-0 pa-0 mt-7" justify="center" align="center">
              <p style="font-size: 20px" justify="center" align="center">
                {{ departamento_data.description_info }}
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
                    {{ servicio.description }}
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
import departments from '@/assets/departments.json'

export default {
  layout: 'ui-home',
  data () {
    return {
      departamento_data: null,
      departamentoName: ''
    }
  },
  mounted () {
    const departamentoName = localStorage.getItem('departamento_name')

    console.log('Departamento', departamentoName)

    if (departamentoName) {
      this.departamento_data = this.findDepartamento(departamentoName)
    }
  },
  methods: {
    findDepartamento (name) {
      return departments.find(departamento => departamento.name === name)
    },
    cita () {
      this.$router.push({ name: 'cita' })
    }
  }
}
</script>
