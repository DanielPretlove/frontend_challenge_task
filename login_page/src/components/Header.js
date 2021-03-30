import React from 'react';
import {ReactComponent as Logo } from '../images/datazoo.svg';
export default function Header() {
    return (
        <header>
            <div className = "divHeader">
                <Logo id = "logo" />
                <h2>Account details</h2>
            </div>
        </header>
    )
}