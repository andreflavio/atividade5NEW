import React from "react";
import styled, { useTheme } from "styled-components"; // Importe useTheme para acessar o tema

interface AcumulouProps {
  quantidadeGanhadores: number;
}

const AcumulouText = styled.div`
  font-size: 28px; /* Mantém o tamanho da fonte fixo em 28px */
  font-weight: bold;
  margin-top: 15px;
  padding-left: 15px;
  color: ${(props) => props.theme.acumulou}; /* Use a cor acumulou do tema */
`;

const Acumulou: React.FC<AcumulouProps> = ({ quantidadeGanhadores }) => {
  const theme = useTheme(); // Use useTheme para acessar o tema

  return (
    <AcumulouText theme={theme}>
      {quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quantidadeGanhadores} GANHADORES`}
    </AcumulouText>
  );
};

export default Acumulou;
