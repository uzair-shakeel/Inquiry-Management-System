// src/pages/Form/Form.js

import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    rollNo: '',
    department: '',
    semester: '',
    file: null,
    fileURL: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFormData({ ...formData, file: file, fileURL: fileURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      fathersName: '',
      rollNo: '',
      department: '',
      semester: '',
      file: null,
      fileURL: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-2xl w-full ">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Student Inquiry Form</h2>
        <div className="mb-6 w-full">
          <label htmlFor="name" className="w-full block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="fathersName" className=" w-full block text-gray-700 font-semibold">Father's Name</label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6  w-full">
          <label htmlFor="rollNo" className="block w-full text-gray-700 font-semibold">Roll No</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="department" className="block w-full text-gray-700 font-semibold">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="semester" className="block w-full text-gray-700 font-semibold">Semester</label>
          <input
            type="text"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="file" className="block w-full text-gray-700 font-semibold">Choose File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
