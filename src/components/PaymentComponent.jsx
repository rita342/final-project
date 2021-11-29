import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Footer from "./Footer";
function PaymentComponent() {
  const onToken = (token) => {
    console.log(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h3
            style={{
              color: "#66D3FA",
            }}
          >
            Airbnb Gift Card
          </h3>
          <h6
            style={{
              color: "black",
            }}
          >
            Amount :50$
          </h6>
        </div>
        <img
          src="https://a0.muscache.com/im/pictures/b3275f8d-4341-4800-bdf2-04be20e9112d.jpg?im_w=480"
          width="30%"
          style={{}}
        />
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StripeCheckout
          stripeKey="pk_test_51JzMv3Jjy2UsZKBIl9ahKEfyW32EkY5I91AXbEbULKYvo8NgbGuTtnHCDv3bUkHwY1tXlZpDB9cgCTi5LQV0InNc00VTPPbduj"
          name="Airbnb card"
          amount={5000}
          token={onToken}
          currency="USD"
          description="christmass Gift"
        />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PaymentComponent;
