<template>
  <div>
    <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-spacer />
      <span class="month-title">{{ getCurrentMonth() }}</span> <!-- Mostrar el nombre del mes -->
      <v-spacer />
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type"
        :types="types"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
        @click:date="showDialog"
      />
    </v-sheet>
    <!-- Diálogo -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="dialog-title">Diálogo de Prueba</v-card-title>
        <v-card-text>
          <p class="dialog-message">Hola</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day'],
    mode: 'stack',
    modes: ['stack', 'column'],
    value: new Date(),
    events: [],
    color: ['#80bfff'],
    dialog: false // Variable para controlar la visualización del diálogo
  }),
  methods: {
    getEvents ({ start, end }) {
      // Implementación de obtener eventos...
    },
    getEventColor (event) {
      // Implementación de obtener el color del evento...
    },
    getCurrentMonth () {
      const currentDate = new Date(this.value)
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      return months[currentDate.getMonth()] // Obtener el nombre del mes actual
    },
    showDialog (date) {
      this.dialog = true
    }
  }
}
</script>

<style>
.month-title {
  font-size: 24px; /* Tamaño de fuente */
  font-weight: bold; /* Peso de la fuente */
}

.dialog-message {
  font-size: 20px; /* Tamaño de fuente más grande para el mensaje en el diálogo */
}
</style>
