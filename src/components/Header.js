import React from 'react'
import SearchBar from '../assents/Vector.svg'
import Avataar from '../assents/avt.svg'
import Cart from '../assents/cart.svg'
import Heart from '../assents/heart.svg'

function Header() {
  return (
 <div className=' mx-10 flex items-center justify-between'>
    
    {/*logo */}
    <div  className='mt-2 ml-4'>
    <h1>EXCLUSIVE</h1>
    </div>

{/*centre side */}

    <div>
    <ul className='flex gap-4'>
    <li> Home</li>
    <li> about</li>
    <li> sign up</li>
    <li> Home</li>
    </ul>
    </div>

{/*right side */}
    <div className='flex gap-4'>
    
    <div className='mt-4 mr-4 relative'>
     <input className='border-2 bg-slate-300 border-black rounded-md px-7 pl-10 text-black' type='text' placeholder='What are you looking for '/>
     <img src={SearchBar} alt='sb' className='absolute left-3 top-1/2 transform -translate-y-1/2'/>
    </div>
  
        <div className='flex gap-4 items-center'>
        <img src={Heart} alt='heart'/>
        <img src={Avataar} alt='avatar'/>
        <img src={Cart} alt='cart'/>
        </div>

    
    </div>

</div>
  )
}

export default Header