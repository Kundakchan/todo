import firebase from 'firebase/app'
import firebaseConfig from '@/configs/firebase'

export default {
  state: {
    loader: 0
  },
  mutations: {
    upLoader (state) {
      state.loader = ++state.loader
    },
    downLoader (state) {
      state.loader = --state.loader
    }
  },
  actions: {
    async FIREBASE__INIT ({ dispatch, getters }) {
      try {
        await firebase.initializeApp(firebaseConfig)
        if (!getters.isNoteList) dispatch('NOTE__LOADING')
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  },
  getters: {
    getLoader: state => state.loader
  }
}
