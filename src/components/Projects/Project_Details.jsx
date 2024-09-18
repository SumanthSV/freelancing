import React from 'react'

function projectDetails() {
  return (
    <div class="bg-gray-900 p-8 min-h-screen">
    <div class="grid grid-cols-2 gap-6 mt-14">
      
      <div class="bg-gray-800 p-6 border border-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 class="text-blue-400 text-2xl font-semibold">Project Name</h2>
        <p class="text-gray-300 mt-4">A brief project description goes here, detailing the main objectives.</p>
      </div>
  
      <div class="bg-gray-800 p-6 border border-green-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 class="text-green-400 text-2xl font-semibold">Skills Required</h2>
        <ul class="list-none p-0 mt-4">
          <li class="py-2 border-b border-gray-600 text-gray-300">Skill 1</li>
          <li class="py-2 border-b border-gray-600 text-gray-300">Skill 2</li>
          <li class="py-2 border-b-0 text-gray-300">Skill 3</li>
        </ul>
      </div>
  
      <div class="bg-gray-800 p-6 border border-yellow-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 class="text-yellow-400 text-2xl font-semibold">Budget and Country of Origin</h2>
        <p class="text-gray-300 mt-4">Budget: <span class="text-yellow-400">$10,000</span></p>
        <p class="text-gray-300">Country of Origin: <span class="text-yellow-400">USA</span></p>
      </div>
  
      <div class="bg-gray-800 p-6 border border-pink-500 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 class="text-pink-400 text-2xl font-semibold">Lorem Ipsum</h2>
        <p class="text-pink-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-green-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    
    </div>
  </div>
  
  )
}

export default projectDetails;