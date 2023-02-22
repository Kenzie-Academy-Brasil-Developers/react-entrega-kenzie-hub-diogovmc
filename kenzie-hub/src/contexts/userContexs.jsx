import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      async function autoLogin() {
        try {
          const response = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch {
          localStorage.removeItem("@TOKEN");
        }
      }
      autoLogin();
    }
  }, []);

  const Login = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      setUser(response.data.user);
      navigate("/home");
    } catch (error) {
      toast.error(`Usuário ou senha Inválidos`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const Register = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta criada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error(`Ops! Algo deu errado!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const Logout = () => {
    localStorage.removeItem("@TOKEN");
  };

  return (
    <userContext.Provider value={{ Login, Register, Logout, user }}>
      {children}
    </userContext.Provider>
  );
};
