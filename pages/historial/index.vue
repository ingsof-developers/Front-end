<template>
  <v-app>
    <v-container>
      <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
        <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
          Historial de citas
        </p>
      </v-row>

      <ui-calendar :citasPasadas="departamento_data" />
      <br><br><br><br><br><br>
    </v-container>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'

export default {
  layout: 'ui-home',
  data () {
    return {
      departamento_data: [],
      departamentos: [],
      mensajeDepartamento: 'No hay citas pasadas.',
      showAllCitas: true
    }
  },
  mounted () {
    this.departamentos = departments
    this.getDepartamentoData()
  },
  methods: {
    getDepartamentoData () {
      this.departamento_data = [
        { departamentoName: 'Tutoría', fecha: '2024-05-01' },
        { departamentoName: 'Activación física', fecha: '2024-04-25' },
        { departamentoName: 'Nutrición', fecha: '2024-03-10' }
      ]
    }
  }
}
</script>
