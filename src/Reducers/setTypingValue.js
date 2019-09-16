import {SET_TYPING_VALUE, SEND_MESSAGE} from "../Constants/actionType";

const setTypingValue = (state = '', action) => {
    switch (action.type) {
        case SET_TYPING_VALUE:
        return action.payload;

    case SEND_MESSAGE:
        return "";
        default:
            return state;
    }
}
export default setTypingValue;