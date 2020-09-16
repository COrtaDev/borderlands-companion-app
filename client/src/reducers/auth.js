import { SIGN_IN, LOG_OUT } from '../actions/auth'

const defaultState = { loggedOut: true }

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state,
                token: action.token,
                userId: action.user.id,
                email: action.user.email,
                userName: action.user.username,
                loggedOut: false
            }
        }
        case LOG_OUT: {
            return {
                loggedOut: true
            }
        }

        default:
            return { ...state };
    }
};

export default auth;
