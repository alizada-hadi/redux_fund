import store from './store'

import { projectAdded } from './reducer'

store.dispatch(projectAdded({name : "Django react and redux core project "}))

console.log(store.getState());