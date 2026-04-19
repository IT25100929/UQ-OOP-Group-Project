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

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </Router>


  )

}

export default App
