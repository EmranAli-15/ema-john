import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setError('successfully logged');
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
            setError("email or password dons'nt matched");
        })
    }

    return (
        <div className='form-container'>
            <h3>{error}</h3>
            <form onSubmit={handleLogin} className='form-body'>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" required /><br />
                <input type="submit" value="Login" /><br />
                <Link to="/register">not yet account</Link>
            </form>
        </div>
    );
};

export default Login;