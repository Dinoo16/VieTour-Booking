import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            {/* Subscribe Section */}
            <div className={cx('subscribe')}>
                <h2>
                    Subscribe and get exclusive <br /> deals & offer
                </h2>
                <form className={cx('form')}>
                    <input type="email" placeholder="Enter your mail" />
                    <Button primary small>
                        Subscribe
                    </Button>
                </form>
            </div>

            <hr />

            {/* Footer Grid */}
            <div className={cx('footer-content')}>
                <div className={cx('column')}>
                    <div className={cx('logo')}>
                        <img src={images.logo_black} alt="logo" />
                    </div>
                    <p>
                        Travel helps companies <br /> manage payments easily.
                    </p>
                    <div className={cx('socials')}>
                        <div className={cx('social-item')}>
                            <icons.facebook />
                        </div>
                        <div className={cx('social-item')}>
                            <icons.twitter />
                        </div>
                        <div className={cx('social-item')}>
                            <icons.instagram />
                        </div>
                        <div className={cx('social-item')}>
                            <icons.youtube />
                        </div>
                    </div>
                </div>

                <div className={cx('column')}>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Logistic</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>

                <div className={cx('column')}>
                    <h4>Contact</h4>
                    <ul>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                    </ul>
                </div>

                <div className={cx('column')}>
                    <h4>More</h4>
                    <ul>
                        <li>Press Centre</li>
                        <li>Our Blog</li>
                        <li>Low fare tips</li>
                    </ul>
                </div>
            </div>

            <hr />

            {/* Bottom Bar */}
            <div className={cx('bottom')}>
                <p>Copyright ©Dino 2025. All Rights Reserved.</p>
                <p className={cx('terms')}>Terms & Conditions</p>
            </div>
        </div>
    );
}

export default Footer;
