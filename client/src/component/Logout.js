import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userlogedAction, registerData,logoutAction } from '../redux/user/userAction'
const Logout = () => {
    const dispatch=useDispatch();
  
    useEffect(()=>{
        dispatch(logoutAction())
      
    },[])
    return (
        <>
            log
        </>
    )
}

export default Logout
