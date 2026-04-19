import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Rooms from "./pages/Rooms";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>
      <Header />

      <Routes>
        {/* Home stays full-width (No container) */}
        <Route path="/" element={<Home />} />

        {/* These pages get wrapped in a container */}
        <Route path="/signin" element={<div className="container mt-5"><SignIn /></div>} />
        <Route path="/signup" element={<div className="container mt-5"><SignUp /></div>} />
        <Route path="/rooms" element={<div className="container mt-5"><Rooms /></div>} />
      </Routes>

    </Router>


  )

}

export default App
