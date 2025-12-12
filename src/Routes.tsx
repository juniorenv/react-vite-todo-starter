import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/public/Login";
import { useIsAuthenticated } from "./shared/contexts/AuthContext";

export function AppRoutes() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </AppLayout>
      )}
      {!isAuthenticated && (
        <Routes>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
