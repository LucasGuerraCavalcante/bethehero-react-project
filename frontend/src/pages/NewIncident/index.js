import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewIncident() {
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <h1>BE THE HERO</h1>

                    <h3>New Ad</h3>
                    <p>Describe the ad in detail to find a hero who can solve it</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#7159c1" />
                        Back to Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Title"></input>
                    <textarea placeholder="Description"></textarea>

                    <input placeholder="Value ($)"></input>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>

    );
}
