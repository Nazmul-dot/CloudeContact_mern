import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_LOAD, AUTH_ERROR } from './userType'

const intialuserDATA = {
    token: localStorage.getItem("token"),
    user: '',
    isAuthantication: false,
    error: '',
    loading: true,
    reglog:false
}

const userReducer = (state = intialuserDATA, action) => {
    switch (action.type) {
        case USER_LOAD:
            // alert('reducer')
            return {
                ...state,
                isAuthantication: true,
                user: action.payload,
                loading: false,
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // alert('reducer regis')
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user:action.payload,
                isAuthenticated: true,
                loading: false,
                reglog:true
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            // alert(action.type)
            
            return {
                ...state,
                token: null,
                isAuthantication: false,
                loading: false,
                user: null,
                error: action.payload
            };
            default:
                return state;

    }
}
export default userReducer;