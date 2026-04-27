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
import BookRoom from "./pages/BookRoom";
import BookTable from "./pages/BookTable";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import AddDish from "./pages/AddDish";
import AddRoom from "./pages/AddRoom";
import AddDining from "./pages/AddDining";
import AdminAddStaff from "./pages/AdminAddStaff";
import AdminFeedback from "./pages/AdminFeedback";
import Maintenance from "./pages/Maintenance";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./pages/ProtectedRoute";



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
          <Route path="/book-room/:id" element={<BookRoom />} />
          <Route path="/book-table/:id" element={<BookTable />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
        </Route>

        {/* GROUP B: Auth Pages (Header and LoadingBar, NO Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<div className="container mt-5"><SignIn /></div>} />
          <Route path="/signup" element={<div className="container mt-5"><SignUp /></div>} />
        </Route>

        {/* GROUP C: Admin Dashboard (Sidebar only, NO Header/Footer) */}
        {/* GROUP C: Admin Dashboard (PROTECTED) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />}>

            {/* This makes AdminHome the default view when you hit /admin */}
            <Route index element={<AdminHome />} />

            <Route path="add-dish" element={<AddDish />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="add-dining" element={<AddDining />} />
            <Route path="add-staff" element={<AdminAddStaff />} />
            <Route path="feedback" element={<AdminFeedback />} />
            <Route path="maintenance" element={<Maintenance />} />

          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App
