import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
const {getTotalCartAmount}= useContext(StoreContext);

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Deliver information</p>
        <div className="multi-field">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        { <input type="text" placeholder="street"/> }
        <div className="multi-Fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-Fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">

      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivry fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
