import { SET_ACTIVE_USER_ID} from "../Constants/actionType";
import {SET_TYPING_VALUE} from "../Constants/actionType";
import {SEND_MESSAGE} from "../Constants/actionType";
export const setActiveUserId = (id) => {
return {
    type: SET_ACTIVE_USER_ID,
    payload: id
}
}

export const setTypingValue = (value) => {
    return {
        type: SET_TYPING_VALUE,
        payload: value
    }
}
export const sendMessage= (message, userId) => {
    return {
        type: SEND_MESSAGE,
        payload: {
          message,
          userId
        }
      }
}
