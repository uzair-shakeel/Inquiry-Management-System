import React, { useState } from 'react';
import Sidebar from '../../components/AdminDashboard/Sidebar';

const Inquiries = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [inquiriesPerPage] = useState(10);  

    const inquiries = [
        { id: 101, name: 'Parmanand Rai', type: 'Teacher', status: 'Pending', date: '01-01-24' },
        { id: 102, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 103, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 104, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 105, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 106, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 107, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 108, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 109, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 110, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 111, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 112, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
        { id: 113, name: 'Noman Ajaz', type: 'Student', status: 'Resolved', date: '02-01-24' },
    ];

    const indexOfLastInquiry = currentPage * inquiriesPerPage;
    const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
    const currentInquiries = inquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-200">
                <h1 className="text-3xl font-bold mb-8">Inquiries Management</h1>

                <div className="flex flex-col md:flex-row md:justify-between md:mb-8">
                    <div className="flex mb-4 md:mb-0">
                        <input type="text" placeholder="Search..." className="p-2 border rounded" />
                        <button className="bg-blue-500 text-white p-2 rounded ml-2">Search</button>
                    </div>
                    <div className="flex">
                        <select className="p-2 border rounded">
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved</option>
                        </select>
                        <button className="bg-blue-500 text-white p-2 rounded ml-2">Filter</button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left">Inquiry ID</th>
                                <th className="py-3 px-6 text-left">Student Name</th>
                                <th className="py-3 px-6 text-left">Type</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentInquiries.map(inquiry => (
                                <tr key={inquiry.id} className="hover:bg-gray-100">
                                    <td className="py-4 px-6">{inquiry.id}</td>
                                    <td className="py-4 px-6">{inquiry.name}</td>
                                    <td className="py-4 px-6">{inquiry.type}</td>
                                    <td className="py-4 px-6">{inquiry.status}</td>
                                    <td className="py-4 px-6">{inquiry.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end mt-8">
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button className="bg-blue-500 text-white p-2 rounded ml-2" onClick={nextPage} disabled={currentInquiries.length < inquiriesPerPage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Inquiries;
