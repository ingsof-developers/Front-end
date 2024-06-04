  <!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <v-main class="d-flex justify-center align-center" justify="center" align="center">
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

      <v-sheet width="100%" color="#fcfdff" class="ma-0 pa-0 pa-10" justify="center" align="center" style="display: flex !important; align-content: center !important; justify-content: center !important;">
        <div class="pa-0 ma-0 d-flex align-center flex-column justify-center" justify="center" align="center">
          <v-card class="d-flex flex-column px-10 py-10 justify-center" width="550" rounded="xxl" color="#eff7fe" justify="center" align="center">
            <v-card-title justify="center" align="center" class="mt-10">
              <v-row class="ma-0 pa-0" style="width: 100%; font-size: 40px; font-weight: 600;" justify="center" align="center">
                Registro de Encargados
              </v-row>
            </v-card-title>

            <v-card-text class="mt-16">
              <v-form ref="form" v-model="validForm">
                <v-row>
                  <v-text-field v-model="name_user" clearable type="text" rounded label="Nombre" outlined :rules="[required]" />
                </v-row>

                <v-row>
                  <v-text-field v-model="last_name_user" clearable type="text" rounded label="Apellido Paterno" outlined :rules="[required]" />
                </v-row>

                <v-row>
                  <v-text-field v-model="maternal_surname_user" clearable type="text" rounded label="Apellido Materno" outlined :rules="[required]" />
                </v-row>

                <v-row>
                  <v-text-field v-model="password_user" clearable type="password" rounded label="Contraseña" outlined :rules="[required, password]" />
                </v-row>

                <v-row>
                  <v-text-field v-model="phone" clearable type="text" rounded label="Teléfono" outlined :rules="[required]" />
                </v-row>
              </v-form>
            </v-card-text>

            <v-card-actions class="ma-0 pa-4">
              <v-row>
                <v-btn block rounded color="#00468C" class="ma-0 pa-6" @click="signup">
                  <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Registrar</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>

          <ui-alert v-if="showAlert" :text="alertText" :color="alertColor" :type="alertType" />
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SignUpGeci',
  data () {
    return {
      name_user: null,
      last_name_user: null,
      maternal_surname_user: null,
      password_user: null,
      phone: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: '',
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      validForm: false
    }
  },
  computed: {
    profile () {
      return this.$store.state.geci_profile
    }
  },
  methods: {
    async signup () {
      this.validForm = this.$refs.form.validate()

      if (this.validForm) {
        try {
          const res = await this.$axios.post('http://localhost:8081/auth/register',
            {
              username: this.name_user,
              lastName: this.last_name_user,
              maternalSurname: this.maternal_surname_user,
              password: this.password_user,
              telefono: this.phone
            })

          console.log('@ Keyla => Res ', res)

          if (res.data.token) {
            this.showAlert = true
            this.alertText = res.data.message
            this.alertColor = '#6CDACE'
            this.alertType = 'success'

            setTimeout(() => {
              this.showAlert = false

              this.$router.push('/')
            }, 3000)
          }
        } catch (err) {
          console.log('@ Keyla => Error ', err)

          this.showAlert = true
          this.alertText = err.response.data.message
          this.alertColor = '#FF9F8E'
          this.alertType = 'warning'

          setTimeout(() => {
            this.showAlert = false
          }, 3000)
        }
      } else {
        this.showAlert = true
        this.alertText = 'Required fields'
        this.alertColor = '#FF9F8E'
        this.alertType = 'warning'

        setTimeout(() => {
          this.showAlert = false
        }, 3000)
      }
    }
  }
}
</script>
