import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    name: "",
    cnic: "",
    email: "",
    password: "",
    program: "morning",
    section: "A",
    dob: "",
    fathersName: "",
    contact: "",
    address: "",
    batch: "batch1",
    department: "cs-it",
    departmentPrograms: "cs",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Response:", data);
        // Handle success, e.g., redirect or display a success message
      } else {
        console.error("Error:", data);
        // Handle error, e.g., display an error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Signup failed!");
      console.log(formData);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-fade-in-down">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl animate-scale-in">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Student Sign Up
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Student Seat Number*
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Student Name*
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cnic"
              className="block text-sm font-medium text-gray-700"
            >
              Student CNIC*
            </label>
            <input
              type="text"
              id="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Student Email*
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700"
            >
              Program*
            </label>
            <select
              id="program"
              value={formData.program}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700"
            >
              Section*
            </label>
            <select
              id="section"
              value={formData.section}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth*
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="fathersName"
              className="block text-sm font-medium text-gray-700"
            >
              Father Name*
            </label>
            <input
              type="text"
              id="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact No*
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="batch"
              className="block text-sm font-medium text-gray-700"
            >
              Batch
            </label>
            <select
              id="batch"
              value={formData.batch}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="batch1">Batch 1</option>
              <option value="batch2">Batch 2</option>
              <option value="batch3">Batch 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department*
            </label>
            <select
              id="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="cs-it">Department of CS and IT</option>
              <option value="bba">Department of BBA</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="departmentPrograms"
              className="block text-sm font-medium text-gray-700"
            >
              Departments Programs*
            </label>
            <select
              id="departmentPrograms"
              value={formData.departmentPrograms}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="cs">CS</option>
              <option value="it">IT</option>
              <option value="bba">BBA</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md transition duration-300 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <p className="md:col-span-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
