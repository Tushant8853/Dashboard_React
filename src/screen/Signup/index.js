import React from 'react';
import './signupstyle.css';

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
