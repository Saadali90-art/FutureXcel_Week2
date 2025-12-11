import React from "react";

const SignUp = ({ setIsLogin, signupError, handleSignup }) => {
  return (
    <section
      className="
            w-full md:w-[50%]
            rounded-b-xl md:rounded-r-xl md:rounded-bl-none
            flex flex-col justify-between
            px-8 py-[35px]
          "
    >
      <h2 className="text-2xl font-semibold text-black/85 mb-6 text-center">
        Sign Up
      </h2>

      <form className="w-full" onSubmit={handleSignup}>
        <label className="block mb-1 font-semibold text-black/85 text-[0.90rem]">
          Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter your full name"
          className="w-full px-2 py-1 outline-none text-[0.88rem] rounded-lg border border-gray-300"
        />

        <label className="block mb-1 mt-2 font-semibold text-black/85 text-[0.90rem]">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-2 py-1 outline-none text-[0.88rem] rounded-lg border border-gray-300"
        />

        <label className="block mb-1 mt-2 font-semibold text-black/85 text-[0.90rem]">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-2 py-1 outline-none text-[0.88rem] rounded-lg border border-gray-300"
        />

        <label className="block mb-1 mt-2 font-semibold text-black/85 text-[0.90rem]">
          Confirm Password
        </label>
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm your password"
          className="w-full px-2 py-1 outline-none text-[0.88rem] rounded-lg border border-gray-300"
        />

        {/* SIGNUP ERROR */}
        <p
          className="text-red-500 font-semibold flex items-center justify-center text-[0.90rem] mt-2"
          style={{
            height: signupError ? "20px" : "0px",
            opacity: signupError ? 1 : 0,
            transition: "all 400ms ease",
          }}
        >
          {signupError}
        </p>

        <button
          type="submit"
          className="w-full mt-2 text-white font-semibold py-2 rounded-lg bg-blue-400 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-[0.75rem] text-black/70 mt-[8px] text-center">
        Already have an account?{" "}
        <button
          onClick={() => setIsLogin(true)}
          className="text-blue-500 underline cursor-pointer"
        >
          Log In
        </button>
      </p>
    </section>
  );
};

export default SignUp;
