import React from 'react';

const DashboardCS = ({ formDataList }) => {
    const csData = formDataList.filter(data => data.department === 'CS');

    const totalInquiries = csData.length;
    const pendingInquiries = csData.filter(data => !data.resolved).length; // Assuming there's a resolved field
    const resolvedInquiries = csData.filter(data => data.resolved).length; // Assuming there's a resolved field

    return (
        <div className="min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">CS Department Inquiries</h2>
                <div className='flex w-full justify-between gap-6 my-10'>
                    <div className="p-6 bg-white rounded-lg shadow-md border w-full">
                        <h2 className="text-lg font-semibold mb-2">Total Inquiries</h2>
                        <p className="text-3xl font-bold text-blue-600">{totalInquiries}</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md border w-full">
                        <h2 className="text-lg font-semibold mb-2">Pending Inquiries</h2>
                        <p className="text-3xl font-bold text-yellow-600">{pendingInquiries}</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md border w-full">
                        <h2 className="text-lg font-semibold mb-2">Resolved Inquiries</h2>
                        <p className="text-3xl font-bold text-green-600">{resolvedInquiries}</p>
                    </div>
                </div>
                {csData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    {Object.keys(csData[0]).map((key) => (
                                        <th key={key} className="py-3 px-4 border-b font-semibold text-blue-600 capitalize">{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {csData.map((formData, index) => (
                                    <tr key={index} className="hover:bg-gray-100 transition duration-200 text-center">
                                        {Object.keys(formData).map((key) => (
                                            <td key={key} className="py-3 px-4 border-b">
                                                {key === 'file' ? (
                                                    <a href={formData.fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        {formData[key]?.name}
                                                    </a>
                                                ) : (
                                                    formData[key]
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-700">No form data submitted yet.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardCS;
