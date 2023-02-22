import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { RegisterPage } from "./pages/register";
import { NotFound } from "./pages/not_found";
import { ProtectedRoutes } from "./pages/protected_routes/index";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <HomePage />
            </TechProvider>
          }
        />
      </Route>

      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
