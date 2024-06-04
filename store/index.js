// store/index.js
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const state = () => ({
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
    { icon: 'mdi-notebook', path: '/gecia/datebook' },
    { icon: 'mdi-history', path: '/gecia/history' }
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
    { icon: 'mdi-notebook', path: '/gecid/datebook' },
    { icon: 'mdi-history', path: '/gecid/history' }
  ],
  gecid_profile: {
    icon: 'mdi-account',
    title: 'Perfil',
    items: [
      { color: 'grey darken-1', message: 'Perfil', path: '/gecid/profile' },
      { color: 'grey darken-1', message: 'Log Out', path: '/' }
    ]
  },
  geci_profile: {
    icon: 'mdi-account',
    title: 'Perfil',
    items: [
      { color: 'grey darken-1', message: 'Log Out', path: '/' }
    ]
  }
})

export const mutations = {}

export const actions = {}
