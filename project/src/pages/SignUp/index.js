import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import {userApi} from "../../api/request";

export const SignUp = () => {
const {push}=useHistory()
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
        setError(null);

        try {
            await userApi.registration(email,password);
            push('/login')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error.toString()}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    )}