import React from "react";

const Login = ({ handleLogin, loginError, setIsLogin }) => {
  return (
    <section
      className="
              w-full md:w-[50%]
              rounded-t-xl md:rounded-l-xl md:rounded-tr-none
              flex flex-col items-center justify-center
              p-8
            "
    >
      <h2 className="text-2xl font-semibold text-black/85 mb-6 text-center">
        Log In
      </h2>

      <form className="w-full" onSubmit={handleLogin}>
        <label className="block mb-1 font-semibold text-black/85 text-[0.90rem]">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-2 py-1 outline-none text-[0.88rem] text-black/90 rounded-lg border border-gray-300"
        />

        <label className="block mb-1 mt-2 font-semibold text-black/85 text-[0.90rem]">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-2 py-1 outline-none text-[0.88rem] text-black/90 rounded-lg border border-gray-300"
        />

        {/* LOGIN ERROR */}
        <p
          className="text-red-500 font-semibold flex items-center justify-center text-[0.90rem] mt-2"
          style={{
            height: loginError ? "20px" : "0px",
            opacity: loginError ? 1 : 0,
            transition: "all 400ms ease",
          }}
        >
          {loginError}
        </p>

        <button
          type="submit"
          className="w-full mt-2 text-white font-semibold py-2 rounded-lg bg-blue-400 transition"
        >
          Log In
        </button>
      </form>

      <p className="text-[0.75rem] text-black/70 mt-[10px]">
        Don't have an account?{" "}
        <button
          onClick={() => setIsLogin(false)}
          className="text-blue-500 underline cursor-pointer"
        >
          Sign Up
        </button>
      </p>
    </section>
  );
};

export default Login;
