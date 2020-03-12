import Vue from 'vue'
import Vuex from 'vuex'

import init from '@/store/init'
import noteList from '@/store/noteList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    init,
    noteList
  }
})
