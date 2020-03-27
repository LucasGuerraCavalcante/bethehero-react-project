import React from 'react'; 

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Profile() {

    return (
        <div className="profile-container">
            <header>
                <h1>BE THE HERO</h1>
                <span>Welcome, APAD</span>

                <Link to="/incidents/new" className="button">Insert a new Ad</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h2>Your Registered Advertisements</h2>

            <ul>
                <li>
                    <strong>AD:</strong>
                    <p>Teste</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Teste</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>AD:</strong>
                    <p>Teste</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Teste</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>AD:</strong>
                    <p>Teste</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Teste</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>AD:</strong>
                    <p>Teste</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Teste</p>

                    <strong>VALUE:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}