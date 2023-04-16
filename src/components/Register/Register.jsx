import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError('');

        console.log(email, password, confirmPassword);

        if (confirmPassword !== password) {
            setError('Password did not matched');
            return;
        }
        else if (password.length < 6) {
            setError('Password must at least 6 digit');
            return;
        }

        createUser(email, password)
        .then(result => {
            const signedUser = result.user;
            console.log(signedUser);
            form.reset();
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSignUp} className='form-body'>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" required /><br />
                <label htmlFor="password">Confirm Password</label><br />
                <input type="password" name="confirmPassword" required /><br />
                <input type="submit" value="Sign Up" /><br />
                <p className='text-danger'>{error}</p>
                <Link to="/login">Have an account</Link>
            </form>
        </div>
    );
};

export default Register;