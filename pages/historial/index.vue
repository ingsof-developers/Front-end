<template>
  <v-app>
    <v-container>
      <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
        <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
          Historial de citas
        </p>
      </v-row>

      <!-- Botones de departamentos -->
      <v-row class="ma-0 pa-0" justify="center" align="center">
        <v-col v-for="departamento in departamentos" :key="departamento.name" justify="center" align="center">
          <v-card
            class="d-flex flex-column pa-10 justify-center my-5"
            height="200"
            width="200"
            rounded="xxl"
            color="#eff7fe"
            justify="center"
            align="center"
            @click="mostrarCitasPorDepartamento(departamento.name)"
            style="cursor: pointer;"
          >
            <p style="font-size: 20px;">
              {{ departamento.name }}
            </p>
          </v-card>
        </v-col>
        <!-- Botón "Ver historial completo" -->
        <v-col justify="center" align="center">
          <v-card
            class="d-flex flex-column pa-10 justify-center my-5"
            height="200"
            width="200"
            rounded="xxl"
            color="#eff7fe"
            justify="center"
            align="center"
            @click="verHistorialCompleto"
            style="cursor: pointer;"
          >
            <p style="font-size: 20px;">Ver historial completo</p>
          </v-card>
        </v-col>
        <!-- Botón "Citas anteriores" -->
        <v-col justify="center" align="center">
          <v-card
            class="d-flex flex-column pa-10 justify-center my-5"
            height="200"
            width="200"
            rounded="xxl"
            color="#eff7fe"
            justify="center"
            align="center"
            @click="verCitasAnteriores"
            style="cursor: pointer;"
          >
            <p style="font-size: 20px;">Citas anteriores</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Mostrar mensaje de bienvenida al departamento -->
      <v-row class="ma-0 pa-0 mt-5" justify="center" align="center">
        <p v-if="!departamento_data.length && !showAllCitas" style="font-size: 20px;">{{ mensajeDepartamento }}</p>
      </v-row>

      <!-- Lista de citas -->
      <v-list v-if="showAllCitas || departamento_data.length">
        <v-list-item v-for="(cita, index) in (showAllCitas ? todasLasCitas : departamento_data)" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ cita.departamentoName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-container>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'
// import citas from '@/assets/citas.json' // Importa el archivo JSON de citas

export default {
  layout: 'ui-home',
  data () {
    return {
      departamento_data: [], // Array para almacenar las citas por departamento
      todasLasCitas: [], // Todas las citas
      departamentos: [], // Variable para almacenar los departamentos
      mensajeDepartamento: '', // Mensaje de bienvenida al departamento
      showAllCitas: false // Variable para mostrar todas las citas
    }
  },
  mounted () {
    this.departamentos = departments
    // this.todasLasCitas = citas // Llena todasLasCitas con los datos de citas
  },
  methods: {
    mostrarCitasPorDepartamento (departamentoName) {
      // Mostrar citas del departamento correspondiente
      // this.departamento_data = this.todasLasCitas.filter(cita => cita.departamentoName === departamentoName)
      if (this.todasLasCitas.length > 0) {
        this.departamento_data = this.todasLasCitas.filter(cita => cita.departamentoName === departamentoName)
      }
      if (this.departamento_data.length) {
        this.mensajeDepartamento = ''
        this.showAllCitas = false
      } else {
        this.mensajeDepartamento = 'No tienes citas en el departamento de ' + departamentoName
        this.showAllCitas = false
      }
    },
    verHistorialCompleto () {
      // Mostrar todas las citas
      if (this.todasLasCitas.length) {
        this.mensajeDepartamento = ''
        this.departamento_data = [] // Vacía departamento_data
        this.showAllCitas = true
      } else {
        this.mensajeDepartamento = 'No tienes citas actualmente.'
        this.showAllCitas = false
      }
    },
    verCitasAnteriores () {
      // Implementa la lógica para mostrar las citas anteriores
      // Obtener la fecha actual
      const fechaActual = new Date()
      const citasAnteriores = this.todasLasCitas.filter(cita => cita.fecha < fechaActual)
      if (citasAnteriores.length > 0) {
        this.departamento_data = citasAnteriores
        this.mensajeDepartamento = '' // Reiniciar el mensaje
      } else {
        this.departamento_data = [] // Vaciar el array
        this.mensajeDepartamento = 'No has tenido ninguna cita anteriormente.'
      }
      this.showAllCitas = false // Asegurar que showAllCitas sea falso
    }
  }
}
</script>
