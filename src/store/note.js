export default {
  state: {
    notes: [
      {
        id: 1,
        title: 'title -1',
        tasks: [
          {
            text: 'task -- 1',
            status: false
          },
          {
            text: 'task -- 1',
            status: false
          },
          {
            text: 'task -- 1',
            status: true
          }
        ]
      },
      {
        id: 2,
        title: 'title -2',
        tasks: [
          {
            text: 'task -- 1',
            status: false
          },
          {
            text: 'task -- 1',
            status: false
          },
          {
            text: 'task -- 1',
            status: true
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getNotes: state => state.notes,
    getNote: state => id => {
      return state.notes.find(item => String(item.id) === String(id))
    }
  }
}
