import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      game: {
        name: '',
        sdb: {
          q1: '',
          q2: ''
        },
        salon: {
          q1: '',
          q2: ''
        }
      }
    }),
    mutations: {
      setName(state, name) {
        state.game.name = name
      },
      response(state, payload) {
        if (payload.activity === 'sdb') {
          if (payload.question === 'q1') {
            state.game.sdb.q1 = payload.value
          }
          if (payload.question === 'q2') {
            state.game.sdb.q2 = payload.value
          }
        }
        if (payload.activity === 'salon') {
          if (payload.question === 'q1') {
            state.game.salon.q1 = payload.value
          }
          if (payload.question === 'q2') {
            state.game.salon.q2 = payload.value
          }
        }
      }
    }
  })
}

export default createStore
