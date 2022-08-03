import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { temaClaro, temaEscuro } from "./Components/UI/Temas";
import GlobalStyle from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  const [tema, setTema] = useState(true);
  const ToggleTema = () => {
    setTema(!tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <Cabecalho ToggleTema={ToggleTema} tema={tema} />
      <Container />
    </ThemeProvider>
  );
}

export default App;
