import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CalculatorContext = createContext([]);

export const CalculatorProviders = ({ children }) => {
  const [result, isResult] = useState({});

  async function calculator(data) {
    const loading = toast.loading("Carregando...");
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((res) => {
        console.log(res);
        toast.update(loading, {
          render: "Sucesso !",
          autoClose: 1000,
          type: "success",
          isLoading: false,
        });
        isResult(res.data)
      })
      .catch((err) => {
        console.log(err);
        toast.update(loading, {
          render: "Erro ao tentar calcular",
          autoClose: 1000,
          type: "error",
          isLoading: false,
        });
      });
  }
  return (
    <CalculatorContext.Provider
      value={{
        isResult,
        calculator,
        result,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
