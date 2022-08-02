import React from "react";
import styled from "styled-components";

import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const Cabecalho = () => {
  return (
    <Header className="cabecalho">
      <Image className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </Header>
  );
};

export default Cabecalho;

const Header = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;
