import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className="footer-holder">
            <div className="footer-copyright">АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від <br/>20.01.1994, у держреєстрі
                банків №226
            </div>
            <div className="action-buttons">
                <button className="action-button">
                    <img src="/assets/img/cup.svg" alt="cup"/>
                    <div><span>Провести розіграш</span></div>
                </button>
                <button className="action-button">
                    <img src="/assets/img/gamepad.svg" alt="gamepad"/>
                    <div><span>Віджет для стрімів</span></div>
                </button>
            </div>
        </div>
    );
};

export default Footer;