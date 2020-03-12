import firebase from 'firebase/app'
export default {
  state: {
    noteList: []
  },
  mutations: {
    setList (state, payload) {
      state.noteList = payload
    }
  },
  actions: {
    async NOTE__LOADING ({ commit }) {
      try {
        await firebase.database().ref('/note').on('value', snapshot => {
          commit('setList', snapshot.val())
        })
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async NOTE__ADD ({ commit }, payload) {
      try {
        await firebase.database().ref('/note').push(payload)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async NOTE__DELETE ({ commit }, payload) {
      try {
        await firebase.database().ref('/note').child(payload).remove()
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  },
  getters: {
    getNoteList: state => state.noteList,
    getNote: state => id => state.noteList[id],
    isNoteList: state => state.noteList.lenght > 0
  }
}
