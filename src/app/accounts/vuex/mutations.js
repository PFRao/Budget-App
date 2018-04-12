import { guid } from '../../../utils'

export default {
  ADD_ACCOUNT (state, payload) {
    let id = guid()
    state.account[id] = Object.assign({ id: id }, payload.account)
  }
}
