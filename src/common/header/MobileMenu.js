import React, { useEffect } from 'react';
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import { FiX } from "react-icons/fi";

const MobileMenu = ({show, onClose}) => {
    useEffect(() => {
        const elements = document.querySelectorAll('.popup-mobile-menu .has-droupdown > a');
        const elementsTwo = document.querySelectorAll('.popup-mobile-menu .with-megamenu > a');
        for (const el of elements) {
            el.onclick = function() {
                this.parentElement.querySelector('.submenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }

        for (const el of elementsTwo) {
            el.onclick = function() {
                this.parentElement.querySelector('.rn-megamenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }, []);
    return (
        <div className={`popup-mobile-menu ${show ? "active": ""}`}>
            <div className="inner">
                <div className="header-top">
                    <Logo 
                        image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                    />
                    <div className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <Nav />
            </div>
        </div>
    )
}
export default MobileMenu;