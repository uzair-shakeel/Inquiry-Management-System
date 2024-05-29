import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Update the import path as necessary
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(); // Update the context state to indicate the user is logged in
        localStorage.setItem("role", data.role);

        {
          data.role === "admin"
            ? navigate("/adminpanel")
            : data.role === "user"
            ? navigate("/form")
            : navigate("/dashboard/cs");
        }
        // Navigate to the form page after login
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-fade-in-down">
      <div className="bg-white p-4 md:p-8 rounded-lg border shadow-lg w-full max-w-[600px] animate-scale-in">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md transition duration-300 hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/" className="text-blue-500">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
