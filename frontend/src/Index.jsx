import { useEffect, useState } from "react";
import "./index.css";

const Index = () => {
  // State to store all users fetched from backend
  const [userData, setUserData] = useState([]);

  // ===== SHOWING TE USER DATA ON FIRST RENDER ======
  useEffect(() => {
    const fetchInfo = async () => {
      //  REQUEST OPTIONS
      let reqOpt = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      try {
        // GET REQUEST
        let resultDb = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}health`,
          reqOpt
        );

        if (resultDb.ok) {
          let response = await resultDb.json();
          setUserData(response.message);
        } else {
          console.log(resultDb);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <main>
      {/* ================== NAVIGATION BAR ===================  */}
      <nav className="w-full h-[70px] bg-black/10 flex items-center justify-start">
        <h1 className="pl-5 font-semibold text-[1.4rem] text-black">
          Built by Saad Ali
        </h1>
      </nav>

      {/* ==================  USER DATA SECTION  ===================  */}

      <section className="w-[97%] mx-auto min-h-[500px] bg-white  pb-[25px]">
        {/* =========== FORM FOR USER DATA  ============= */}

        <form className="flex gap-x-3 items-center flex-row mt-2.5">
          <label>
            <p>Name</p>
            <input
              className="border rounded-md px-[3px] py-0.5 text-sm"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </label>

          <label>
            <p>Description</p>
            <input
              className="border rounded-md px-[3px] py-0.5 text-sm"
              type="text"
              name="description"
              placeholder="Enter Your Name"
            />
          </label>

          <button
            className="bg-blue-500 text-white rounded-md px-2 text-[0.95rem] py-1.5"
            type="submit"
          >
            Submit
          </button>
        </form>

        {/* ========== FETCHED DATA SHOWING SECTION =============== */}

        <section>
          <h1 className="text-[1.7rem] font-semibold pt-5 pb-[5px]">Details</h1>

          {userData.map((item, index) => (
            <div key={index} className="bg-gray-100 my-[9px] py-[5px] px-2.5">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-black/70">{item.description}</p>
            </div>
          ))}
        </section>
      </section>

      {/* ==================  FOOTER  ===================  */}

      <footer className="w-full h-[70px] bg-black/10 flex items-center justify-start">
        <h1 className="pl-5 font-semibold text-[1.4rem] text-black">
          Built by Saad Ali
        </h1>
      </footer>
    </main>
  );
};

export default Index;
