<template>
  <div class="ma-0 pa-0">
    <v-sheet tile height="54" class="ma-0 pa-0 d-flex">
      <v-spacer />
      <span class="month-title">{{ getCurrentMonth() }}</span>
      <v-spacer />
    </v-sheet>

    <v-sheet class="ma-0 pa-0 calendar-container">
      <div class="ma-0 pa-0 calendar-btns">
        <v-btn icon class="ma-2 pa-0" @click="prev">
          <v-icon size="24">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn rounded class="ma-2 pa-3 calendar-btn" @click="changeView('month')">
          Mes
        </v-btn>
        <v-btn rounded class="ma-2 pa-3 calendar-btn" @click="changeView('week')">
          Semana
        </v-btn>
        <v-btn rounded class="ma-2 pa-3 calendar-btn" @click="changeView('day')">
          Día
        </v-btn>
        <v-btn icon class="ma-2 pa-0" @click="next">
          <v-icon size="24">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>

      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        class="ma-0 pa-0 mt-10 calendar"
        @click:date="showDialog"
      />
    </v-sheet>

    <v-dialog v-model="dialog" class="ma-0 pa-0" min-width="400" max-width="30%" content-class="dialog">
      <v-card class="ma-0 pa-10 py-12 align-center justify-center">
        <v-card-title class="ma-0 pa-0 align-center justify-center">
          <p class="ma-0 pa-0 dialog-title">
            Citas
          </p>
        </v-card-title>

        <v-card-text class="ma-0 pa-0 mt-10 align-center justify-center">
          <p class="dialog-message align-center justify-center" align="center" justify="center">
            {{ dialogMessage }}
          </p>
        </v-card-text>

        <v-card-actions class="ma-0 pa-0 mt-10 align-center justify-center">
          <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="dialog = false">
            <p class="ma-0 pa-0 dialog-btn-text">
              Cerrar
            </p>
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
      value: new Date().toISOString().substr(0, 10),
      events: [],
      dialog: false,
      dialogMessage: '',
      mode: 'stack',
      departamento_data: []
    }
  },
  watch: {
    citasPasadas: {
      immediate: true,
      handler (newCitas) {
        this.getEvents(newCitas)
      }
    }
  },
  created () {
    this.getEvents()
  },
  methods: {
    getEvents (citas) {
      this.events = []

      if (citas) {
        citas.forEach((cita) => {
          const startDate = new Date(cita.fecha + 'T' + cita.hora)
          const endDate = new Date(startDate.getTime() + (60 * 60 * 1000))

          this.events.push({
            name: cita.departamentoName,
            start: startDate,
            end: endDate,
            color: '#0053a5dc',
            timed: true
          })
        })
      }
    },
    getEventColor (event) {
      return event.color
    },
    getCurrentMonth () {
      const currentDate = new Date(this.value)
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      const monthName = months[currentDate.getMonth()]
      const year = currentDate.getFullYear()

      return `${monthName} ${year}`
    },
    showDialog (clickedDate) {
      if (clickedDate && clickedDate.date) {
        const formattedDate = clickedDate.date

        const cita = this.citasPasadas.find(cita => cita.fecha === formattedDate)

        if (cita !== undefined) {
          const formattedTime = cita.hora

          this.dialogMessage = `Cita en ${cita.departamentoName} el ${formattedDate} a las ${formattedTime}`
        } else {
          this.dialogMessage = 'No hay cita para esta fecha.'
        }
        this.dialog = true
      }
    },
    changeView (view) {
      this.type = view
    },
    prev () {
      const current = new Date(this.value)
      if (this.type === 'month') {
        this.value = new Date(current.setMonth(current.getMonth() - 1)).toISOString().substr(0, 10)
      } else if (this.type === 'week') {
        this.value = new Date(current.setDate(current.getDate() - 7)).toISOString().substr(0, 10)
      } else if (this.type === 'day') {
        this.value = new Date(current.setDate(current.getDate() - 1)).toISOString().substr(0, 10)
      }
    },
    next () {
      const current = new Date(this.value)
      if (this.type === 'month') {
        this.value = new Date(current.setMonth(current.getMonth() + 1)).toISOString().substr(0, 10)
      } else if (this.type === 'week') {
        this.value = new Date(current.setDate(current.getDate() + 7)).toISOString().substr(0, 10)
      } else if (this.type === 'day') {
        this.value = new Date(current.setDate(current.getDate() + 1)).toISOString().substr(0, 10)
      }
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
  background-color: #0053a5dc !important;
  color: white !important;
  text-align: center;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.v-btn:before {
  background-color: #0053a5dc !important;
}

.calendar {
  min-height: 400px !important;
  width: 90% !important;
}

.v-calendar-weekly__head-weekday, .v-past .v-outside, .v-calendar-daily_head-weekday {
  height: 40px !important;
  border-bottom: 0.5px grey solid;
  align-content: center !important;
  align-items: center !important;
  justify-content: center !important;
}

.v-calendar-weekly__head-weekday, .v-calendar-daily_head-weekday {
  background-color: #0053a5dc !important;
  color: white !important;
  font-size: 20px !important;
}

.v-calendar-weekly__day, .v-past {
  align-content: center !important;
  align-items: center !important;
}

.v-calendar-weekly__day-label span {
  font-size: 15px !important;
}

.v-event-summary, .v-event-summary strong
{
  color: white !important;
}

.dialog {
  border-radius: 50px !important;
}

.dialog-title {
  font-size: 35px !important;
}

.dialog-message {
  font-size: 22px !important;
}

.dialog-btn-text {
  font-size: 22px !important;
  color: white !important;
}
</style>
