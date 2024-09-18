import React from 'react';

import prog from './Blog.gif'

const Categories = [
    {
      title: "Programming & Tech",
      imgSrc: prog,
    },
    {
      title: "Graphics & Design",
      imgSrc:prog,
    },
    {
      title: "Digital Marketing",
      imgSrc:prog,
    },
    {
      title: "Writing & Translation",
      imgSrc:prog,
    },
    {
      title: "Video & Animation",
      imgSrc:prog,
    },
    {
      title: "AI Services",
      imgSrc:prog,
    },
    {
      title: "Music & Audio",
      imgSrc:prog,
    },
    {
      title: "Business",
      imgSrc:
        prog,
    },
    {
      title: "Consulting",
      imgSrc:prog,
    },
  ];

function Blogs() {
  return (
    <div className='h-100vh bg-black'>
   <h2 className='text-transparent mt-10 text-center bg-clip-text bg-gradient-to-br from-white from-30% via-gray-500  to-blue-500 to-40%" text-4xl font-bold mx-auto'>Popular Domains</h2>
    <div className='relative flex overflow-x-hidden  rounded-2xl w-12/12'>
    
     
      <div className='flex flex-row gap-6 p-8 animate-scroll'>
        {Categories.concat(Categories).map((cat, index) => (
          <div key={index} className="w-[190px] h-[154px] bg-gradient-to-br from-[#00ff75] to-[#3700ff] rounded-[20px] transition-all duration-300 hover:shadow-[10px_10px_30px_1px_rgba(0,255,117,0.3)]">
            <div className="w-[190px] h-[154px] bg-black rounded-[10px] shadow-[0px_0px_3px_green,-1px_-1px_8px_gray] transition-transform duration-200 hover:cursor-pointer hover:scale-[1.1] hover:rounded-[20px]">
              <div className='flex justify-center items-center flex-col'>
                <img className='w-12 mt-10' src={cat.imgSrc} alt={cat.title} />
                <h2 className='font-sans font-semibold text-white'>{cat.title}</h2>
              </div>
            </div>
          </div>
        
        ))}
      </div>
      
    </div>
  </div>
  );
}

export default Blogs;
