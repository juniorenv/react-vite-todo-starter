import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
