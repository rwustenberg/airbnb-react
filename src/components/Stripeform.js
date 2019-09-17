import React from "react";
import axios from "axios";
import { injectStripe, CardElement } from "react-stripe-elements";

class StripeForm extends React.Component {
  getToken = () => {
    this.props.stripe.createToken({}).then(res => {
      console.log(res.token.id);
      axios
        .post(`${process.env.REACT_APP_API}/pay`, {
          token: res.token.id,
          amount: this.props.amount,
          description: this.props.description
        })
        .then(res => {
          console.log(res);
        });
    });
  };
  render() {
    return (
      <>
        <CardElement />
        <button className="primary" onClick={this.getToken}>
          Pay
        </button>
      </>
    );
  }
}

export default injectStripe(StripeForm);
