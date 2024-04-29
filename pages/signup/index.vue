  <!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-sheet height="90vh" width="100%" color="#fcfdff" class="d-flex flex-column ma-0 pa-0 justify-center">
        <div class="pa-0 ma-0 d-flex flex-column justify-center" justify="center" align="center">
          <v-card class="d-flex flex-column px-10 py-6 justify-center" width="500" rounded="xxl" color="#eff7fe" justify="center" align="center">
            <v-card-title justify="center" align="center" class="mt-10">
              <v-row class="ma-0 pa-0" style="width: 100%; font-size: 40px; font-weight: 600;" justify="center" align="center">
                Sign Up
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
                  <v-text-field v-model="password_user" clearable type="password" rounded label="Password" outlined :rules="[required, password]" />
                </v-row>
              </v-form>
            </v-card-text>

            <v-card-actions class="ma-0 pa-4">
              <v-row>
                <v-btn block rounded color="#00468C" class="ma-0 pa-6" @click="signup">
                  <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Sign Up</span>
                </v-btn>
              </v-row>
            </v-card-actions>

            <v-card-text class="mt-5 mb-10">
              <v-row justify="center" style="font-size: 20px;">
                <span>You have account</span>

                <router-link to="/" class="ml-2" style="color: #575757;">
                  <span>Log-In</span>
                </router-link>
              </v-row>
            </v-card-text>
          </v-card>

          <ui-alert v-if="showAlert" :text="alertText" :color="alertColor" :type="alertType" />
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SignUp',
  layout: 'ui-login-signup',
  data () {
    return {
      name_user: null,
      last_name_user: null,
      maternal_surname_user: null,
      password_user: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: '',
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      validForm: false
    }
  },
  methods: {
    async signup () {
      this.validForm = this.$refs.form.validate()

      if (this.validForm) {
        try {
          const res = await this.$axios.post('http://localhost:8081/auth/register',
            {
              name: this.name_user,
              last_Name: this.last_name_user,
              maternal_Surname: this.maternal_surname_user,
              password: this.password_user
            })

          console.log('@ Keyla => Res ', res)

          if (res.data.token) {
            this.showAlert = true
            this.alertText = res.data.message
            this.alertColor = '#6CDACE'
            this.alertType = 'success'

            this.showNuevo = false

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
