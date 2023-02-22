import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterSchema } from "./formRegisterSchema";
import { Input } from "../Input";
import { userContext } from "../../contexts/userContexs";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormRegisterSchema) });

  const { Register } = useContext(userContext);

  return (
    <>
      <form onSubmit={handleSubmit(Register)} noValidate>
        <Input
          type="text"
          label="Nome"
          placeholder="Digite o seu nome"
          register={register("name")}
          error={errors.name}
        />

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
          placeholder="Digite a sua senha"
          register={register("password")}
          error={errors.password}
        />

        <Input
          type="password"
          label="Confirme a Senha"
          placeholder="Confirme a sua senha"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Input
          type="text"
          label="Bio"
          placeholder="Escreva a sua bio"
          register={register("bio")}
          error={errors.bio}
        />
        <Input
          type="tel"
          label="Contato"
          placeholder="Escreva o seu contato"
          register={register("contact")}
          error={errors.contact}
        />
        <label htmlFor="select">Selecionar Módulo</label>
        <select id="select" {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
