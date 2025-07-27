import React from "react";
import "./PaymentButtons.css";

interface PaymentButtonsProps {
    onConfirm: (paymentMethod: string) => void;
}

const PaymentButtons: React.FC<PaymentButtonsProps> = ({ onConfirm }) => {
    return (
        <div className="payment-buttons">
            <button onClick={() => onConfirm("monoPay")} className="payment-button mono-pay">
                <img src="/assets/img/mono_pay.svg" alt="mono pay"/>
            </button>
            <button onClick={() => onConfirm("googlePay")} className="payment-button google-pay">
                <img src="/assets/img/google-logo.svg" alt="google pay" className="google pay"/>
                <span>Pay</span>
            </button>
            <button onClick={() => onConfirm("applePay")} className="payment-button apple-pay">
                <img src="/assets/img/apple-pay.svg" alt="apple pay" className="apple-pay-img"/>
            </button>
            <button onClick={() => onConfirm("card")} className="card-pay">Оплатити карткою</button>
        </div>
    );
};

export default PaymentButtons;
