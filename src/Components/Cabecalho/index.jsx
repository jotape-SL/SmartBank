import React from "react";
import styled from "styled-components";

import bank_logo from "../../assets/images/bank_logo.svg";
import { Icone } from "../UI";
import { corPrimaria } from "../UI/variaveis";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

const Cabecalho = ({ ToggleTema, tema }) => {
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
        <BtnTema onClick={ToggleTema}>
          {<Icone src={tema ? ThemeOff : ThemeOn} />}
        </BtnTema>
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

const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
