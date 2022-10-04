import { useContext } from "react";
import { CalculatorContext } from "../../providers/calculator";

import "./styles.css";

function Result() {
  const { result } = useContext(CalculatorContext);

  return (
    <section className="main-result">
      <h2 className="title-result">VOCÊ RECEBERÁ:</h2>
      <p className="result-p">
        Amanhâ: <span className="span-result">
            {
                result["1"] ? result["1"].toLocaleString ('pt-BR', {style :"currency", currency : 'BRL'}) : "R$ 0,00"
            }
        </span>
      </p>
      <p className="result-p">
        Em 15 dias: <span className="span-result">
            {
                result["15"] ? result["15"].toLocaleString ('pt-BR', {style :"currency", currency : 'BRL'}) : "R$ 0,00"
            }
        </span>
      </p>
      <p className="result-p">
        Em 30 dias: <span className="span-result">
            {
                result["30"] ? result["30"].toLocaleString ('pt-BR', {style :"currency", currency : 'BRL'}) : "R$ 0,00"
            }
        </span>
      </p>
      <p className="result-p">
        Em 90 dias: <span className="span-result">
            {
                result["90"] ? result["90"].toLocaleString ('pt-BR', {style :"currency", currency : 'BRL'}) : "R$ 0,00"
            }
        </span>
      </p>
    </section>
  );
}

export default Result;
