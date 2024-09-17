import React from 'react';
import master from '../Basepages/master.png'
const Profile = () => {
  return (
    <div className='p-10 bg-[black]'>
      <body class=" text-gray-800 p-8">
        <div class="container mx-auto p-8 ">
            <div className='flex flex-row items-center justify-end'>
                <h2 className='text-white font-bold text-xl mb-2'>Level : </h2>
            <img className='w-10 ml-2 rounded-full p-1 border border-white' src="https://cdn-icons-png.flaticon.com/128/3270/3270465.png"alt="Master" />
            {/* <h2 className='text-white font-bold text-md mb-2 ml-2'> Master</h2> */}
            </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
<div class='user-info' className=''>
<div class=" rounded-lg p-6 shadow-md text-white -shadow-green-600 col-span-1 border-4 border-green-500">
    <div class="flex items-center mb-4">
      <img src="https://i.pravatar.cc/100" alt="Profile Picture" class="w-16 h-16 rounded-full mr-4"/>
      <h2 class="text-2xl font-bold font-mono">Jese Leos</h2>
    </div>
    <p class="mb-2"> <h1 className='font-bold'>Competence </h1><span className='text-blue-400 font-mono'>Front-end Developer</span></p>
    <p class="mb-2"> <h1 className='font-bold'>Email : </h1> Sumanth@gmail.com</p>
    <p class="mb-2"> <h1 className='font-bold'>Location</h1>Davanagere, Karantaka</p>
    <p class="mb-2"> <h1 className='font-bold'>Ph no : </h1>+91-123456789</p>
    <p class="mb-2"> <h1 className='font-blod' >Ratings : </h1> ⭐⭐⭐⭐⭐</p>

    <div class="flex items-center">
      
    </div>
</div>
</div>
  <div class="bg-black text-white border border-green-400 rounded-lg p-6 shadow-md shadow-black col-span-3">
    <h2 class="text-2xl font-bold mb-4 font-mono">General information</h2>
    <h3 class="text-xl font-bold mb-2">About me</h3>
    <p class="mb-4 font-sans italic">I am a dynamic and forward-thinking programmer with a strong commitment to staying updated with the latest trends and technologies. My approach is characterized by a deep understanding of fundamental concepts and a passion for continuous learning.</p>
    <p class="mb-4 font-sans italic">I strive to leverage my skills and knowledge to tackle complex challenges and contribute to innovative projects. By staying current with industry advancements, I aim to deliver impactful solutions and drive progress in the ever-evolving tech landscape.</p>
   
   <div className='flex flex-row justify-around mt-2'>

  
   <div className='border border-white rounded-md p-2 shadow-lg shadow-gray-500'>
    <h3 class="text-xl font-bold mb-2 text-center">Education</h3>
    <p class="mb-2">Thomas Jeff High School, Stanford University</p>
    <p class="mb-2">Join Date: 12-09-2021</p>
    <p class="mb-2">Organization: Themesberg LLC</p>
    <p class="mb-2">Department: Marketing</p>
   </div>
   {/* <div className='border border-white rounded-md p-2 shadow-lg shadow-gray-500'>
    <h3 class="text-xl font-bold mb-2 text-center">Education</h3>
    <p class="mb-2">Thomas Jeff High School, Stanford University</p>
    <p class="mb-2">Join Date: 12-09-2021</p>
    <p class="mb-2">Organization: Themesberg LLC</p>
    <p class="mb-2">Department: Marketing</p>
   </div> */}
    </div> 
  </div>
</div>
          <div class="bg-black rounded-lg p-6 mt-8 shadow-md shadow-black border border-green-400">
            <h2 class="text-2xl font-bold mb-4 text-white">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Brand Design</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Logo Design</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Mobile App Design</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">UI Design</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">React Developer</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Wordpress</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Sketch</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Figma</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Prototyping</button>
              <button class="bg-green-700 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Database</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="bg-black rounded-lg p-6 max-h-96 shadow-md shadow-black ">
                <h2 class="text-2xl font-bold mb-4 text-white ">Previous Projects</h2>
                <div class="overflow-y-auto h-64 grid grid-cols-1 scrollbar-hidden gap-4">
                      <div class="bg-slate-600 text-white font-semibold flex justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">1. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">2. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">3. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">4. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">5. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">6. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">7. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">8. Football</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                    </div>
              </div>
              <div class="bg-black rounded-lg p-6 max-h-96 shadow-md  shadow-black text-white border border-green-400">
                  <h2 class="text-2xl font-bold mb-4">Top Testimonials</h2>
                  <div className='h-64 overflow-y-auto '>

                 
                  <div  className='mt-2 mb-4'>
                    <h3 className='font-semibold font-mono'>🔵 Username</h3>
                    <p className='font-sans '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt saepe ipsa eligendi, tempore error eius voluptatem, obcaecati natus voluptates iste odio non veniam voluptate! Incidunt!</p>
                  </div>
                    <hr />
                  <div className='mt-2 mb-4'>
                    <h3 className='font-semibold font-mono'>🔵 Username</h3>
                    <p className='font-sans '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt saepe ipsa eligendi, tempore error eius voluptatem, obcaecati natus voluptates iste odio non veniam voluptate! Incidunt!</p>
                  </div>
                  <hr />
                  <div  className='mt-2 mb-4'>
                    <h3 className='font-semibold font-mono'>🔵 Username</h3>
                    <p className='font-sans '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt saepe ipsa eligendi, tempore error eius voluptatem, obcaecati natus voluptates iste odio non veniam voluptate! Incidunt!</p>
                  </div>
                  <hr />
                  <div  className='mt-2 mb-4'>
                    <h3 className='font-semibold font-mono'>🔵 Username</h3>
                    <p className='font-sans '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt saepe ipsa eligendi, tempore error eius voluptatem, obcaecati natus voluptates iste odio non veniam voluptate! Incidunt!</p>
                  </div>
                  </div>
                  
              </div>
            </div>
            <div class="bg-gray-900 rounded-lg p-6 mt-8 shadow-md shadow-black text-white">
                <h2 class="text-2xl font-bold mb-4">Skills</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Figma</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Vue</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Php</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Marketing</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">HTML</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "80%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Product Design</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "95%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">React</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "88%"}}></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="font-bold mr-4">Angular</p>
                        <div class="w-full bg-gray-300 rounded-full h-2">
                            <div class="bg-blue-500 rounded-full h-2" style={{width: "70%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </div>
    
  );
};

export default Profile;
