import React from 'react'
import {Link} from 'react-router-dom'
import Blogs from '../Blogs'

const Home =() => {
  return (
    <div>
      <div className='flex w-full justify-center items-center  h-screen'>
      <div className='flex w-full mt-20 flex-col md:flex-row justify-evenly items-center'>
      
        <div className='text-center md:text-left sm:ml-2 lg:ml-32 mb-10 md:mb-0'>
        <h2 className="font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
          Talent Net
        </h2>
        <h3 className="text-xl mt-4 text-gray-700 tracking-wide">
          Talent from around the globe, at your fingertips
        </h3>
        <h4 className="text-2xl font-medium mt-4 text-blue-600">
          Projects done right, <span className="italic">on time</span>...{' '}
        </h4>
          <Link to="/display">
            <button className='p-2 mt-4 bg-green-300 rounded-lg'>Get started</button>
          </Link>
        </div>
        {/* Right Side Image */}
        <div className='w-8/12 sm:w-5/12 md:w-4/12 sm:ml-10'>
          <img src="https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog platform illustration" className='rounded-full'/>
        </div>

      </div>
      
    </div>
    <div>
      <Blogs/> 
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default Home;