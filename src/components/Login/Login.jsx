import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);

    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
                navigate(from, { replace: true });
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
                <input type={show ? "text" : "password"} name="password" required /><br />
                <p onClick={()=>setShow(!show)}>
                    {show ? "hide" : "show"}
                </p>
                <input type="submit" value="Login" /><br />
                <Link to="/register">not yet account</Link>
            </form>
        </div>
    );
};

export default Login;