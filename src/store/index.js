import Vue from 'vue'
import Vuex from 'vuex'

import note from '@/store/note'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    note
  }
})
