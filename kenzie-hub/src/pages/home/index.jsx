import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ProfileInfo } from "../../components/ProfileInfo";
import { TechRender } from "../../components/TechRender";
import { GlobalStyle } from "../../globalStyle";
import { HeaderHome, Main } from "./style";
import Plus from "../../assets/plus.svg";
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/userContexs";
import { ModalTech } from "../../components/Modal";
import Modal from "react-overlays/Modal";

export const HomePage = () => {
  const { user, Logout } = useContext(userContext);

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(user);

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <GlobalStyle />
      <HeaderHome>
        <h1>Kenzie Hub</h1>
        <Link onClick={Logout} to="/">
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
          <ModalTech handleClose={handleClose} />
        </Modal>
        <TechRender />
      </Main>
    </>
  );
};
