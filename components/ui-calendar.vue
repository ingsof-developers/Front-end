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
    weekday: [0, 1, 2, 3, 4, 5, 6],
    value: new Date().toISOString().substr(0, 10), // Inicializar con la fecha actual en formato ISO
    events: [],
    colors: ['blue'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    dialog: false // Agregar esta línea para el estado del diálogo
  }),
  methods: {
    getEvents ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        })
      }

      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    getCurrentMonth () {
      const currentDate = new Date(this.value)
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      return months[currentDate.getMonth()] // Obtener el nombre del mes actual
    },
    showDialog (date) {
      console.log('Fecha clickeada:', date)
      this.dialog = true
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
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
