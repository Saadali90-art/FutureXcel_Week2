import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import TaskManager from "./TaskManager";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManager />} />
      </Routes>
    </Router>
  );
};

export default App;
