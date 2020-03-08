export default {
  state: {
    notes: [
      {
        id: 1,
        title: 'title',
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
        title: 'title',
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
    getNotes: state => state.notes
  }
}
