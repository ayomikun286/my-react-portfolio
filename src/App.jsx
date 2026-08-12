import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Login from "./pages/admin/Login.jsx";
import ProtectedRoute from "./admin_components/ProtectedRoute.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
function App() {
    return (
        <Routes>

            {/* Public */}
            <Route path="/" element={<Home />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<Login />} />

            {/* Protected Admin */}
            <Route
                path="/admin"
                element={
                  <AdminDashboard />
                    // <ProtectedRoute>
                    //     <h1>Admin Dashboard</h1>
                    // </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;