import React from 'react';
import prog from './Blog.gif';


const Categories = [
  { title: "Programming & Tech", imgSrc: prog },
  { title: "Graphics & Design", imgSrc: prog },
  { title: "Digital Marketing", imgSrc: prog },
  { title: "Writing & Translation", imgSrc: prog },
  { title: "Video & Animation", imgSrc: prog },
  { title: "AI Services", imgSrc: prog },
  { title: "Music & Audio", imgSrc: prog },

];

function Blogs() {
  return (
    <div className="h-screen bg-black overflow-hidden">
    <h2 className="text-transparent mt-10 text-center bg-clip-text bg-gradient-to-br from-white via-gray-500 to-blue-500 text-4xl font-bold">
      Popular Domains
    </h2>
    <div className="flex overflow-x-hidden p-1 w-full space-x-4 scroll-animation mt-5">
      {

      
[...Categories, ...Categories].map((cat, index) => (
        <div
          key={index}
          className="relative min-w-[200px] w-3/12 h-[224px] bg-gradient-to-br from-[#00ff75] to-[#3700ff] rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]"
        >
          <div className="absolute inset-0 bg-[#1a1a1a] rounded-[20px] transition-transform duration-200 transform scale-95">
            <div className="flex justify-center items-center flex-col h-full p-4">
              <img className="w-16 mt-10" src={cat.imgSrc} alt={cat.title} />
              <h2 className="font-sans font-semibold text-white">{cat.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div><style jsx>{`
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  
    .scroll-animation {
      display: flex;  
      animation: scroll-left 30s linear infinite;
      width: calc(200%);
    }
  `}</style>
  </div>
  
  
  
  
  );
}

export default Blogs;
