import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,USER_LOAD,AUTH_ERROR} from './userType'
import axios from 'axios'

export const registerData=(regData)=>{
//    console.log(regData)
    return async dispatch=>{
        try {
            const result=await axios.post("http://localhost:8000/register",regData)
            // console.log()
            const len=result.data.tokens.length;
           // console.log(len)
            const token=result.data.tokens[len-1].token;
           // console.log(token)
            alert("regis")
            console.log(result)
            dispatch({ 
                type:REGISTER_SUCCESS,
                payload:result.data,
                token:token
            })
            localStorage.setItem("jwtToken",token);
            dispatch(userlogedAction())
        } catch (error) {
            dispatch({
                type:REGISTER_FAIL,
                payload:error.message
            })
        }
    }
}
//login
export const loginData=(logData)=>{
    return async dispatch=>{
        try {
            const result=await axios.post("/login",logData)
            // console.log(result)
            const len=result.data.tokens.length;
            // console.log(len)
             const token=result.data.tokens[len-1].token;
            // console.log(token)
            dispatch({ 
                type:LOGIN_SUCCESS,
                payload:result.data,
                token:token
            })
            localStorage.setItem("jwtToken",token);
            dispatch(userlogedAction())
        } catch (error) {
            dispatch({
                type:LOGIN_FAIL,
                payload:error.message
            })
        }
    }
}
//userloged
export const userlogedAction=()=>{
    //  alert("userloaded")
    return async dispatch=>{
        try {
            const result=await axios.get('/userloged')
        dispatch({
            type:USER_LOAD,
            payload:result.data
        })
        } catch (error) {
            dispatch({
                type:AUTH_ERROR
            })
        }
        
    }
}
//LOGUT
export const logoutAction=()=>{
    return async dispatch=>{
            await axios.get('http://localhost:8000/logout')
            localStorage.removeItem("jwtToken");
            dispatch(userlogedAction())
            dispatch({
                type:LOGOUT_SUCCESS
            })
    }
}
