export const namespaced = true

export const state = {
  notifications: []
}

let nextId = 1
export const mutations = {
  PUSH(state, notifications) {
    state.notifications.push({
      ...notifications,
      id: nextId++
    })
  },
  Delete(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}
export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
