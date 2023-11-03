import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Retirement Calculator</h1>
      <form>
        <div class="form-group m-5">
          <label for="retirementTarget">Your retirement target sum</label>
          <input
            type="email"
            class="form-control"
            id="retirementTarget"
            aria-describedby="target"
            placeholder="Enter amount"
          />
        </div>

        <div class="form-group m-5">
          <label for="principal">Amount you already have invested</label>
          <input
            type="email"
            class="form-control"
            id="principal"
            aria-describedby="principal"
            placeholder="Enter amount"
          />
        </div>

        <div class="form-group m-5">
          <label for="return">Annual compounding rate</label>
          <input
            type="email"
            class="form-control"
            id="return"
            aria-describedby="return"
            placeholder="Enter percentage. If 7% enter => 0.07"
          />
        </div>

        <div class="form-group m-5">
          <label for="yearsRemaining">Number of years until retirement</label>
          <input
            type="email"
            class="form-control"
            id="yearsRemaining"
            aria-describedby="yearsRemaining"
            placeholder="Enter percentage. If 7% enter => 0.07"
          />
        </div>

        <button type="submit" class="btn btn-primary m-5">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
