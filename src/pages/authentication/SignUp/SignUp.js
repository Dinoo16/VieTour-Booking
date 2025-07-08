import React from 'react';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx('container')}>
            <form className={cx('form')}>
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

                <input type="email" placeholder="Email" className={cx('input')} />
                <input type="password" placeholder="Password" className={cx('input')} />
                <input type="password" placeholder="Confirm Password" className={cx('input')} />

                <div className={cx('agreeTerm')}>
                    <input type="checkbox" id="term" />
                    <label htmlFor="agree">
                        I agree the <a href="/#"> Terms and Conditions</a>
                    </label>
                </div>

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
