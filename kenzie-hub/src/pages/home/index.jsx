import React, { useEffect } from "react";
import { useState } from "react";
import { ProfileInfo } from "../../components/ProfileInfo";
import { TechRender } from "../../components/TechRender";
import { GlobalStyle } from "../../globalStyle";
import { HeaderHome, Main, Modals } from "./style";
import Plus from "../../assets/plus.svg";
import Modal from "react-overlays/Modal";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { createTechSchema } from "./createTechSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("@USERID")));
  const [showModal, setShowModal] = useState(false);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createTechSchema) });

  const handleClose = () => setShowModal(false);

  const submit = (data) => {
    createTech(data);
    reset();
  };

  const createTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <>
      <GlobalStyle />
      <HeaderHome>
        <h1>Kenzie Hub</h1>
        <Link onClick={handleLogout} to="/">
          Sair
        </Link>
      </HeaderHome>
      <Main>
        <ProfileInfo name={data.name} module={data.course_module}></ProfileInfo>
        <div className="titleContainer">
          <h2>Tecnologias</h2>
          <button
            className="addTech"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={Plus} alt="" />
          </button>
        </div>
        <Modal
          className="modal-container"
          show={showModal}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
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
        </Modal>
        <TechRender />
      </Main>
    </>
  );
};
