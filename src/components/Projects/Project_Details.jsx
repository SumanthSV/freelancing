import React from 'react'

function Project_Details() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-4">
  <div class="bg-gray-100 p-4 border border-gray-300 rounded">
    <h2 class="text-blue-600">Project Name</h2>
    <p>Description</p>
  </div>
  <div class="bg-gray-100 p-4 border border-gray-300 rounded">
    <h2 class="text-blue-600">Skills Required</h2>
    <ul class="list-none p-0 m-0">
      <li class="py-2 border-b border-gray-300">Skill 1</li>
      <li class="py-2 border-b border-gray-300">Skill 2</li>
      <li class="py-2 border-b-0 border-gray-300">Skill 3</li>
    </ul>
  </div>
  <div class="bg-gray-100 p-4 border border-gray-300 rounded">
    <h2 class="text-blue-600">Budget and Country of Origin</h2>
    <p>Budget: $10,000</p>
    <p>Country of Origin: USA</p>
  </div>
  <div class="bg-gray-100 p-4 border border-gray-300 rounded">
    <h2 class="text-blue-600">Lorem Ipsum</h2>
    <p class="text-pink-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="text-green-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
</div>
    </div>
  )
}

export default Project_Details;