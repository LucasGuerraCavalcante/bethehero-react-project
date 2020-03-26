import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import herosImg from '../../assests/heroes.jpeg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <h1>Be The Hero</h1>

                <form>
                    <h3>Logon</h3>

                    <input placeholder="Your ID"></input>
                    <button type="submit">Join</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#7159c1" />
                        Register now, get your ID 
                    </a>
                </form>

            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    );
}