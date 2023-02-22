import { createContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const techContext = createContext();

export const TechProvider = ({ children }) => {
  const createTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
        },
      });
      toast.success("Tecnologia Cadastrada", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
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
  return (
    <techContext.Provider value={{ createTech }}>
      {children}
    </techContext.Provider>
  );
};
