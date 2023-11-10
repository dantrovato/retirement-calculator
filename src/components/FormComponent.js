import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    retirementTarget: "",
    principal: "",
    annualReturn: "",
    yearsRemaining: "",
  });

  const [result, setResult] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { retirementTarget, principal, annualReturn, yearsRemaining } =
      formData;

    console.log("Retirement target: ", retirementTarget);
    console.log("Principal: ", principal);
    console.log("Annual return: ", annualReturn);
    console.log("Years remaing: ", yearsRemaining);
    const y = Number(retirementTarget);
    const a = Number(principal);
    const r = Number(annualReturn);
    const n = yearsRemaining;

    let calculation =
      (y - a * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n) - 1) / r);

    setResult(calculation);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group m-5">
        <label htmlFor="retirementTarget">Your retirement target sum</label>
        <input
          type="number"
          className="form-control"
          id="retirementTarget"
          name="retirementTarget"
          aria-describedby="target"
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="principal">Amount you already have invested</label>
        <input
          type="number"
          className="form-control"
          id="principal"
          name="principal"
          aria-describedby="principal"
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="return">Annual compounding rate</label>
        <input
          type="number"
          step="any" // allows any floating-point number
          className="form-control"
          id="return"
          name="annualReturn"
          aria-describedby="return"
          onChange={handleInputChange}
          placeholder="Enter percentage. If 7% enter => 0.07"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="yearsRemaining">Number of years until retirement</label>
        <input
          type="number"
          className="form-control"
          id="yearsRemaining"
          name="yearsRemaining"
          aria-describedby="yearsRemaining"
          onChange={handleInputChange}
          placeholder="Enter the number of years before you want to retire"
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary m-5">
          Submit
        </button>
        <span className="h2 text-muted">
          Ya gotta put away ${result} every year
        </span>
      </div>
    </form>
  );
};

export default FormComponent;
