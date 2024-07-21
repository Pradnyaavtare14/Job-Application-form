import { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    jobs: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    totalExperience: '',
    currentCTC: '',
    currentCTCRate: '',
    expectedCTC: '',
    expectedCTCRate: '',
    currentLocation: '',
    noticePeriod: '',
    status: 'applied',
    applicationSource: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Add Job Application</h2>
      <form onSubmit={handleSubmit}>
        <h1 className='mb-4'>Create New</h1>
        <hr className='mb-7' />
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Jobs<sup className="text-red-500">*</sup>
              </label>
              <select
                name="jobs"
                value={formData.jobs}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="" disabled>Select a job</option>
                <option value="job1">Job 1</option>
                <option value="job2">Job 2</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Name<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. John Doe"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. johndoe@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Phone<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 987654321"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Location<sup className="text-red-500">*</sup>
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="" disabled>Select a location</option>
                <option value="location1">Mumbai</option>
                <option value="location2">Delhi</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Total Experience</label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 5 years"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Current CTC</label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="current ctc"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Expected CTC</label>
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="expected ctc"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block mb-2 font-medium">Current CTC Rate</label>
              <select
                name="currentCTCRate"
                value={formData.currentCTCRate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>Select a rate</option>
                <option value="rate1">1</option>
                <option value="rate2">2</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Expected CTC Rate</label>
              <select
                name="expectedCTCRate"
                value={formData.expectedCTCRate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>Select a rate</option>
                <option value="rate1">1 </option>
                <option value="rate2">2 </option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Current Location</label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. California"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Notice Period</label>
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>Select a period</option>
                <option value="period1">Month</option>
                <option value="period2">Year</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="hired">Hired</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Application Source</label>
              <select
                name="applicationSource"
                value={formData.applicationSource}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>Select a source</option>
                <option value="source1">1</option>
                <option value="source2">2</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Cover Letter"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button
            type="Save"
            className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md"
          >
            Save
          </button>
          <button
            type="Save"
            className="px-4 py-2  text-black border font-medium rounded-lg"
          >
            Save & Add More
          </button>
          <button
            type="Save"
            className="px-4 py-2 text-gray-500 font-medium rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
