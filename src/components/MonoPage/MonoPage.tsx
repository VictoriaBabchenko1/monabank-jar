import React, { useState } from "react";
import JarInfo from "../JarInfo/JarInfo";
import PaymentForm from "../PaymentForm/PaymentForm";
import "./MonoPage.css";
import Footer from "../Footer/Footer";

const MonoPage: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(() => {
    return parseFloat(localStorage.getItem("totalAmount") || "914927719.95");
  });

  const withdrawn = 910333111.33;

  const handlePayment = (amount: number) => {
    const newTotal = totalAmount + amount;
    setTotalAmount(newTotal);
    localStorage.setItem("totalAmount", newTotal.toString());
  };

  return (
      <div className="container">
          <div className="page-content">
              <div className="jar-container">
                  <JarInfo totalAmount={totalAmount} withdrawn={withdrawn}/>
                  <PaymentForm onPayment={handlePayment}/>
              </div>
              <Footer></Footer>
          </div>
      </div>
  );
};

export default MonoPage;