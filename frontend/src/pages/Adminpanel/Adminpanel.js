import React, { useState, useEffect } from "react";

const Adminpanel = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/inquiries");
        if (response.ok) {
          const data = await response.json();
          setInquiries(data);
        } else {
          throw new Error("Failed to fetch inquiries");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">
          Inquiry Form
        </h2>
        <div className="flex w-full justify-between gap-6 my-10">
          <div className="p-6 bg-white rounded-lg shadow-md border w-full">
            <h2 className="text-lg font-semibold mb-2">Total Inquiries</h2>
            <p className="text-3xl font-bold text-blue-600">
              {inquiries.length}
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border w-full">
            <h2 className="text-lg font-semibold mb-2">Pending Inquiries</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {inquiries.length}
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border w-full">
            <h2 className="text-lg font-semibold mb-2">Resolved Inquiries</h2>
            <p className="text-3xl font-bold text-green-600">
              {inquiries.filter((data) => data.status === "Resolved").length}
            </p>
          </div>
        </div>
        {inquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  {Object.keys(inquiries[0])
                    .filter(
                      (key) =>
                        key !== "status" &&
                        key !== "_id" &&
                        key !== "createdAt" &&
                        key !== "updatedAt" &&
                        key !== "__v"
                    )
                    .map((key) => (
                      <th
                        key={key}
                        className="py-3 px-4 border-b font-semibold text-blue-600 capitalize"
                      >
                        {key}
                      </th>
                    ))}
                  <th className="py-3 px-4 border-b font-semibold text-blue-600 capitalize">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((formData, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition duration-200 text-center"
                  >
                    {Object.keys(formData)
                      .filter(
                        (key) =>
                          key !== "status" &&
                          key !== "_id" &&
                          key !== "createdAt" &&
                          key !== "updatedAt" &&
                          key !== "__v"
                      )
                      .map((key) => (
                        <td key={key} className="py-3 px-4 border-b">
                          {key === "file" ? (
                            formData[key] ? (
                              <a
                                href={formData.fileURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {formData[key]?.name || "View File"}
                              </a>
                            ) : (
                              "No File"
                            )
                          ) : (
                            formData[key]
                          )}
                        </td>
                      ))}
                    <td className="py-3 px-4 border-b">
                      <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-700">
            No form data submitted yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Adminpanel;
