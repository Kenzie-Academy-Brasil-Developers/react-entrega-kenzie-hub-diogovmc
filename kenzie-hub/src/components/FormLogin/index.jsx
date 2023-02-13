import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "./formLoginSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(formLoginSchema) });

  const submit = (formData) => {
    loginUser(formData);
  };

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@USERID", JSON.stringify(response.data.user));
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
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

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Input
        type="email"
        label="Email"
        placeholder="Digite o seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        label="Senha"
        placeholder="Digite o sua senha"
        register={register("password")}
        error={errors.password}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
