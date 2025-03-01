import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import { LoginScreen } from "@/pages/Login";
import { useAppSelector } from "@/hooks/redux-toolkit";
import { DashBoardScreen } from "@/pages/Dashboard";
import { ProtectedRoute, PublicRoute } from "@/app/Auth/ProtectedRoute";

function App() {
  const { user } = useAppSelector((state) => state.Auth);
  
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute user={user} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<DashBoardScreen />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
