<template>
  <v-row>
    <v-row class="ma-0 pa-0 mt-5">
      <v-col>
        <v-row class="ma-0 pa-0">
          <v-menu
            ref="date"
            v-model="date"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dates"
                rounded
                label="Fecha"
                clearable
                style="border: 0.5px solid black !important; border-radius: 50px; height: 56px;"
                v-bind="attrs"
                readonly
                v-on="on"
                @click="date = true"
              />
            </template>

            <v-date-picker
              v-model="dates"
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
            v-model="schedule"
            :items="schedules"
            rounded
            label="Horario"
            outlined
            required
            :rules="[required]"
            @change="emitUpdate"
          />
        </v-row>

        <v-row class="ma-0 pa-0">
          <v-text-field
            v-model="notas"
            type="text"
            rounded
            clearable
            label="Nota"
            outlined
            @input="emitUpdate"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SignUp',
  layout: 'ui-login-signup',
  data () {
    return {
      date: false,
      schedule: null,
      notas: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: '',
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      schedules: ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm'],
      dates: ''
    }
  },
  methods: {
    closeDatePicker () {
      this.date = false
      this.emitUpdate()
    },
    emitUpdate () {
      const formattedDate = moment(this.dates).format('YYYY-MM-DD')
      const formattedTime = moment(this.schedule, 'h:mm a').format('HH:mm:ss')

      this.$emit('update', {
        fecha: formattedDate,
        hora: formattedTime,
        notas: this.notas
      })
    }
  }
}
</script>

<style scoped>

.v-menu__content
{
  border-radius: 50px !important;
}

</style>
