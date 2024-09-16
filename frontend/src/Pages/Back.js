import React from 'react'
import { useNavigate } from 'react-router-dom'
const Back = () => {
    const navigate=useNavigate('');
    const buttonclick=()=>{
       navigate('/login')
    }
  return (
    <>
        <div className='text-black justify-center mt-28 flex  font-bold text-6xl'>
            welcome !
            <h1>please login here...</h1>
        </div>
        <div className='justify-center flex mt-8'>
        <button onClick={buttonclick} className='bg-yellow-400 font-bold text-2xl py-2 px-8 rounded-lg text-blue-600 hover:bg-yellow-500 transition duration-150'>login</button>

        </div>

    </>
  )
}

export default Back