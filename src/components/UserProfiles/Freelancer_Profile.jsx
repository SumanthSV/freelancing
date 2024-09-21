import React from 'react';


const items = [
  { image: '', title: 'Title 1' },
  { image: '', title: 'Title 2' },
  { image: '', title: 'Title 3' },
  { image: '', title: 'Title 3' },
  { image: '', title: 'Title 3' },
  { image: '', title: 'Title 3' },
  { image: '', title: 'Title 3' },
  // Add more items here...
];

const FreelancerProfile = () => {
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
    <p class="mb-2"> <h1 className='font-bold' >Ratings : </h1> ⭐⭐⭐⭐⭐</p>
    <p className="mb-2">
  <h1 className="font-bold">Hobbies:</h1>
  <ul className=" ml-2 flex flex-wrap gap-4 mt-2">
    <li className=" rounded-md px-2 bg-gray-800 p-1 w-fit">Travelling</li>
    <li className=" rounded-md px-2 bg-gray-800 p-1 w-fit">Reading books</li>
    <li className=" rounded-md px-2 bg-gray-800 p-1 w-fit">Badminton</li>
    <li className=" rounded-md px-2 bg-gray-800 p-1 w-fit">Designing</li>
  </ul>
</p>

    <div class="flex items-center">
      
    </div>
</div>
</div>
  <div class="bg-gradient-to-r from-gray-950 to-[#070005] text-white py-5 px-8 border border-green-400 rounded-lg  shadow-md shadow-black col-span-3">
    
   
   <div className=''>


   <div class="general-info  p-5 text-white">
  <h2 class="text-2xl font-bold">User Bio</h2>

  <div class="about-me p-4 bg-gray-400 bg-opacity-10 mt-4 rounded-md">
    <h3 class="text-lg font-bold mt-0">About Me</h3>
    <p>
      I'm a passionate programmer with a focus on improving skills and goals. 
      I thrive on tackling complex challenges and contributing to Open source aswell. 
      My approach is driven by a strong understanding of fundamental concepts and a continuous desire to learn and grow. 
    </p>
  </div>

  <div class="education p-4 bg-gray-400 bg-opacity-10 mt-5 rounded-md">
    <h3 class="text-lg font-bold mt-0">Education</h3>
    <p class="flex justify-between items-center">
      <span>
        <i class="fas fa-graduation-cap text-yellow-400 mr-2"></i> 
        ⚪Thomas Jeff High School, Stanford University
      </span>
      <span class="flex items-center">
        <i class="fas fa-calendar-alt text-yellow-400 mr-2"></i>
        Join Date: 12-09-2021
      </span>
    </p>

    <p class="mt-1">
      <i class="fas fa-building text-yellow-400 mr-2"></i>
      ⚪Organization: Themesberg LLC
    </p>

    <p class="mt-1">
      <i class="fas fa-user-tie text-yellow-400 mr-2"></i>
      ⚪Department: Marketing
    </p>
  </div>

  <div class="links p-4 bg-gray-400 bg-opacity-10 mt-5 rounded-md">
    <h3 class="text-lg font-bold mt-0">Connect With Me</h3>
    <a href="[your github link]" class="text-yellow-400 hover:text-yellow-500 mt-2">GitHub</a>
    <a href="[your behance link]" class="text-yellow-400 hover:text-yellow-500 ml-5">Behance</a>
  </div>
</div>

  
    </div> 
  </div>
</div>
          <div class="bg-gray-950 rounded-lg p-6 mt-8 shadow-md shadow-black border border-green-400">
            <h2 class="text-2xl font-bold mb-4 text-white">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4  p-5 ">
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Brand Design</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Logo Design</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Mobile App Design</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">UI Design</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">React Developer</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Wordpress</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Sketch</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Figma</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Prototyping</button>
              <button class="bg-fuchsia-700  text-white font-semibold   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4">Database</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="bg-black rounded-lg p-6 max-h-96 shadow-md shadow-black ">
                <h2 class="text-2xl font-bold mb-4 text-white ">Previous Projects</h2>
                <div class="overflow-y-auto h-64 grid grid-cols-1 scrollbar-hidden gap-4">
                      <div class="bg-slate-600 text-white font-semibold flex justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">1. SwiftPay Mobile Wallet</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">2. Pixel Art Generator</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">3. Horizon VR Explorer</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">4. Quantum File Encryptor</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">5. Solaris Health Tracker</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">6. EchoStream Analytics</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">7. Nimbus Task Manager</a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
                      <div class="bg-slate-600 text-white font-semibold flex justify-between hovergraygray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md py-2 px-4"><h2><a className='hover:underline' href="">8. Neon Lights Social Network
                      </a></h2><h3>Ratings : ⭐⭐⭐</h3></div>
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
                <h2 class="text-2xl font-bold mb-4 text-tranparent bg-clip-text">Certifications</h2>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-5">
                  <div className='flex flex-row justify-around gap-2'>

                
                <div className='text-white bg-gray-800 rounded-lg p-2 flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>Certified Ethical Hacker</h2>
                </div><div className='text-white bg-gray-800 rounded-lg p-2 flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>AWS Certified Solutions Architect</h2>
                </div>
                <div className='text-white bg-gray-800 rounded-lg p-3 flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>Project Management Professional</h2>
                </div>
                <div className='text-white bg-gray-800 rounded-lg p-3 text-center flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>Google Data Analytics</h2>
                </div>
                <div className='text-white bg-gray-800 rounded-lg p-3 flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>Certified Information Systems</h2>
                </div>
                <div className='text-white bg-gray-800 rounded-lg p-3 flex flex-col  items-center w-2/12'>
                    <img src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg" alt="" />
                    <h2 className='text-center font-bold mt-2'>Front End development</h2>
                </div>
               
                </div>
               
            </div>
            </div>
        </div>
    </body>
    </div>
    
  );
};

export default FreelancerProfile;
