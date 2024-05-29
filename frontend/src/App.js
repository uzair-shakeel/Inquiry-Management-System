import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Logo from "./assets/logo-design.png";
import emailjs from "emailjs-com";
import DashboardCS from "./pages/DashboardCS/DashboardCS";
import DashboardBBA from "./pages/DashboardBBA/DashboardBBA";
import DashboardEnglish from "./pages/DashboardEnglish/DashboardEnglish";
import DashboardAI from "./pages/DashboardAI/DashboardAI";
import DashboardIT from "./pages/DashboardIT/DashboardIT";
import Adminpanel from "./pages/Adminpanel/Adminpanel";
import Form from "./pages/Form/Form";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { AuthProvider, AuthContext } from "./context/AuthContext"; // Update the import path as necessary
import "./App.css";

const App = () => {
  const [formDataList, setFormDataList] = useState(() => {
    const savedData = localStorage.getItem("formDataList");
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleFormSubmit = (data) => {
    const updatedFormDataList = [...formDataList, data];
    setFormDataList(updatedFormDataList);
    localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
    alert("Inquiry sent successfully");
    sendEmailAlert(data);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formDataList");
    if (savedData) {
      setFormDataList(JSON.parse(savedData));
    }
  }, []);

  const sendEmailAlert = (formData) => {
    const emailParams = {
      from_name: formData.name,
      from_email: "vikramtejani2k3@gmail.com",
      message: `New inquiry submitted by ${
        formData.name
      }\n\nDetails:\n${JSON.stringify(formData, null, 2)}`,
    };

    emailjs
      .send(
        "service_whr4flp",
        "template_r6zq79o",
        emailParams,
        "0rv38QLal2gWRPuD8"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email.", error);
        }
      );
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <ConditionalNavbar />
          <main className="flex-grow p-6">
            <div className="fade-in">
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/form"
                  element={
                    <ProtectedRoute>
                      <Form onSubmit={handleFormSubmit} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/cs"
                  element={
                    <ProtectedRoute>
                      <DashboardCS formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/it"
                  element={
                    <ProtectedRoute>
                      <DashboardIT formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/bba"
                  element={
                    <ProtectedRoute>
                      <DashboardBBA formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/english"
                  element={
                    <ProtectedRoute>
                      <DashboardEnglish formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/ai"
                  element={
                    <ProtectedRoute>
                      <DashboardAI formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/adminpanel"
                  element={
                    <ProtectedRoute>
                      <Adminpanel formDataList={formDataList} />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  const excludedPaths = ["/login", "/"];
  const userRole = localStorage.getItem("role");

  let navbarLinks = null;

  if (userRole) {
    if (userRole === "admin") {
      navbarLinks = (
        <>
          <li>
            <Link
              to="/adminpanel"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Admin Panel
            </Link>
          </li>
        </>
      );
    } else if (userRole === "user") {
      navbarLinks = (
        <>
          <li>
            <Link
              to="/form"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Form
            </Link>
          </li>
        </>
      );
    } else if (userRole === "faculty") {
      navbarLinks = (
        <>
          <li>
            <Link
              to="/dashboard/cs"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dashboard CS
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/it"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dashboard IT
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/bba"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dashboard BBA
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/english"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dashboard English
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/ai"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dashboard AI
            </Link>
          </li>
        </>
      );
    }
  }

  if (excludedPaths.includes(location.pathname) || !userRole) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("role");
    window.location.href = "/login";
    // Perform any additional logout actions
  };

  return (
    <nav className="bg-blue-600 w-full p-4 flex items-center justify-between">
      <img src={Logo} alt="Logo" className="w-[120px]" />
      <ul className="flex items-center gap-8">
        {navbarLinks}
        {userRole && (
          <li>
            <Link to={"/login"}>
              <button
                onClick={handleLogout}
                className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
