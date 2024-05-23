import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <div className='mt-5 text-center'>
                <h1 className='text-3xl font-mono font-bold text-red-500'>Login</h1>
            </div>
            <form className='mt-5 flex justify-center' action="">
                <ul>
                    <div>
                        <label htmlFor="">Email</label>
                        <input className='pl-2 border border-black mt-3 ml-[8.8rem]' type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input className='pl-2 border border-black mt-3 ml-[7rem]' type="password" />
                    </div>
                </ul>
            </form>
            <div className='justify-center flex'>
                <button className='mt-5 ml-[11.4rem] bg-blue-500 text-white h-[2.5rem] w-[15.7rem] font-bold text-xl'>Submit</button>
            </div>
            <div className='text-center font-bold mt-5'>
                <p>You Don't Have an Account Then Create ? <Link className='text-red-500' to='/'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login