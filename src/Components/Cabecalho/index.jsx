import React from "react";
import styled from "styled-components";

import bank_logo from "../../assets/images/bank_logo.svg";
import { Icone, IconeTema } from "../UI";
import { corPrimaria } from "../UI/variaveis";
import ThemeOn from "../../assets/images/ThemeOn.svg";
import ThemeOff from "../../assets/images/ThemeOff.svg";

const Cabecalho = ({ ToggleTema, tema }) => {
  return (
    <Header className="cabecalho">
      <Image src={bank_logo} alt="Logo Smart Bank" />
      <Btns>
        <div>
          <Btn href="https://google.com">Ajuda</Btn>
          <Btn primary href="https://google.com">
            Sair
          </Btn>
        </div>
        <div>
          <BtnTema onClick={ToggleTema}>
            {<IconeTemas src={tema ? ThemeOff : ThemeOn} />}
          </BtnTema>
        </div>
      </Btns>
    </Header>
  );
};

export default Cabecalho;

const IconeTemas = styled(Icone)`
  filter: invert(100%);
`;

const Header = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 10px 15vw;
  height: 10vh;
  align-items: flex-end;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;
const Btns = styled.div`
  display: flex;
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
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
