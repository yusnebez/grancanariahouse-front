import { NavLink, useNavigate } from 'react-router-dom'
import bglogo from '../asset/Villalogo.png'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useState} from 'react'

export const Nav = () => {
    
    const [nav, setNav] =  useState(false) 
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate()
    const handleNavigate = () => navigate('/Login')
    
    console.log(nav)
    
  return (
    <div className='w-full h-[70px] bg-white  z-10 '>
        <div className='hidden mt-2 mb-1 text-center md:grid-cols-2 md:grid'>
            <ul className=''>
                <li className='hover:border-b-2 border-b-black'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='hover:border-b-2 border-b-black'>
                    <NavLink to='/holidayrental'>Holiday Rental</NavLink>
                </li>
                <li className='hover:border-b-2 border-b-black'>
                    <NavLink to='/longtermrental'>Long Term</NavLink>
                </li>
                <li className='hover:border-b-2 border-b-black'>
                    <NavLink to='/sales'>Sales</NavLink> 
                </li>
                <li className='hover:border-b-2 border-b-black'>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <button className='' onClick={handleNavigate}>Login</button> 
                </li>
                </ul>
        </div>  
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>} 
            </div>
        <ul onClick={handleClick} className={!nav ? 'hidden': 'absolute w-full px-8 bg-zinc-200 md:hidden '}>
            <li className='w-full border-b-2 border-zinc-300 hover:text-blue-500'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='w-full border-b-2 border-zinc-300 hover:text-blue-500'>
                <NavLink to='/holidayrental'>Holiday Rental</NavLink>
            </li>
            <li className='w-full border-b-2 border-zinc-300 hover:text-blue-500'>
                <NavLink to='/longtermrental'>Long Term</NavLink>
            </li>
            <li className='w-full border-b-2 border-zinc-300 hover:text-blue-500'>
                <NavLink to='/sales'>Sales</NavLink> 
            </li>
            <li className='w-full border-b-2 border-zinc-300 hover:text-blue-500'>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <div className='flex flex-col '>
                <button className='px-8 py-3 mt-3 mb-4' onClick={handleNavigate}>Login</button> 
            </div>
        </ul>
    
    </div>
    
  )
}