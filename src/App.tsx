import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LoginScreen } from "@/pages/Login";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { DashBoardScreen } from "@/pages/Dashboard";
import { PrivateRoute, ProtectedRoute, PublicRoute } from "@/app/Auth/ProtectedRoute";
import { AdministrationScreen } from "@/pages/Administration";
import InfoUserCard from "./pages/Dashboard/infrastructure/templates/InfoUserCard";
import { useEffect } from "react";
import { AuthActions } from "./store/slices/Auth";
import { userRepository } from "./shared/repository";
import LoaderLanding from "./components/LoaderLanding";

function App() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.Auth);

  useEffect(() => {
    const getUser = async ()=>  {
      const user = await userRepository.getLoggedUser()
      dispatch(AuthActions.setState({ user: user }))
    }
    getUser()
    
  },[dispatch])
  if(!user && localStorage.getItem("token")) return <LoaderLanding />
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute user={user} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route element={<InfoUserCard />}>
            <Route path="/" element={<DashBoardScreen />} />
            <Route element={<PrivateRoute user={user} />}>
              <Route path="/administration" element={<AdministrationScreen />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
