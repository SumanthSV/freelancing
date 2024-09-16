import React from 'react';

const userlist = [
  {
    "id": 1,
    "projectname": "E-commerce Website Development",
    "projectowner": "Roberta Casas",
    "location": "Spain",
    "status": "Active",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 2,
    "projectname": "Portfolio Website",
    "projectowner": "John Doe",
    "location": "United States",
    "status": "Completed",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 3,
    "projectname": "Mobile App for Fitness",
    "projectowner": "Emily Zhang",
    "location": "China",
    "status": "In Progress",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 4,
    "projectname": "AI Chatbot Development",
    "projectowner": "Ahmed Ali",
    "location": "United Arab Emirates",
    "status": "Active",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 5,
    "projectname": "Graphic Design for Marketing",
    "projectowner": "Maria Rodriguez",
    "location": "Argentina",
    "status": "Pending",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 6,
    "projectname": "Data Analysis Dashboard",
    "projectowner": "Samuel King",
    "location": "Canada",
    "status": "Completed",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 7,
    "projectname": "Digital Marketing Campaign",
    "projectowner": "Fatima Hassan",
    "location": "Egypt",
    "status": "Active",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 8,
    "projectname": "Cybersecurity Audit",
    "projectowner": "Liam Brown",
    "location": "United Kingdom",
    "status": "In Progress",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 9,
    "projectname": "Blockchain Payment System",
    "projectowner": "Sophia Kim",
    "location": "South Korea",
    "status": "Pending",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 10,
    "projectname": "Inventory Management Software",
    "projectowner": "Hans Muller",
    "location": "Germany",
    "status": "Completed",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 11,
    "projectname": "Redesign of UI/UX for Mobile App",
    "projectowner": "Isabella Rossi",
    "location": "Italy",
    "status": "Active",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 12,
    "projectname": "Backend System for Fintech App",
    "projectowner": "Ivan Petrov",
    "location": "Russia",
    "status": "In Progress",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 13,
    "projectname": "Cloud Infrastructure Setup",
    "projectowner": "Mei Ling",
    "location": "Singapore",
    "status": "Active",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 14,
    "projectname": "Product Roadmap Development",
    "projectowner": "Carlos Silva",
    "location": "Brazil",
    "status": "Pending",
    "image": "https://placehold.co/50x50"
  },
  {
    "id": 15,
    "projectname": "VR Game Development",
    "projectowner": "Yuki Tanaka",
    "location": "Japan",
    "status": "Completed",
    "image": "https://placehold.co/50x50"
  }
];



function Project_List() {
  return (
    <div className="bg-gray-100 text-gray-900 mt-16">
      <div className="container mx-auto p-4 w-11/12">
        <h1 className="font-bold mb-6 text-center text-4xl text-blue-600">Projects</h1>
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search for projects"
            className="w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Sort
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>

            <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Filter
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Center the table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full table-fixed text-sm text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3 w-1/12">Sl no.</th>
                <th className="p-3 w-3/12">Project Name</th>
                <th className="p-3 w-2/12">Project Owner</th>
                <th className="p-3 w-2/12">Location</th>
                <th className="p-3 w-2/12 text-center">Status</th>
                <th className="p-3 w-2/12 text-center">Know More</th>
              </tr>
            </thead>
            <tbody>
              {userlist.map((user, index) => {
                const statusColor = user.status === 'Active' ? 'bg-green-500' : 'bg-red-500';

                return (
                  <tr
                    key={index}
                    className="bg-white hover:bg-gray-100 shadow-sm shadow-black  transition-all duration-200 ease-in-out rounded-lg  mb-4 border-l-4 border-transparent hover:border-blue-500"
                  >
                    <td className="p-3 text-center">{index + 1}</td>
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={user.image}
                        alt={user.projectowner}
                        className="rounded-full w-10 h-10 border border-gray-300"
                      />
                      <span className="font-semibold">{user.projectname}</span>
                    </td>
                    <td className="p-3">{user.projectowner}</td>
                    <td className="p-3">{user.location}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-md font-semibold text-white ${statusColor}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button className="px-4 py-2 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 shadow-md transition-all">
                        Know more
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Project_List;


