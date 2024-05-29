<template>
  <div>
    <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-spacer />
      <span class="month-title">{{ getCurrentMonth() }}</span>
      <v-spacer />
    </v-sheet>
    <v-sheet height="600" class="calendar-container">
      <div class="calendar-btns">
        <v-btn icon class="calendar-btn" @click="prev">
          <v-icon size="24">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn class="calendar-btn" @click="changeView('month')">
          Mes
        </v-btn>
        <v-btn class="calendar-btn" @click="changeView('week')">
          Semana
        </v-btn>
        <v-btn class="calendar-btn" @click="changeView('day')">
          Día
        </v-btn>
        <v-btn icon class="calendar-btn" @click="next">
          <v-icon size="24">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type"
        :types="types"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        class="calendar"
        @click:date="showDialog"
      />
    </v-sheet>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="dialog-title">
          Citas
        </v-card-title>
        <v-card-text>
          <p class="dialog-message">
            {{ dialogMessage }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    citasPasadas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      type: 'month',
      types: ['month', 'week', 'day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      value: new Date().toISOString().substr(0, 10),
      events: [],
      colors: ['#F7F7F7'],
      names: ['Cita'],
      dialog: false,
      dialogMessage: ''
    }
  },
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
      return months[currentDate.getMonth()]
    },
    showDialog (clickedDate) {
      console.log('Fecha clickeada:', clickedDate)

      if (clickedDate && clickedDate.date) {
        const formattedDate = clickedDate.date
        console.log('Fecha formateada:', formattedDate)

        const cita = this.citasPasadas.find(cita => cita.fecha === formattedDate)
        if (cita !== undefined) {
          console.log('Cita encontrada:', cita)
          this.dialogMessage = `Cita en ${cita.departamentoName} el ${formattedDate}`
        } else {
          console.log('No hay cita para esta fecha.')
          this.dialogMessage = 'No hay cita para esta fecha.'
        }
        this.dialog = true
      } else {
        console.error('Fecha no válida:', clickedDate)
      }
    },
    changeView (view) {
      this.type = view
    },
    prev () {
      if (this.type === 'month') {
        this.value = new Date(this.value).setMonth(new Date(this.value).getMonth() - 1)
      } else if (this.type === 'week') {
        this.value = new Date(this.value).setDate(new Date(this.value).getDate() - 7)
      } else if (this.type === 'day') {
        this.value = new Date(this.value).setDate(new Date(this.value).getDate() - 1)
      }
    },
    next () {
      if (this.type === 'month') {
        this.value = new Date(this.value).setMonth(new Date(this.value).getMonth() + 1)
      } else if (this.type === 'week') {
        this.value = new Date(this.value).setDate(new Date(this.value).getDate() + 7)
      } else if (this.type === 'day') {
        this.value = new Date(this.value).setDate(new Date(this.value).getDate() + 1)
      }
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    }
  }
}
</script>

<style>
.month-title {
  font-size: 24px;
  font-weight: bold;
}

.calendar-btns {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.calendar-btn {
  background-color: transparent;
  border: none;
  color: #4CAF50;
  padding: 0;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calendar-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
