import React from "react";

const MoreInfo = ({ moreInfo, setMoreInfo }) => {
  return (
    <div>
      {moreInfo !== null && (
        <div
          onClick={() => setMoreInfo(null)}
          className="bg-black/20 w-full min-h-screen absolute top-0 right-0 flex items-center justify-center"
          style={{ zIndex: moreInfo !== null ? 20 : 0 }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            className="w-[500px] min-h-[200px] bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 opacity-0 scale-95"
            style={{
              animation:
                moreInfo !== null
                  ? "fadeScaleIn 0.25s forwards"
                  : "fadeScaleOut 0.25s linear",
            }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <h1 className="text-xl font-semibold text-gray-800">
                Task Information
              </h1>
              <button
                onClick={() => setMoreInfo(null)}
                className="cursor-pointer text-gray-400 hover:text-red-500 text-[1rem] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
                {moreInfo?.task}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {moreInfo?.description}
              </p>
              <p className="text-sm font-medium mt-[7px]">
                Due Date :{" "}
                <span className="text-black/80 font-normal">
                  {moreInfo?.date}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
