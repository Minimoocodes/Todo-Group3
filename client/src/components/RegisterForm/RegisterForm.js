import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="register-container">
      <div className="bg-white p-8 shadow-lg flex">
        <div className="bg-image"></div>
        <div className="create-account flex-col items-center justify-center w-72 text-left mt-24">
          <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
          <h2 className="join-text">
            Join us and start organizing your tasks effectively!
          </h2>

          {!showLoginForm && (
            <form>
              <div className="input-container">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input-box"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input-box"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-box"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input-box"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 text-center">
                <input type="checkbox" id="agreement" className="mr-2" />
                <label htmlFor="agreement" className="text-sm text-gray-700 ">
                  I agree to the Terms and Conditions
                </label>
              </div>
              <div className="mb-6 text-center">
                <button type="submit" className="register-button">
                  Register
                </button>
              </div>
            </form>
          )}

          {showLoginForm && (
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    id="loginEmail"
                    type="email"
                    className="input-box"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    id="loginPassword"
                    type="password"
                    className="input-box"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="text-sm text-center">
            <p>
              {showLoginForm
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button onClick={toggleLoginForm} className="text-blue-500">
              {showLoginForm ? "Register here" : "Login here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;