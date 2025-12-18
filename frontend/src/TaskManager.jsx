import { useEffect, useState } from "react";
import "./animation.css";
import TaskModal from "./Components/TaskModal";
import MoreInfo from "./Components/MoreInfo";
import Navigation from "./Components/Navigation";
import Tasks from "./Components/Tasks";

const TaskManager = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [userTasks, setUserTasks] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(null);
  const [moreInfo, setMoreInfo] = useState(null);

  const filters = ["All", "Completed"];

  // === GETTING ALL OF THE TASKS
  const fetchTasks = async () => {
    try {
      let reqOpt = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      let result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}gettasks`,
        reqOpt
      );

      if (result.ok) {
        let response = await result.json();
        setUserTasks(response.message);
        setFilteredTasks(response.message);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // === CREATING THE TASKS
  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = new FormData(e.target);
    let formEntry = Object.fromEntries(userData.entries());

    try {
      let reqOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEntry),
      };

      let result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}addtask`,
        reqOpt
      );

      if (result.ok) {
        let response = await result.json();
        console.log(response);
        setShowModal(false);
        fetchTasks();
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ========== COMPLETING FUCNTION
  const toggleComplete = async (item) => {
    try {
      let reqOpt = {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      };

      let result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}updatetasks`,
        reqOpt
      );

      if (result.ok) {
        let response = await result.json();
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // DELETING FUNCTION
  const deleteitem = async (item) => {
    try {
      let reqOpt = {
        method: "DELETE",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      };

      let result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}deletetask`,
        reqOpt
      );

      if (result.ok) {
        let response = await result.json();
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ======== FILTERING TASKS
  const filteringTask = (filterType) => {
    setActiveFilter(filterType);
    if (filteredTasks !== null && filterType === "Completed") {
      setFilteredTasks(filteredTasks.filter((task) => task.completed == true));
    } else {
      setFilteredTasks(userTasks);
    }
  };

  return (
    <main className="bg-[#F4F5FF] min-h-screen relative">
      <TaskModal
        handleSubmit={handleSubmit}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <MoreInfo moreInfo={moreInfo} setMoreInfo={setMoreInfo} />

      <Navigation setShowModal={setShowModal} />

      {/* ======= FILTERS  */}
      <section className="w-[97%] mx-auto flex gap-3 py-1">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => filteringTask(item)}
            className={`
            px-2 py-1.5 rounded-sm text-sm font-medium transition-all
            ${
              activeFilter === item
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
          >
            {item}
          </button>
        ))}
      </section>

      {/* ==== TASKS =  */}

      {filteredTasks == null || filteredTasks.length < 1 ? (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/nodata.svg" className="w-[400px] h-[400px]" />
          <p className="text-sm font-semibold">
            No tasks found.{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Add your first task
            </span>
          </p>
        </div>
      ) : (
        <Tasks
          filteredTasks={filteredTasks}
          setMoreInfo={setMoreInfo}
          toggleComplete={toggleComplete}
          deleteitem={deleteitem}
        />
      )}
    </main>
  );
};

export default TaskManager;
