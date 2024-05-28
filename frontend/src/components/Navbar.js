import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
    <div className="container mx-auto flex justify-between">
      <div className="flex space-x-4">
        <a href="/form" className="text-lg font-semibold hover:text-gray-300">Form</a>
        <a href="/dashboardus" className="text-lg font-semibold hover:text-gray-300">Dashboard US</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar