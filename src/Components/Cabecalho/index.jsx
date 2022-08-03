import React from "react";
import styled from "styled-components";

import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const Cabecalho = () => {
  return (
    <Header className="cabecalho">
      <Image className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Btn className="btn-secundario" href="https://google.com">
          Ajuda
        </Btn>
        <Btn primary className="btn-primario" href="https://google.com">
          Sair
        </Btn>
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
  height: 15vh;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;

const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${(props) => (props.primary ? "white" : corPrimaria)};
  background: ${(props) => (props.primary ? corPrimaria : "white")};
`;
