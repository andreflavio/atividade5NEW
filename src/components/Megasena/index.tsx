// components/Megasena/index.tsx
import React from "react";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Data from "../Principal/Direita/Data";
import Acumulou from "../Principal/Direita/Acumulou";
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu"; // Importe o componente Menu aqui

// Importe o tema aqui
import { mega } from '../../styles/theme';

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();

  // Defina suas dezenas aqui
  const dezenas = megasena.dezenas; // Substitua isso pela sua lista de dezenas

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu /> {/* Use o componente Menu aqui */}
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="" />
          <NomeLoteria loteria={mega.loteria} /> {/* Passe a cor 'loteria' do seu tema */}
        </div>
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={mega.estimativa} // Passe a cor 'estimativa' do seu tema
        />
      </div>
      <div className="mega-bloco-direita">
        <Resultado dezenas={dezenas} bola={mega.bola} bolafonte={mega.bolafonte} />
        <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} />
        <Data data={`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`} />
      </div>
    </div>
  );
};

export default Megasena;
