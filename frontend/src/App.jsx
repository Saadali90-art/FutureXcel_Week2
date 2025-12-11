import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./Components/Auth/Auth";
import "./index.css";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
