import React from 'react'
import {Container,Logo,LogoutBtn} from "../index"
import { Link,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
  const authStatus = useSelector((state)=>state.auth.status )
const navigate  = useNavigate()

const navItem = [
  {
 name:'Home',
slug : "/",
active : true,
  },

  {
 name:'Login',
slug : "/login",
active : !authStatus,
  },
  {
name:'Signup',
slug : "/signup",
active : !authStatus,
  },
  {
name:'All posts',
slug : "/all-posts",
active : !authStatus,
  },
  {
name:'Add Posts',
slug : "/add-posts",
active : !authStatus,
  },
]
  return (
   <header className='bg-gray-800 shadow-md py-4'>

    <Container className = "flex items-center justify-between">
      <nav className='flex'>
        <div className='mr-4'>
<Link to ="/" className='flex items-center'>
<Logo width = "70px"/>
</Link>
        </div>
        <ul className='flex space-x-4 '>
          
          {navItem.map((item)=>
          item.active?(
            <li key = {item.name}>
            <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 rounded-md text-white hover:bg-blue-600 transition"
                  >
                    {item.name}
                  </button>
            </li>
          ) : null
          )}

          {authStatus && (
           <li>
            <LogoutBtn/>
           </li>
          )}
        </ul>
      </nav>
      
      </Container>      

     </header>

  )
}


export default Header