import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideBar from "../Home/SlideBar";
import Login from "../Home/Login";
import SignUp from "../Home/SignUp";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Separate errors for Login + Signup
  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);

  const navigate = useNavigate();

  // SIGN UP FUNCTION
  const handleSignup = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let formEntry = Object.fromEntries(data.entries());

    const { name, email, password, cpassword } = formEntry;

    // Empty fields check
    if (!name || !email || !password || !cpassword) {
      setSignupError("All fields are required");
      return setTimeout(() => setSignupError(null), 2000);
    }

    // Name length check
    if (name.trim().length < 3) {
      setSignupError("Name must be at least 3 characters");
      return setTimeout(() => setSignupError(null), 2000);
    }

    // Password length check
    if (password.length < 6) {
      setSignupError("Password must be at least 6 characters");
      return setTimeout(() => setSignupError(null), 2000);
    }

    // Confirm password check
    if (password !== cpassword) {
      setSignupError("Passwords do not match");
      return setTimeout(() => setSignupError(null), 2000);
    }

    // ========== SEND REQUEST ==========
    try {
      let result = await fetch(`${import.meta.env.VITE_BACKEND_URL}signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      let response = await result.json();

      if (response.message == "Signup successful!") {
        localStorage.setItem("token", response.token);

        navigate("/home");
      } else {
        setSignupError(response.message);

        setTimeout(() => {
          setSignupError(null);
        }, 2000);
      }
    } catch (err) {
      console.log("Signup error:", err);
    }
  };

  // LOGIN IN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let formEntry = Object.fromEntries(data.entries());

    const { email, password } = formEntry;

    // Empty check
    if (!email || !password) {
      setLoginError("Email and password are required");
      return setTimeout(() => setLoginError(null), 2000);
    }

    // Password length check
    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters");
      return setTimeout(() => setLoginError(null), 2000);
    }

    // ========== SEND REQUEST ==========
    try {
      let result = await fetch(`${import.meta.env.VITE_BACKEND_URL}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let response = await result.json();

      if (response.message == "Login successful") {
        localStorage.setItem("token", response.token);

        navigate("/home");
      } else {
        setLoginError(response.message);

        setTimeout(() => {
          setLoginError(null);
        }, 2000);
      }
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full h-[55px] bg-blue-400 flex items-center pl-3">
        <p className="text-white font-semibold text-lg md:text-xl">
          Build By Saad Ali
        </p>
      </nav>

      {/* USER INFO SECTION */}
      <section className="flex-1 w-full flex items-center justify-center p-4">
        <section
          className="
            bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[60%]
            shadow-2xl shadow-black/40 rounded-xl
            min-h-[480px] flex flex-col md:flex-row overflow-hidden relative
          "
        >
          <SlideBar isLogin={isLogin} />

          <Login
            loginError={loginError}
            setIsLogin={setIsLogin}
            handleLogin={handleLogin}
          />

          <SignUp
            handleSignup={handleSignup}
            signupError={signupError}
            setIsLogin={setIsLogin}
          />
        </section>
      </section>

      {/* Footer */}
      <footer className="w-full h-10 bg-blue-400 text-white flex items-center pl-3">
        <p className="font-semibold text-lg md:text-xl">Build By Saad Ali</p>
      </footer>
    </main>
  );
};

export default Auth;
