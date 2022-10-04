import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./styles.css";
import { useContext } from "react";
import { CalculatorContext } from "../../providers/calculator";
import Result from "../Result";

function Main() {

  const { calculator } = useContext(CalculatorContext)

  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError('Minimo de R$1.000,00 requerido')
      .required("Minimo de R$1.000,00 requerido")
      .min(1000, "Minimo de R$1.000,00"),
    installments: yup.number().typeError('Campo Obrigatorio').required("Campo obrigatorio").max(12, "Máximo de 12 parcelas"),
    mdr: yup.number().typeError('Campo Obrigatorio').required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    calculator(data)
  };
  return (
    <section className="main">
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1 className="main-title">Simule sua Antecipação</h1>
        <label className="main-label label-sale">
          Informe o valor da venda *
        </label>
        <input {...register("amount")} className="main-input input-sale" type="number" />
        <label className="error-label">
          {!!errors.amount?.message && <span className="error"> {errors.amount.message}</span>}
        </label>
        <label className="main-label label-installments">
          Em quantas parcelas *
        </label>
        <input {...register("installments")} className="main-input " type="number" />
        <label className="error-label">
          {!!errors.installments?.message && <span className="error"> {errors.installments.message}</span>}
        </label>
        <p className="main-p">Máximo de 12 parcelas</p>
        <label className="main-label label-mdr">
          Informe o percentual de MDR *
        </label>
        <input {...register("mdr")} className="main-input input-mdr" type="number" />
        <label className="error-label">
          {!!errors.mdr?.message && <span className="error"> {errors.mdr.message}</span>}
        </label>
        <button type="submit" className="button-main">
          Calcular
        </button>
      </form>
      <Result/>
    </section>
  );
}

export default Main;
