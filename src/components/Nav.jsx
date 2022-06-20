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
    <div className=' w-full h-[80px]  bg-white  z-10 '>
        <div className='flex items-center justify-between w-full h-full px-2 ' >
             <div className='flex items-center justify-between w-full h-full '>
                
                <img className='mr-4 w-[150px] h-[80px]  sm:bg-contain' src={bglogo}/>
                <ul className='hidden md:flex'>
                    <li className='flex pb-1 mb-1 ml-4 hover:border-b-2 border-b-black '>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='flex pb-1 mb-1 ml-4 hover:border-b-2 border-b-black'>
                        <NavLink to='/holidayrental'>Holiday Rental</NavLink>
                    </li>
                    <li className='flex pb-1 mb-1 ml-4 hover:border-b-2 border-b-black'>
                        <NavLink to='/longtermrental'>Long Term</NavLink>
                    </li>
                    <li className='flex pb-1 mb-1 ml-4 hover:border-b-2 border-b-black'>
                        <NavLink to='/sales'>Sales</NavLink> 
                    </li>
                    <li className='flex pb-1 mb-1 ml-4 hover:border-b-2 border-b-black'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <div className='hidden pr-4 md:flex'>
                    <button className='px-5 py-2 mr-4' onClick={handleNavigate}>Login</button> 
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {true ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                </div>    
            </div>
        </div>
        <ul className={!nav ? 'hidden': 'absolute w-full px-8 bg-zinc-200 md:hidden '}>
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