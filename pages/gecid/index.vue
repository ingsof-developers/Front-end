<template>
  <v-app>
    <v-main>
      <v-app-bar height="80" color="#00468C">
        <v-col class="d-flex">
          <router-link to="/gecid" class="ma-0 pa-0">
            <img src="@/assets/logo_2.png" height="60" cover class="ma-0 pa-0 ml-1">
          </router-link>
        </v-col>

        <v-spacer />

        <v-col cols="6">
          <v-row style="justify-content: end !important;" align="center">
            <ui-pop-up :icon="pops[0].icon" :title="pops[0].title" :items="pops[0].items" />

            <ui-pop-up :icon="pops[1].icon" :title="pops[1].title" :items="pops[1].items" />

            <router-link v-for="opcion in opciones" :key="opcion.icon" class="ma-0 pa-0" :to="opcion.path" style="text-decoration: none;">
              <v-col style="color: white !important; width: 50px !important; max-width: 50px !important;">
                <v-icon dark>
                  {{ opcion.icon }}
                </v-icon>
              </v-col>
            </router-link>

            <ui-pop-up :icon="profile.icon" :title="profile.title" :items="profile.items" />
          </v-row>
        </v-col>
      </v-app-bar>

      <v-sheet width="100%" color="#fcfdff" class="d-flex flex-column pa-10">
        <v-col class="pa-0 ma-0">
          <v-row align="center" justify="center">
            <v-col
              cols="6"
              sm="4"
              md="3"
              lg="2"
              align="center"
              justify="center"
            >
              <v-avatar class="mb-4" color="grey darken-1" size="150" align="center" justify="center" />
            </v-col>

            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0">
                <p style="font-size: 35px;">
                  Nombre y Apellidos
                </p>
              </v-row>

              <v-row class="ma-0 pa-0">
                <p style="font-size: 25px;">
                  Correo
                </p>
              </v-row>
            </v-col>
          </v-row>

          <v-divider class="mt-10 mb-14" />

          <v-row class="ma-0 pa-0 mt-16" align="center" justify="center">
            <div style="max-width: 900px; text-align: justify;">
              <p style="font-size: 30px; line-height: 1.6; font-weight: 500;">
                ¡Bienvenido a nuestra plataforma en línea!
              </p>
            </div>
          </v-row>

          <v-row class="ma-0 pa-0 mt-5" align="center" justify="center">
            <div style="max-width: 65%; text-align: justify;">
              <p style="font-size: 24px; line-height: 1.6;">
                Estamos encantados de tenerte aquí. En este espacio dedicado, podrás gestionar fácilmente las citas de estudiantes en diversos departamentos de la Universidad de Guanajuato, desde la asesoría académica hasta la orientación profesional. Desde la comodidad de tu hogar, podrás aprovechar al máximo nuestras soluciones, optimizando así tu tiempo y facilitando tu experiencia universitaria. ¡Esperamos que encuentres todo lo que necesitas para una gestión eficiente y exitosa!
              </p>
            </div>
          </v-row>
        </v-col>
      </v-sheet>
    </v-main>
    <v-row align="center" justify="center">
      <div style="max-width: 900px; text-align: justify;">
        <p style="font-size: 24px; line-height: 1.6;">
          ¡Bienvenido a nuestra plataforma en línea! Estamos encantados de tenerte aquí. En este espacio dedicado, podrás gestionar fácilmente las citas de estudiantes en diversos departamentos de la Universidad de Guanajuato, desde la asesoría académica hasta la orientación profesional. Desde la comodidad de tu hogar, podrás aprovechar al máximo nuestras soluciones, optimizando así tu tiempo y facilitando tu experiencia universitaria. ¡Esperamos que encuentres todo lo que necesitas para una gestión eficiente y exitosa!
        </p>
      </div>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'GECID',
  data () {
    return {
      //
    }
  },
  computed: {
    pops () {
      return this.$store.state.gecid_pops
    },
    opciones () {
      return this.$store.state.gecid_opciones
    },
    profile () {
      return this.$store.state.gecid_profile
    }
  }
}
</script>
