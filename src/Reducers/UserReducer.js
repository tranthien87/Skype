import {generateUser} from '../static-data';

const UserReducer = (state = generateUser(), action) => {
    return state;
}
export default UserReducer;