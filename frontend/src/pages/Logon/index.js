import React from 'react';

import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import herosImg from '../../assests/heroes.jpeg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <h1>BE THE HERO</h1>

                <form>
                    <h3>Logon</h3>

                    <input placeholder="Your ID"></input>
                    <button className="button" type="submit">Join</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#7159c1" />
                        Register now, get your ID 
                    </Link>
                </form>

            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    );
}