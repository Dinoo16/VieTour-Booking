import React, { useEffect, useState } from 'react';
import { signin, getUserInfo } from '~/apiServices/authService';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import icons from '~/assets/icons';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated } from '~/utils/isAuthenticated';
import { useUser } from '~/contexts/UserContext';

const cx = classNames.bind(styles);

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { setUser, fetchUser } = useUser();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await signin({ email, password });
            console.log('API response:', response);
            const token = response?.token;

            if (token) {
                localStorage.setItem('token', token);
                // Lấy user info từ API
                const userData = await getUserInfo();
                // if (!userData.username && userData.email) {
                //     userData.username = userData.email.split('@')[0];
                // }
                setUser(userData);

                navigate('/');
            } else {
                setError('Invalid login response');
            }
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <h2 className={cx('title')}>Sign In</h2>

                <div className={cx('socialLogin')}>
                    <button type="button" className={cx('socialBtn')}>
                        <icons.facebook2 />
                    </button>
                    <button type="button" className={cx('socialBtn')}>
                        <icons.icloud />
                    </button>
                    <button type="button" className={cx('socialBtn')}>
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

                <div className={cx('rememberMe')}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                {error && <p className={cx('error')}>{error}</p>}

                <button type="submit" className={cx('signInBtn')}>
                    Sign In
                </button>

                <p className={cx('signupText')}>
                    Don’t have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
