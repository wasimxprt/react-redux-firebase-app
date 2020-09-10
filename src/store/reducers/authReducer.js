const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("err ")
            return {
                ...state,
                authError: action.err.message
            };
        case "LOGIN_SUCCESS":
            console.log("SUccess");
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("signout");
            return {
                ...state
            }
        case "SIGNUP_SUCCESS":
            console.log("Signup success")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("Signup error",action)
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;