import store from './store'
import { bugAdded, bugRmoved, resolve_bugs } from './actions'
store.dispatch(bugAdded("something cool"))


store.dispatch(resolve_bugs(1))

console.log(store.getState());