// components/Resultado/index.tsx
import React from "react";

interface ResultadoProps {
  dezenas: string[];
  bola: string;
  bolafonte: string;
}

const Resultado: React.FC<ResultadoProps> = ({ dezenas, bola, bolafonte }) => {
  return (
    <div className="mega-linha-bola">
      {dezenas.map((dezena: string, index: number) => (
        <div className="mega-bola" key={index} style={{ backgroundColor: bola, color: bolafonte }}>
          {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
        </div>
      ))}
    </div>
  );
};

export default Resultado;
