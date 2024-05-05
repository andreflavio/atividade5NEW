import React from "react";
import styled, { useTheme } from "styled-components"; // Importe useTheme para acessar o tema

interface DataProps {
  data: string;
}

const DataText = styled.div`
  color: ${(props) => props.theme.data}; /* Use a cor de data do tema */
`;

const Data: React.FC<DataProps> = ({ data }) => {
  const theme = useTheme(); // Use useTheme para acessar o tema

  return <DataText theme={theme}>{data}</DataText>;
};

export default Data;
