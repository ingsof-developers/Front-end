<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/geci" class="ma-0 pa-0">
            <img src="@/assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </router-link>
        </v-col>

        <v-spacer />

        <v-col cols="6">
          <v-row style="justify-content: end !important;" align="center">
            <ui-pop-up :icon="profile.icon" :title="profile.title" :items="profile.items" />
          </v-row>
        </v-col>
      </v-app-bar>

      <!-- Sección para mostrar la tabla de alumnos -->
      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10" align="center">
        <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
          <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
            Alumnos del Departamento
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 mt-15" justify="center" align="center">
          <v-data-table :headers="headers_students" :items="studentsFormatted" :items-per-page="15" hide-default-footer class="ma-0 pa-0">
            <!-- Aquí puedes agregar acciones específicas para los alumnos si las necesitas -->
          </v-data-table>
        </v-row>
      </v-sheet>

      <!-- Resto de tu interfaz -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'GeciManagers',
  data () {
    return {
      headers_students: [
        { text: 'Nombre', value: 'name', align: 'center', sortable: true },
        { text: 'Apellido Paterno', value: 'last_name', align: 'center', sortable: true },
        { text: 'Apellido Materno', value: 'maternal_surname', align: 'center', sortable: true },
        { text: 'Teléfono', value: 'phone', align: 'center', sortable: false },
        { text: 'Correo', value: 'email', align: 'center', sortable: false }
      ],
      students: [
        // Aquí debes llenar con los datos de tus alumnos
        // Ejemplo: { name: 'Juan', last_name: 'Perez', maternal_surname: 'Gomez', email: 'juan@example.com', phone: '123456789' },
        // Repite la estructura para cada alumno
        { name: 'Juan', last_name: 'Perez', maternal_surname: 'Gomez', email: 'juan@example.com', phone: '123456789' },
        { name: 'Maria', last_name: 'Garcia', maternal_surname: 'Lopez', email: 'maria@example.com', phone: '987654321' },
        { name: 'Mario', last_name: 'Delgado', maternal_surname: 'Hernández', email: 'mario@gmail.com', phone: '4155664061' }
      ],
      showDialogDelete: false,
      showDialogUpdate: false,
      validUpdateManagerForm: false,
      name_update: '',
      last_name_update: '',
      maternal_surname_update: '',
      password_update: '',
      phone_update: ''
    }
  },
  computed: {
    profile () {
      return this.$store.state.geci_profile
    },
    // Esta propiedad calculada convierte los correos electrónicos a minúsculas antes de mostrarlos en la tabla
    studentsFormatted () {
      return this.students.map((student) => {
        return {
          ...student,
          email: student.email.toLowerCase()
        }
      })
    }
  },
  methods: {
    deleteManager (item) {
      this.showDialogDelete = true
    },
    updateManager (item) {
      this.showDialogUpdate = true
    },
    deleteManagerCorfirmed () {
      //
    },
    updateManagerConfirmed () {
      //
    }
  }
}
</script>
