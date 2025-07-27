import React from "react";
import "./JarInfo.css";

interface JarInfoProps {
    totalAmount: number;
    withdrawn: number;
}

const JarInfo: React.FC<JarInfoProps> = ({ totalAmount, withdrawn }) => {
    return (
        <div className="jar-info">
            <div className="logo-wrapper">
                <img src="/assets/img/logo_short.svg" alt="Logo" className="logo"/>
            </div>
            <div className="fund-logo-wrapper">
                <img src="/assets/img/monobeatles.png" alt="Fund Logo" className="fund-logo"/>
            </div>
            <div className="info-text">
                <h6><span><img src="/assets/img/verification.svg" alt="Fund Logo" className="verification-icon"/>
                Благодійний фонд</span>
                </h6>
                <h1 className="title">Благодійний фонд Сергія Притули</h1>
                <p className="text-light">IBAN: UA 42 322001 00000 2902 6998 0001 65</p>
            </div>
            <div className="amount-info-blocks">
                <div className="amount-info with-border">
                    <img src="/assets/img/collected.svg" alt="collected"/>
                    <div className="text-block">
                        <div className="text-light">Накопичено</div>
                        <div className="amount">{totalAmount.toFixed(2)} ₴</div>
                    </div>
                </div>
                <div className="amount-info">
                    <img src="/assets/img/withdrawn.svg" alt="withdrawn"/>
                    <div className="text-block">
                        <div className="text-light">Знято</div>
                        <div className="amount">{withdrawn} ₴</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JarInfo;