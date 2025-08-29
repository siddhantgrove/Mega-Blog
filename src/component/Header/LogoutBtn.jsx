import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth"
import {logout} from "../../store/AuthSlice"
function LogoutBtn() {
    const dispatch = useDispatch()
        const logoutHandler = ()=>{
            authService.logout().then(()=>{
                dispatch(logout())
      })
        }

  return (
   <button className='inline-block px-6 py-4
   duration-200 hover:bg-blue-400
    rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn