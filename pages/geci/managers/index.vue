<!-- eslint-disable vue/max-attributes-per-line -->
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

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10" align="center">
        <v-row class="ma-0 pa-0 mt-10" justify="center" align="center">
          <p style="font-size: 50px; font-weight: 600;" justify="center" align="center">
            Encargados
          </p>
        </v-row>

        <v-row class="ma-0 pa-0 mt-15" justify="center" align="center">
          <v-data-table :headers="headers_managers" :items="managers" :items-per-page="15" hide-default-footer class="ma-0 pa-0">
            <template #[`item.actions`]="{item}">
              <v-row>
                <v-col class="ma-0 pa-0" cols="6">
                  <v-btn icon color="#ff4f60" @click="deleteManager (item)">
                    <v-icon>mdi-account-minus</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="ma-0 pa-0" cols="6">
                  <v-btn icon color="danger" @click="updateManager (item)">
                    <v-icon>mdi-account-eye</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-row>
      </v-sheet>

      <v-dialog v-model="showDialogDelete" class="ma-0 pa-0" min-width="600px" width="600px" content-class="dialog">
        <v-card class="ma-0 pa-10 py-12 align-center justify-center" align="center" justify="center">
          <v-row class="ma-0 pa-0" align="end" justify="end">
            <span
              class="ma-0 pa-0 mdi mdi-close"
              rounded
              color="transparent"
              elevation="0"
              style="cursor: pointer !important;"
              @click="showDialogDelete = false"
            />
          </v-row>

          <v-card-title class="ma-0 pa-0 align-center align-center justify-center">
            <p class="ma-0 pa-0 dialog-title" style="font-size: 22px;">
              ¿Estás seguro de querer eliminar al encargado?
            </p>
          </v-card-title>

          <v-card-actions class="ma-0 pa-0 mt-10 align-center justify-center">
            <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="deleteManagerCorfirmed ()">
              <p class="ma-0 pa-0 dialog-btn-text">
                Eliminar
              </p>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="showDialogUpdate" class="ma-0 pa-0 px-5" min-width="600px" width="600px" content-class="dialog">
        <v-card class="ma-0 pa-10 py-12 px-16 align-center justify-center" align="center" justify="center">
          <v-row class="ma-0 pa-0" align="end" justify="end">
            <span
              class="ma-0 pa-0 mdi mdi-close"
              rounded
              color="transparent"
              elevation="0"
              style="cursor: pointer !important;"
              @click="showDialogUpdate = false"
            />
          </v-row>

          <v-card-title class="ma-0 pa-0 align-center align-center justify-center">
            <p class="ma-0 pa-0 dialog-title" style="font-size: 22px;">
              Actualizar Encargado
            </p>
          </v-card-title>

          <v-card-text class="ma-0 pa-0 mt-15">
            <v-form ref="formUpdate" v-model="validUpdateManagerForm">
              <v-row>
                <v-text-field v-model="name_update" clearable type="text" rounded label="Nombre" outlined :rules="[required]" />
              </v-row>

              <v-row>
                <v-text-field v-model="last_name_update" clearable type="text" rounded label="Apellido Paterno" outlined :rules="[required]" />
              </v-row>

              <v-row>
                <v-text-field v-model="maternal_surname_update" clearable type="text" rounded label="Apellido Materno" outlined :rules="[required]" />
              </v-row>

              <v-row>
                <v-text-field v-model="password_update" clearable type="password" rounded label="Contraseña" outlined :rules="[required, password]" />
              </v-row>

              <v-row>
                <v-text-field v-model="phone_update" clearable type="text" rounded label="Teléfono" outlined :rules="[required]" />
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions class="ma-0 pa-0 mt-8 align-center justify-center">
            <v-btn class="ma-0 pa-5" rounded color="#00468C" @click="updateManagerConfirmed ()">
              <p class="ma-0 pa-0 dialog-btn-text">
                Actualizar
              </p>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'GeciManagers',
  data () {
    return {
      headers_managers: [
        { text: 'Nombre', value: 'name', align: 'center', sortable: true },
        { text: 'Apellido Paterno', value: 'last_name', align: 'center', sortable: true },
        { text: 'Apellido Materno', value: 'maternal_surname', align: 'center', sortable: true },
        { text: 'Email', value: 'email', align: 'center', sortable: false },
        { text: 'Teléfono', value: 'phone', align: 'center', sortable: false },
        { text: 'Contraseña', value: 'password', align: 'center', sortable: false },
        { text: 'Acciones', value: 'actions', align: 'center', sortable: false }
      ],
      managers: [
        { name: 'x', last_name: 'x', maternal_surname: 'x', email: 'x', phone: 'x', password: 'x' },
        { name: 'x', last_name: 'x', maternal_surname: 'x', email: 'x', phone: 'x', password: 'x' }
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
