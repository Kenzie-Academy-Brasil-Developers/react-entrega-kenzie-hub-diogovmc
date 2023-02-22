import React from "react";

import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { createTechSchema } from "./createTechSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modals } from "./style";
import { techContext } from "../../contexts/TechContext";
import { useContext } from "react";

export const ModalTech = ({ handleClose }) => {
  const { createTech } = useContext(techContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createTechSchema) });

  const submit = (data) => {
    createTech(data);
    reset();
  };

  return (
    <Modals onSubmit={handleSubmit(submit)} noValidate>
      <div className="modal-header">
        <p>Cadastrar Tecnologia</p>
        <button className="close" onClick={handleClose}>
          X
        </button>
      </div>

      <div className="modal-main">
        <Input
          type="text"
          label="Nome"
          register={register("title")}
          placeholder="Digite a tecnologia"
          error={errors.title}
        ></Input>
        <label htmlFor="select">Selecionar status</label>
        <select name="" id="select" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <button type="submit" className="submit">
        Cadastrar Tecnologia
      </button>
    </Modals>
  );
};
