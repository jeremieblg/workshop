export default function({ store, redirect }) {
  if (
    !store.state.game.sdb.q1 &&
    !store.state.game.sdb.q2 &&
    !store.state.game.salon.q1 &&
    !store.state.game.salon.q2
  ) {
    return redirect('/')
  }
}
