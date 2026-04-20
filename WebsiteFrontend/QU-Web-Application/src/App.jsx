import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./layout/Header";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import Restaurant from "./pages/Restaurant";
import AuthLayout from "./layout/AuthLayout";
import RoomDetails from "./pages/RoomDetails";



function App() {
  return (
    <Router>
      <Routes>

        {/* GROUP A: Pages WITH Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
        </Route>

        {/* GROUP B: Auth Pages (Header and LoadingBar, NO Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<div className="container mt-5"><SignIn /></div>} />
          <Route path="/signup" element={<div className="container mt-5"><SignUp /></div>} />
        </Route>

        {/* GROUP C: Admin Dashboard (Sidebar only, NO Header/Footer) */}
        {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}

      </Routes>
    </Router>
  );
}

export default App
