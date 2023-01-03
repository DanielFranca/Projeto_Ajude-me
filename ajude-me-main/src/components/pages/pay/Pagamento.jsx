import React from "react";
import Cards from "react-credit-cards-2";

import FormConfirmarPagamento from "./FormConfirmarPagamento";
import FormPagamentoNaoAutorizado from "./FormPagamentoNaoAutorizado";
import "./CSS/Card.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import "react-credit-cards-2/es/styles-compiled.css";

export default class Pagamento extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    let valorPorConsulta = 0;
    return (
      <div
        key="Payment"
        //centralizar
        className="flex flex-col items-center justify-center"
      >
        <div className="App-payment">
          <h1 className="text-center font-bold mt-0 ml-0 mr-2 text-zinc-800">
            Finalize o agendamento da sua consulta.
          </h1>
          <h4 className="text-center mb-8 text-zinc-600">
            As suas informações estão seguras conosco.
          </h4>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
            placeholders={{ name: "NOME DO TITULAR" }}
            locale={{ valid: "MM / AA" }}
          />
          <form
            ref={(c) => (this.form = c)}
            onSubmit={this.handleSubmit}
            className="mt-7 ml-auto mr-0"
          >
            <div className="form-group flex flex-col gap-2">
              <input
                type="tel"
                name="number"
                className="cursor-pointer rounded border-gray-300 bg-gray-200 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500 m-3"
                placeholder="Número do cartão"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group flex flex-col gap-2">
              <input
                type="text"
                name="name"
                className="cursor-pointer rounded border-gray-300 bg-gray-200 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500 m-3"
                placeholder="Nome do titular"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row grid grid-cols-2 gap-6">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="cursor-pointer rounded border-gray-300 bg-gray-200 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500 m-3"
                  placeholder="Data de expiração"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="cursor-pointer rounded border-gray-300 bg-gray-200 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500 m-3"
                  placeholder="Código de segurança"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input
              type="hidden"
              name="issuer"
              value={issuer}
            />
            <div className="form-actions">
              <FormConfirmarPagamento
                bottonText="PAGAR"
                styleBotton="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              />
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
