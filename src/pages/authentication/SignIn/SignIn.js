import React from 'react';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx('container')}>
            <form className={cx('form')}>
                <h2 className={cx('title')}>Sign In</h2>

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

                <input type="email" placeholder="Email" className={cx('input')} />
                <input type="password" placeholder="Password" className={cx('input')} />

                <div className={cx('rememberMe')}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className={cx('signInBtn')}>
                    Sign In
                </button>

                <p className={cx('signupText')}>
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
