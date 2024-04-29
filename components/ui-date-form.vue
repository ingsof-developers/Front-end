<template>
  <v-row>
    <v-row class="ma-0 pa-0 mt-5">
      <v-col>
        <v-row class="ma-0 pa-0">
          <v-menu
            ref="date"
            v-model="date"
            :close-on-content-click="false"
            :return-value.sync="dates"
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
                v-on="on"
              />
            </template>

            <v-date-picker
              v-model="dates"
              no-title
              scrollable
              locale="es"
              header-color="#00468C"
              :min="dates"
            >
              <v-spacer />

              <v-btn text @click="date = false">
                Cancel
              </v-btn>

              <v-btn text @click="$refs.date.save(dates)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>

        <v-row class="ma-0 pa-0 mt-5">
          <v-select
            v-model="schedule"
            :items="schedules"
            rounded
            label="Horario"
            outlined
            required
            :rules="[required]"
          />
        </v-row>

        <v-row class="ma-0 pa-0">
          <v-text-field
            v-model="note"
            type="text"
            rounded
            clearable
            label="Nota"
            outlined
          />
        </v-row>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'SignUp',
  layout: 'ui-login-signup',
  data () {
    return {
      date: false,
      schedule: null,
      note: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: '',
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      schedules: ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm'],
      dates: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
    }
  }
}
</script>
