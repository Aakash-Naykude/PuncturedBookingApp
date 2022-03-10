import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div class="container">
      <h1
        style={{
          marginTop: "80px",
          fontFamily: "fantasy",
          textAlign: "center",
        }}
      >
        Please Make Your Payment and give us feedback
      </h1>
      <div className="CheckoutList">
        <form onSubmit={() => alert("Payment Made successfully, Thank You")}>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="floatingInputValue"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="***********"
            />
          </div>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Choose Card Option</option>
            <option value="1">State Bank</option>
            <option value="2">HDFC</option>
            <option value="3">ICICI</option>
            <option value="3">BOM</option>
          </select>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Card number
            </label>
            <input
              type="email"
              class="form-control"
              id="floatingInputValue"
              placeholder="4568-****-****-7895"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
