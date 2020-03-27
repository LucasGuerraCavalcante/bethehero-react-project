import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>BE THE HERO</h1>

                    <h3>Login</h3>
                    <p>Register now, enter the platform and help people find your NGO</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#7159c1" />
                        Register now, get your ID 
                    </Link>
                </section>

                <form>
                    <input placeholder="NGO's name"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input placeholder="City"></input>
                        <input placeholder="State" style={{ width: 100 }}></input>
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>

    );
}