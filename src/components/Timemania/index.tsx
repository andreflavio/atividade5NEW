// components/Timemania/index.tsx
import React from "react";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu"; // Importe o componente Menu
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import { timemania as timemaniaTheme } from '../../styles/theme'; // Importe o tema timemania

export default function Timemania() {
  const { timemania } = useLoteria();

  // Verifique se 'timemania' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!timemania || !timemania.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu /> {/* Adicione o componente Menu */}
      <div className="timemania-bloco-principal">
        <div>
          <div className="timemania-bloco-loteria">
            <img src={trevo} alt="" />
            <span className="timemania-nome-loteria" style={{ color: timemaniaTheme.loteria }}>TIMEMANIA</span> {/* Passe a cor 'loteria' do seu tema */}
          </div>
          <Estimativa 
            dataProximoConcurso={timemania.dataProximoConcurso}
            valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
            estimativa={timemaniaTheme.estimativa} // Passe a cor 'estimativa' do seu tema
          />
        </div>
        <div className="timemania-bloco-direita">
          <Resultado dezenas={timemania.dezenas} bola={timemaniaTheme.bola} bolafonte={timemaniaTheme.bolafonte} />
          <div className="timemania-texto-acumulou">
            {timemania.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${timemania.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="timemania-data-concurso">
            {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
          </div>
        </div>
      </div>
    </>
  );
}
