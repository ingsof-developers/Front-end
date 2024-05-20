// store/index.js
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    pops: [
      {
        icon: 'mdi-bell',
        title: 'Mensajes',
        items: [
          { color: 'grey darken-1', message: 'Mensaje 1', path: '' },
          { color: 'grey darken-1', message: 'Mensaje 2', path: '' },
          { color: 'grey darken-1', message: 'Mensaje 3', path: '' }
        ]
      },
      {
        icon: 'mdi-chat',
        title: 'Notificaciones',
        items: [
          { color: 'grey darken-1', message: 'Notificación 1', path: '' },
          { color: 'grey darken-1', message: 'Notificación 2', path: '' },
          { color: 'grey darken-1', message: 'Notificación 3', path: '' }
        ]
      }
    ],
    opciones: [
      { icon: 'mdi-notebook', path: '' },
      { icon: 'mdi-history', path: '' }
    ],
    profile: {
      icon: 'mdi-account',
      title: 'Perfil',
      items: [
        { color: 'grey darken-1', message: 'Perfil', path: '/gecia/profile' },
        { color: 'grey darken-1', message: 'Log Out', path: '/' }
      ]
    },
    gecid_pops: [
      {
        icon: 'mdi-bell',
        title: 'Mensajes',
        items: [
          { color: 'grey darken-1', message: 'Mensaje 1', path: '' },
          { color: 'grey darken-1', message: 'Mensaje 2', path: '' },
          { color: 'grey darken-1', message: 'Mensaje 3', path: '' }
        ]
      },
      {
        icon: 'mdi-chat',
        title: 'Notificaciones',
        items: [
          { color: 'grey darken-1', message: 'Notificación 1', path: '' },
          { color: 'grey darken-1', message: 'Notificación 2', path: '' },
          { color: 'grey darken-1', message: 'Notificación 3', path: '' }
        ]
      }
    ],
    gecid_opciones: [
      { icon: 'mdi-notebook', path: '' },
      { icon: 'mdi-history', path: '' }
    ],
    gecid_profile: {
      icon: 'mdi-account',
      title: 'Perfil',
      items: [
        { color: 'grey darken-1', message: 'Perfil', path: '/gecid/profile' },
        { color: 'grey darken-1', message: 'Log Out', path: '/' }
      ]
    }
  },
  mutations: {},
  actions: {}
})

export default store
