import {actions} from '../reducer/reducer';

export function editUserInfo(newInfo){
    return {type: actions.EDIT_USER_INFO, payload: newInfo}
}

export function delUser(id){
    return {type: actions.DELETE_USER, payload: id}
}

export function addUser(newUser, id){
    return{type:actions.ADD_USER, payload: {newUser, id}}
}
