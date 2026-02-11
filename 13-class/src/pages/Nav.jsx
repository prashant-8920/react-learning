import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>

        <NavLink 
            to='/' 
            style={({ isActive  })=>
            ({
                color : isActive ? 'red' :'white'
            })
            }
        >
            Home
        </NavLink>

        <NavLink 
            to='/about'
            style={({ isActive  })=>
            ({
                color : isActive ? 'red' :'white'
            })
            } 
        >
            about
        </NavLink>

        <NavLink 
            to='/courses'
            style={({ isActive  })=>
            ({
                color : isActive ? 'red' :'white'
            })
            } 
        >
            courses
        </NavLink>
      
      
    </div>
  )
}

export default Nav
