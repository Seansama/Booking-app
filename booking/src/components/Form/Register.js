import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://booking-app-vvj0.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });
      if (response.ok) {
        navigate('/Login')
      } else {
        throw new Error("Account not created. Please try again.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="">
      <section className="bg-blue-300 min-h-screen flex items-center justify-center">
      
        <div className="auth-form-container bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md mb-4"
              type="name"
              placeholder="Username"
              id="name"
            ></input>

            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md mb-4"
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            ></input>

            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md mb-4"
              type="password"
              placeholder="********"
              id="password"
              name="password"
            ></input>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4"
              type="submit"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-700 text-sm mb-2">
              Already have an existing account?{" "}
              <Link to="/Login">
                <button className="text-blue-500 hover:underline">
                  Sign In here
                </button>
              </Link>{" "}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
