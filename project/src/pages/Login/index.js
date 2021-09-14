import React, {useState} from 'react';
import {BrowserRouter as Link, useHistory} from "react-router-dom";

import {userApi} from "../../api/request";

export const LoginFormTestIds = {
    submit: 'LoginForm-submit',
    loginField: 'LoginForm-loginField',
    passwordField: 'LoginForm-passwordField',
}

export const Login = () => {
    // const {push} = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userApi.login(email, password);
            // push('/profile');
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        data-testid={LoginFormTestIds.loginField}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                        data-testid={LoginFormTestIds.passwordField}
                    />
                </div>
                <div>
                    {error && <p>{error.toString()}</p>}
                    <button type="submit" data-testid={LoginFormTestIds.submit}>Sign in</button>
                </div>
                <hr/>
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    );
}