import React from "react";

const SlideBar = ({ isLogin }) => {
  return (
    <div
      className="bg-blue-400 absolute w-[50%] top-0 h-full"
      style={{
        transform: isLogin ? "translateX(100%)" : "translateX(0%)",
        transition: "transform 500ms ease",
      }}
    >
      {isLogin ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[1.3rem] text-white">
            Welcome Back!
          </h1>
          <p className="text-center text-sm text-white w-[90%]">
            To continue, please login with your personal info and access your
            account quickly.
          </p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[1.3rem] text-white">
            Join Us Today!
          </h1>
          <p className="text-center text-sm text-white w-[80%]">
            Enter your details to create a new account and start your journey
            with us.
          </p>
        </div>
      )}
    </div>
  );
};

export default SlideBar;
