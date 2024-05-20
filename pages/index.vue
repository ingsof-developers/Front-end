  <!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <v-main>
      <v-sheet height="100%" width="100%" class="d-flex flex-column px-10 justify-center" justify="center" align="center">
        <div class="pa-0 ma-0 d-flex flex-column justify-center" justify="center" align="center">
          <v-card class="d-flex flex-column pa-10 justify-center" width="500" rounded="xxl" color="#eff7fe" justify="center" align="center">
            <v-card-title justify="center" align="center" class="mt-10">
              <v-row class="ma-0 pa-0" style="width: 100%; font-size: 40px; font-weight: 600;" justify="center" align="center">
                Log In
              </v-row>
            </v-card-title>

            <v-card-text class="mt-16">
              <v-form ref="form" v-model="validForm">
                <v-row>
                  <v-text-field v-model="email_user" clearable type="email" rounded label="E-mail" outlined :rules="[required, email]" />
                </v-row>

                <v-row>
                  <v-text-field v-model="password_user" clearable type="password" rounded label="Password" outlined :rules="[required, password]" />
                </v-row>
              </v-form>
            </v-card-text>

            <v-card-actions class="ma-0 pa-4">
              <v-row>
                <v-btn block rounded color="#00468C" class="ma-0 pa-6" @click="login">
                  <span class="ma-0 pa-0" style="text-transform: none; color: white; font-size: 18px; font-weight :bold;">Log In</span>
                </v-btn>
              </v-row>
            </v-card-actions>

            <v-card-text class="mt-5 mb-10">
              <v-row justify="center" style="font-size: 20px;">
                <span>If you didn’t have account</span>

                <router-link to="SignUp" class="ml-2" style="color: #575757;">
                  <span>Sign-up</span>
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
  name: 'LogIn',
  layout: 'ui-login-signup',
  data () {
    return {
      email_user: null,
      password_user: null,
      showAlert: false,
      alertText: '',
      alertColor: '',
      alertType: '',
      required: value => !!value || 'Required field',
      password: value => (value && value.length > 5) || 'Password must be more than 5 chars',
      email: value => /.+@.+\..+/.test(value) || 'Invalid email',
      validForm: false
    }
  },
  methods: {
    async login () {
      this.validForm = this.$refs.form.validate()

      if (this.validForm) {
        try {
          const res = await this.$axios.post('http://localhost:8081/auth/login',
            {
              email: this.email_user,
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

              this.$router.push('/gecia')
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
