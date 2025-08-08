import React from 'react';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import icons from '~/assets/icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '~/apiServices/authService';
import { isAuthenticated } from '~/utils/isAuthenticated';

const cx = classNames.bind(styles);

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await signup({ email, password });
            const token = response.token;

            if (token) {
                localStorage.setItem('token', token);
                navigate('/signin');
            } else {
                setError('Sign up failed!');
            }
        } catch (err) {
            console.error(err);
            if (err.response?.data) {
                const errorMessages = Array.isArray(err.response.data)
                    ? err.response.data.join(', ')
                    : err.response.data.message || 'Signup failed';
                setError(errorMessages);
            } else {
                setError('Signup failed. Please try again.');
            }
        }
    };

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <h2 className={cx('title')}>Register with</h2>

                <div className={cx('socialLogin')}>
                    <button className={cx('socialBtn')}>
                        <icons.facebook2 />
                    </button>
                    <button className={cx('socialBtn')}>
                        <icons.icloud />
                    </button>
                    <button className={cx('socialBtn')}>
                        <icons.google />
                    </button>
                </div>

                <div className={cx('separator')}>Or</div>

                <input
                    type="email"
                    placeholder="Email"
                    className={cx('input')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={cx('input')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className={cx('input')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <div className={cx('agreeTerm')}>
                    <input type="checkbox" id="term" />
                    <label htmlFor="agree">
                        I agree the <a href="/#"> Terms and Conditions</a>
                    </label>
                </div>

                {error && <p className={cx('error')}>{error}</p>}

                <button type="submit" className={cx('signUpBtn')}>
                    Sign Up
                </button>

                <p className={cx('signinText')}>
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
