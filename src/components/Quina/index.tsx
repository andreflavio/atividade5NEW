// components/Quina/index.tsx
import React from "react";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu"; // Importe o componente Menu
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import { quina as quinaTheme } from "../../styles/theme"; // Importe o tema quina

export default function Quina() {
  const { quina } = useLoteria();

  // Verifique se 'quina' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!quina || !quina.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu /> {/* Adicione o componente Menu */}
      <div className="quina-bloco-principal">
        <div>
          <div className="quina-bloco-loteria">
            <img src={trevo} alt="" />
            <span
              className="quina-nome-loteria"
              style={{ color: quinaTheme.loteria }}
            >
              QUINA
            </span>{" "}
            {/* Passe a cor 'loteria' do seu tema */}
          </div>
          <Estimativa
            dataProximoConcurso={quina.dataProximoConcurso}
            valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
            estimativa={quinaTheme.estimativa} // Passe a cor 'estimativa' do seu tema
          />
        </div>
        <div className="quina-bloco-direita">
          <Resultado
            dezenas={quina.dezenas}
            bola={quinaTheme.bola}
            bolafonte={quinaTheme.bolafonte}
          />
          <div className="quina-texto-acumulou">
            {quina.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${quina.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="quina-data-concurso">
            {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
          </div>
        </div>
      </div>
    </>
  );
}
