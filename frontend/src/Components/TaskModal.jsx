import React from "react";

const TaskModal = ({ showModal, setShowModal, handleSubmit }) => {
  return (
    <div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="bg-black/20 w-full min-h-screen absolute top-0 right-0 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            className="w-[500px] min-h-[390px] bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 opacity-0 scale-95"
            style={{
              animation: showModal
                ? "fadeScaleIn 0.25s forwards"
                : "fadeScaleOut 0.25s linear",
            }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b pb-3 mb-5">
              <h1 className="text-xl font-semibold text-gray-800">Add Task</h1>
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer text-gray-400 hover:text-red-500 text-[1rem] font-bold"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* TASK TITLE */}
              <label className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-700">Task Title</p>
                <input
                  required
                  type="text"
                  name="task"
                  className="border border-gray-300 rounded-md px-2 py-1 outline-none text-[0.90rem] text-gray-700"
                  placeholder="Enter task title"
                />
              </label>

              {/* TASK DESCRIPTION */}
              <label className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-700">
                  Task Description
                </p>
                <textarea
                  required
                  rows={3}
                  name="description"
                  className="border border-gray-300 resize-none rounded-md px-2 py-1 outline-none text-[0.90rem] text-gray-700"
                  placeholder="Enter task description"
                />
              </label>

              <label className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-700">Task Date</p>
                <input
                  required
                  type="date"
                  name="date"
                  className="border border-gray-300 rounded-md px-2 py-1 outline-none text-[0.90rem] text-gray-700"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskModal;
