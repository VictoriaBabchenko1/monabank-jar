import React, { useState } from "react";
import PaymentButtons from "../PaymentButtons/PaymentButtons";
import "./PaymentForm.css";

interface PaymentFormProps {
    onPayment: (amount: number) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPayment }) => {
    const [amount, setAmount] = useState<number>(0);
    const [comment, setComment] = useState<string>("");

    const handleAddAmount = (value: number) => {
        setAmount((prev) => prev + value);
    };

    const handleSubmit = (paymentMethod: string) => {
        if (amount > 0) {
            console.log(`Платіж: ${amount}₴, Коментар: ${comment}, Метод: ${paymentMethod}`);
            onPayment(amount);
            setAmount(0);
            setComment("");
        }
    };

    return (
        <div className="payment-form">
            <div className="top-up-wrapper">
                <div className="top-up-container">
                    <label>Сума поповнення 💸</label>
                    <div className="input-block">
                        <div className="input-wrapper">
                            <input
                                className="top-up-input"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                min="10"
                            />
                            <div className="currency-symbol">₴</div>
                        </div>
                        <p className="text-light">Сума повинна бути від 10 ₴ до 29 9999 ₴</p>
                    </div>

                        <div className="quick-buttons">
                            <button className="top-up-button" onClick={() => handleAddAmount(100)}>+100 ₴</button>
                            <button className="top-up-button" onClick={() => handleAddAmount(500)}>+500 ₴</button>
                            <button className="top-up-button" onClick={() => handleAddAmount(1000)}>+1000 ₴</button>
                        </div>
                    </div>
                </div>
                <div>
                <input
                    className="comment-input"
                    type="text"
                    placeholder="Ім'я або коментар (необов'язково)"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <PaymentButtons onConfirm={handleSubmit}/>
            </div>
        </div>
    );
};

export default PaymentForm;
