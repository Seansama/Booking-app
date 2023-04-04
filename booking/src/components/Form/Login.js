import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://booking-app-vvj0.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  if (loggedIn) {
    navigate('/home')
    /*
    return <div className="flex items-center h-screen">
    <div className="mx-auto">
      <Link to="/home" class="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">CONTINUE</Link>
    </div>
  </div>
  ;
  */
  }

  return (
    <section className="flex bg-blue-300 flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Log In
          </button>

          <button className="block text-sm text-center text-gray-700 hover:underline mt-4">
            Don't have an account?{" "}
            <Link to="/signup">
              {" "}
              <button className="text-blue-500 hover:underline">
                Create here.
              </button>
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
