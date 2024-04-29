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
    }
  }
}
</script>
