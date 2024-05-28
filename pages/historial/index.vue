<template>
  <v-app>
    <v-container>
      <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
        <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
          Historial de citas
        </p>
      </v-row>

      <ui-calendar />
    </v-container>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'

export default {
  layout: 'ui-home',
  data () {
    return {
      departamento_data: [], // Array para almacenar las citas
      departamentos: [], // Agrega la variable departamentos aquí
      mensajeDepartamento: 'No hay citas pasadas.', // Mensaje de bienvenida al departamento
      showAllCitas: true // Variable para mostrar todas las citas, puedes cambiarla según tu lógica
    }
  },
  mounted () {
    this.departamentos = departments
    // Lógica para obtener las citas pasadas del usuario y almacenarlas en departamento_data
    // Puedes obtener las citas pasadas de la base de datos o de alguna otra fuente de datos
    // Por ahora, supondré que departamento_data se llena con datos de ejemplo
    // Comenta la siguiente línea si obtienes las citas de la base de datos
    this.getDepartamentoData() // Esta línea es solo para ejemplo, debe ser eliminada si obtienes las citas de la base de datos
  },
  methods: {
    getDepartamentoData () {
      // Aquí debes implementar la lógica para obtener las citas de la base de datos
      // Llena el array departamento_data con los datos obtenidos

      this.departamento_data = [
        { departamentoName: 'Tutoría', fecha: '2024-05-01' },
        { departamentoName: 'Activación física', fecha: '2024-04-25' },
        { departamentoName: 'Nutricióm', fecha: '2024-03-10' },
        { departamentoName: 'Nutricióm', fecha: '2024-03-10' },
        { departamentoName: 'Nutricióm', fecha: '2024-03-10' }
        // Agrega más citas según sea necesario
      ]
    }
  }
}
</script>
