<!-- eslint-disable vue/max-attributes-per-line -->
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
        @click:event="showDialog"
      />
    </v-sheet>

    <v-dialog v-model="dialog" class="ma-0 pa-0" min-width="750px" width="750px" content-class="dialog">
      <v-card class="ma-0 pa-10 py-12 align-center justify-center">
        <v-row class="ma-0 pa-0" align="end" justify="end">
          <span
            class="ma-0 pa-0 mdi mdi-close"
            rounded
            color="transparent"
            elevation="0"
            style="cursor: pointer !important;"
            @click="dialog = false"
          />
        </v-row>

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

        <v-card-actions class="ma-0 pa-0 mt-14 align-center justify-center">
          <v-col class="ma-0 pa-0">
            <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="updateDate ()">
              <p class="ma-0 pa-0 dialog-btn-text">
                Reprogramar Cita
              </p>
            </v-btn>
          </v-col>

          <v-spacer />

          <v-col class="ma-0 pa-0">
            <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="deleteDate ()">
              <p class="ma-0 pa-0 dialog-btn-text">
                Cancelar Cita
              </p>
            </v-btn>
          </v-col>

          <v-spacer />

          <v-col class="ma-0 pa-0">
            <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="dateFinish ()">
              <p class="ma-0 pa-0 dialog-btn-text">
                Gestionar cita
              </p>
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCancel" class="ma-0 pa-0" min-width="500px" width="500px" content-class="dialog">
      <v-card class="ma-0 pa-10 py-12 align-center justify-center" align="center" justify="center">
        <v-row class="ma-0 pa-0" align="end" justify="end">
          <span
            class="ma-0 pa-0 mdi mdi-close"
            rounded
            color="transparent"
            elevation="0"
            style="cursor: pointer !important;"
            @click="dialogCancel = false"
          />
        </v-row>

        <v-card-title class="ma-0 pa-0 align-center align-center justify-center">
          <p class="ma-0 pa-0 dialog-title" style="font-size: 22px;">
            ¿Estás seguro de querer cancelar tu cita?
          </p>
        </v-card-title>

        <v-card-actions class="ma-0 pa-0 mt-10 align-center justify-center">
          <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="deleteDateConfirmed ()">
            <p class="ma-0 pa-0 dialog-btn-text">
              Cancelar Cita
            </p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogUpdate" class="ma-0 pa-0" min-width="500px" width="500px" content-class="dialog">
      <v-card class="ma-0 pa-10 py-12 align-center justify-center" align="center" justify="center">
        <v-row class="ma-0 pa-0" align="end" justify="end">
          <span
            class="ma-0 pa-0 mdi mdi-close"
            rounded
            color="transparent"
            elevation="0"
            style="cursor: pointer !important;"
            @click="dialogUpdate = false"
          />
        </v-row>

        <v-card-title class="ma-0 pa-0 align-center align-center justify-center">
          <p class="ma-0 pa-0 dialog-title" style="font-size: 22px;">
            Reprogramar Cita
          </p>
        </v-card-title>

        <v-card-text class="ma-0 pa-0 mt-15">
          <v-form ref="updateForm" v-model="validUpdateForm">
            <v-row class="ma-0 pa-0">
              <v-menu
                ref="date_update"
                v-model="dates_update"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_update"
                    rounded
                    label="Fecha"
                    clearable
                    style="border: 0.5px solid black !important; border-radius: 50px; height: 56px;"
                    v-bind="attrs"
                    readonly
                    v-on="on"
                    @click="dates_update = true"
                  />
                </template>

                <v-date-picker
                  v-model="date_update"
                  no-title
                  scrollable
                  locale="es"
                  header-color="#00468C"
                  @input="closeDatePicker"
                />
              </v-menu>
            </v-row>

            <v-row class="ma-0 pa-0 mt-8">
              <v-select
                v-model="schedule_update"
                :items="schedules_update"
                rounded
                label="Horario"
                outlined
                required
                :rules="[required]"
                @change="emitUpdate"
              />
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="ma-0 pa-0 mt-8 align-center justify-center">
          <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="updateDateConfirmed ()">
            <p class="ma-0 pa-0 dialog-btn-text">
              Reprogramar
            </p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogFinish" class="ma-0 pa-0" min-width="500px" width="500px" content-class="dialog">
      <v-card class="ma-0 pa-10 py-12 align-center justify-center" align="center" justify="center">
        <v-row class="ma-0 pa-0" align="end" justify="end">
          <span
            class="ma-0 pa-0 mdi mdi-close"
            rounded
            color="transparent"
            elevation="0"
            style="cursor: pointer !important;"
            @click="dialogFinish = false"
          />
        </v-row>

        <v-card-title class="ma-0 pa-0 align-center align-center justify-center">
          <p class="ma-0 pa-0 dialog-title" style="font-size: 22px;">
            Gestión de cita
          </p>
        </v-card-title>

        <v-card-text class="ma-0 pa-0 mt-15">
          <v-form ref="updateForm" v-model="validFinishForm">
            <v-row>
              <v-text-field v-model="reason_finish" clearable type="text" rounded label="Motivo" outlined :rules="[required]" />
            </v-row>

            <v-row>
              <v-text-field v-model="mood_finish" clearable type="text" rounded label="Estado anínimo" outlined :rules="[required]" />
            </v-row>

            <v-row>
              <v-text-field v-model="progress_finish" clearable type="text" rounded label="Avances" outlined :rules="[required]" />
            </v-row>

            <v-row>
              <v-text-field v-model="techniques_finish" clearable type="text" rounded label="Técnicas" outlined :rules="[required]" />
            </v-row>

            <v-row>
              <v-text-field v-model="observations_finish" clearable type="text" rounded label="Observaciones" outlined :rules="[required]" />
            </v-row>

            <v-row>
              <v-text-field v-model="activities_finish" clearable type="text" rounded label="Actividades" outlined :rules="[required]" />
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="ma-0 pa-0 mt-8 align-center justify-center">
          <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="dateFinishConfirmed ()">
            <p class="ma-0 pa-0 dialog-btn-text">
              Finalizar Sesión
            </p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'

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
      departamento_data: [],
      dialogCancel: false,
      dialogUpdate: false,
      validUpdateForm: false,
      dates_update: false,
      date_update: '',
      dialogFinish: false,
      validFinishForm: false,
      reason_finish: '',
      mood_finish: '',
      progress_finish: '',
      techniques_finish: '',
      observations_finish: '',
      activities_finish: '',
      schedule_update: null,
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      schedules_update: ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm']
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
    showDialog (clickedEvent) {
      const event = clickedEvent.event

      if (event && event.start && event.name) {
        const formattedDate = event.start.toISOString().substr(0, 10)

        const hours = event.start.getHours().toString().padStart(2, '0')
        const minutes = event.start.getMinutes().toString().padStart(2, '0')
        const formattedTime = `${hours}:${minutes}`

        if (event !== undefined) {
          this.dialogMessage = `Cita en ${event.name} el ${formattedDate} a las ${formattedTime} hrs`
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
    },
    deleteDate () {
      this.dialogCancel = true
    },
    updateDate () {
      this.dialogUpdate = true
    },
    dateFinish () {
      this.dialogFinish = true
    },
    deleteDateConfirmed () {
      //
    },
    updateDateConfirmed () {
      //
    },
    dateFinishConfirmed () {
      //
    },
    closeDatePicker () {
      this.date = false
      this.emitUpdate()
    },
    emitUpdate () {
      const formattedDate = moment(this.dates).format('YYYY-MM-DD')
      const formattedTime = moment(this.schedule, 'h:mm a').format('HH:mm:ss')

      this.$emit('update', {
        fecha: formattedDate,
        hora: formattedTime
      })
    }
  }
}
</script>
