import React from "react";
import styled from "styled-components";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

export default (type) => {
  const Imagens = {
    Restaurante: <IconeTema src={alimentacao} alt="alimentacao" />,
    Utilidades: <IconeTema src={utilidades} alt="utilidades" />,
    Saude: <IconeTema src={saude} alt="saude" />,
    Transporte: <IconeTema src={transporte} alt="transporte" />,
    Default: <IconeTema src={outros} alt="outros" />,
  };
  return Imagens[type] || Imagens.Default;
};

const IconeEx = styled.img`
  height: 45px;
  width: fit-content;
`;
const IconeTema = styled(IconeEx)`
  filter: ${({ theme }) => theme.filter};
`;
