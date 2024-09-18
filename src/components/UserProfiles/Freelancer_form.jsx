import React, { useState } from 'react';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    competence: '',
    email: '',
    location: '',
    phoneNumber: '',
    aboutMe: '',
    education: '',
    skills: [],
    previousProjects: [],
    workHistory: []
  });

  const [currentSkill, setCurrentSkill] = useState({ name: '', percentage: '' });
  const [currentProject, setCurrentProject] = useState({ name: '' });
  const [currentWork, setCurrentWork] = useState({ jobTitle: '', company: '' });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (currentSkill.name && currentSkill.percentage) {
      setFormData({
        ...formData,
        skills: [...formData.skills, { ...currentSkill }]
      });
      setCurrentSkill({ name: '', percentage: '' });
    }
  };

  const handleAddProject = () => {
    if (currentProject.name) {
      setFormData({
        ...formData,
        previousProjects: [...formData.previousProjects, { ...currentProject }]
      });
      setCurrentProject({ name: '' });
    }
  };

  const handleAddWork = () => {
    if (currentWork.jobTitle && currentWork.company) {
      setFormData({
        ...formData,
        workHistory: [...formData.workHistory, { ...currentWork }]
      });
      setCurrentWork({ jobTitle: '', company: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Add your form submission logic here
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="mt-20 max-w-4xl p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white-400">Create User Profile</h1>
      <form className="space-y-18" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Competence:</label>
                  <input
                    type="text"
                    name="competence"
                    value={formData.competence}
                    onChange={handleChange}
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Phone Number:</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">About Me (50 words):</label>
                  <textarea
                    name="aboutMe"
                    value={formData.aboutMe}
                    onChange={handleChange}
                    maxLength={250}
                    rows="3"
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-white-300">Education (50 words):</label>
                  <textarea
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    maxLength={250}
                    rows="3"
                    className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Skills</h2>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Skill name"
                      value={currentSkill.name}
                      onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
                      className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Percentage"
                      value={currentSkill.percentage}
                      onChange={(e) => setCurrentSkill({ ...currentSkill, percentage: e.target.value })}
                      className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                    Add Skill
                    </button>
                  </div>
                  {formData.skills.length > 0 && (
                    <ul className="space-y-2">
                      {formData.skills.map((skill, index) => (
                        <li key={index} className="p-3 border border-white-600 rounded-lg bg-gray-700">
                          <p><strong>Skill:</strong> {skill.name}</p>
                          <p><strong>Percentage:</strong> {skill.percentage}%</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white-400">Previous Projects</h2>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Project name"
                      value={currentProject.name}
                      onChange={(e) => setCurrentProject({ name: e.target.value })}
                      className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddProject}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Add Project
                    </button>
                  </div>
                  {formData.previousProjects.length > 0 && (
                    <ul className="space-y-2">
                      {formData.previousProjects.map((project, index) => (
                        <li key={index} className="p-3 border border-blue-600 rounded-lg bg-gray-700">
                          <p><strong>Project:</strong> {project.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white-400">Work History</h2>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={currentWork.jobTitle}
                      onChange={(e) => setCurrentWork({ ...currentWork, jobTitle: e.target.value })}
                      className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={currentWork.company}
                      onChange={(e) => setCurrentWork({ ...currentWork, company: e.target.value })}
                      className="p-3 border border-blue-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddWork}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Add Work
                    </button>
                  </div>
                  {formData.workHistory.length > 0 && (
                    <ul className="space-y-2">
                      {formData.workHistory.map((work, index) => (
                        <li key={index} className="p-3 border border-blue-600 rounded-lg bg-gray-700">
                          <p><strong>Job Title:</strong> {work.jobTitle}</p>
                          <p><strong>Company:</strong> {work.company}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
