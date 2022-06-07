
import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes'


export const bugAdded = description => {
    return {
        type : BUG_ADDED, 
        payload : {
            description : description, 
            resolved : true
        }
    }
}

export const bugRmoved = id => {
    return {
        type : BUG_REMOVED, 
        payload : {
            id : id
        }
    }
}


export const resolve_bugs = (id) => {
    return {
        type : BUG_RESOLVED, 
        payload : {
            id
        }
    }
}