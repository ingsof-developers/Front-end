<template>
  <v-app>
    <v-main>
      <v-sheet height="100%" width="100%" color="#fcfdff" class="d-flex flex-column pa-10">
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

          <v-divider class="mt-10 mb-15" />

          <v-row class="ma-0 pa-0" justify="center" align="center">
            <p style="font-size: 25px; letter-spacing: 1px;">
              DEPARTAMENTOS
            </p>
          </v-row>

          <v-row class="ma-0 pa-0 mt-5" justify="center" align="center">
            <v-col v-for="departamento in departamentos" :key="departamento.name" justify="center" align="center">
              <v-card
                class="d-flex flex-column pa-10 justify-center my-5"
                height="200"
                width="200"
                rounded="xxl"
                color="#eff7fe"
                justify="center"
                align="center"
                @click="departamento_seleccionado(departamento)"
              >
                <p style="font-size: 20px;">
                  {{ departamento.name }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import departments from '@/assets/departments.json'

export default {
  name: 'Home',
  layout: 'ui-home',
  data () {
    return {
      departamentos: []
    }
  },
  mounted () {
    this.departamentos = departments
  },
  methods: {
    departamento_seleccionado (departamento) {
      localStorage.setItem('departamento_name', departamento.name)
      this.$router.push({ name: 'departamento' })
    }
  }
}
</script>
