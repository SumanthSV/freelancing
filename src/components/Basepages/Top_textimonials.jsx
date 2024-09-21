import React from "react";

function Top_textimonials() {
  return (
    <div className="bg-black p-10">
      <h2 className="text-3xl mb-14 mt-14 text-transparent font-mono font-extrabold bg-clip-text text-center  bg-gradient-to-b from-white via-gray-400 to-gray-600">Top Testimonials</h2>
    <div className="grid grid-cols-3 gap-4">
      {/* 1 */}
      <div className="bg-black  flex flex-row justify-center items-center">
        <div class=" p-6  justify-center border border-white shadow-[inset_0px_0px_5px_3px_white] rounded-tl-[30px] rounded-bl-[80px]  rounded-br-[30px] w-[17em] h-[22.5em] transition duration-1000 ease-in-out flex flex-col">
          <div class=" w-[4.8em] h-[4.8em] bg-transparent rounded-[15px] m-auto">
          <img src="https://cdn-icons-png.flaticon.com/128/4202/4202832.png" alt="" />
          </div>
          {/* <span class="font-bold text-white text-center block text-lg mt-4">
            About Me
          </span> */}
          <p class="text-white font-normal text-center text-sm m-4">
          TalentNet connected me with top-notch clients, allowing me to grow my freelancing career rapidly. The platform’s intuitive interface and secure payment system made the process seamless and stress-free.
          </p>

          <h2 class=" flex justify-end bg-black text-white font-bold rounded-full transition duration-300 hover:text-white cursor-pointer">
           - Sumanth SV.
          </h2>
        </div>
      </div>
      {/* 2 */}
      <div className="bg-black flex flex-row justify-center items-center">
      <div class=" p-6 justify-center border shadow-[inset_0px_0px_5px_3px_white] border-white rounded-tl-[30px] rounded-bl-[30px]  rounded-br-[30px] w-[17em] h-[22.5em] transition duration-1000 ease-in-out flex flex-col">
          <div class=" w-[4.8em] h-[4.8em] bg-transparent rounded-[15px] m-auto">
          <img src="https://cdn-icons-png.flaticon.com/128/3001/3001758.png" alt="" />
          </div>
          {/* <span class="font-bold text-white text-center block text-lg mt-4">
            About Me
          </span> */}
          <p class="text-white font-normal text-center text-sm m-4">
          As a freelancer, I found TalentNet incredibly easy to use. Its project recommendations were spot-on, helping me secure high-quality gigs that matched my skills perfectly. Highly recommend
          </p>

          <h2 class="mt-1  flex justify-end bg-black text-white font-bold rounded-full transition duration-300  hover:text-white cursor-pointer">
           - Vikas AS.
          </h2>
        </div>
      </div>
      {/* 2 */}
    <div className="bg-black flex flex-row justify-center items-center">
      <div class=" p-6 justify-center shadow-[inset_0px_0px_5px_3px_white] border border-white rounded-tl-[30px] rounded-bl-[30px]  rounded-br-[80px] w-[17em] h-[22.5em] transition duration-1000 ease-in-out flex flex-col">
          <div class=" w-[4.8em] h-[4.8em] bg-transparent rounded-[15px] m-auto">
            <img src="https://cdn-icons-png.flaticon.com/128/4202/4202843.png" alt="" />
          </div>
          {/* <span class="font-bold text-white text-center block text-lg mt-4">
            About Me
          </span> */}
          <p class="text-white font-normal text-center text-sm m-4">
          TalentNet streamlined the entire process of finding freelance work. From showcasing my portfolio to receiving payments, it has been the perfect platform for growing my freelance business with confidence.
          </p>

          <h2 class="mt-1  flex justify-end bg-black text-white font-bold rounded-full transition duration-300  hover:text-white cursor-pointer">
           - Jeevan M.
          </h2>
        </div>
      </div>
      {/* 2 */}
     
     
    
    </div>
    </div>
  );
}

export default Top_textimonials;
