import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "./formLoginSchema";
import { userContext } from "../../contexts/userContexs";

export const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(formLoginSchema) });

  const { Login } = useContext(userContext);

  return (
    <form onSubmit={handleSubmit(Login)} noValidate>
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
