import React from "react";
import styled from "styled-components";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

export default (type) => {
  const Imagens = {
    Restaurante: <IconeEx src={alimentacao} alt="alimentacao" />,
    Utilidades: <IconeEx src={utilidades} alt="utilidades" />,
    Saude: <IconeEx src={saude} alt="saude" />,
    Transporte: <IconeEx src={transporte} alt="transporte" />,
    Default: <IconeEx src={outros} alt="outros" />,
  };
  return Imagens[type] || Imagens.Default;
};

const IconeEx = styled.img`
  height: 45px;
  width: fit-content;
`;
