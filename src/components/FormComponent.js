import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    retirementTarget: "",
    principal: "",
    annualReturn: "",
    yearsRemaining: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(9);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group m-5">
        <label htmlFor="retirementTarget">Your retirement target sum</label>
        <input
          type="email"
          className="form-control"
          id="retirementTarget"
          aria-describedby="target"
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="principal">Amount you already have invested</label>
        <input
          type="email"
          className="form-control"
          id="principal"
          aria-describedby="principal"
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="return">Annual compounding rate</label>
        <input
          type="email"
          className="form-control"
          id="return"
          aria-describedby="return"
          placeholder="Enter percentage. If 7% enter => 0.07"
        />
      </div>

      <div className="form-group m-5">
        <label htmlFor="yearsRemaining">Number of years until retirement</label>
        <input
          type="email"
          className="form-control"
          id="yearsRemaining"
          aria-describedby="yearsRemaining"
          placeholder="Enter percentage. If 7% enter => 0.07"
        />
      </div>

      <button type="submit" className="btn btn-primary m-5">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
