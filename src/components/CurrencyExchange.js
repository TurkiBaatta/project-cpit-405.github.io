import React, { useState, useEffect } from "react";
//import "../Appp.css";

function CurrencyExchange() {
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("SAR");
  const [output, setOutput] = useState();

  const getRates = async () => {
    // fetch the data from API
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/USD"
    ).then((response) => response.json());

    // save the rates in the state
    if (response.result === "success") {
      setRates(response.conversion_rates);
      setRatesFetched(true);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  const calculateOutput = async () => {
    // fetch the selected from currency rates
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/${fromCurrency}`
    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const CurrencyRate = fetchedRates[toCurrency];
    const output = amount * CurrencyRate;
    setOutput(output);
  };

  return (
    <div className="container">
      <div className="input-amount">
      <h1>Currency Exchange</h1><br/>
        <label>Enter The Amount:</label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div className="input-from">
        <label>From:</label>
        <select
          id="from"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {ratesFetched ? (
            Object.keys(rates).map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option defaultValue>USD</option>
          )}
        </select>
      </div>

      <div className="input-to">
        <label>To:</label>
        <select
          id="to"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {ratesFetched ? (
            Object.keys(rates).map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option defaultValue>EUR</option>
          )}
        </select>
      </div>
      <button className="btn" onClick={() => calculateOutput()}>
        Calculate
      </button>
      <div className="output">
        <label>Output: {output}</label>
      </div>
    </div>
  );
}

export default CurrencyExchange;
