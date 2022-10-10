import React from "react";

import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ ...props }) => {
        return <Items key={props.id} props={props}></Items>;
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
