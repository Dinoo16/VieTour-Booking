import classNames from 'classnames/bind';
import styles from './SignOut.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import configRoute from '~/config/routes';

const cx = classNames.bind(styles);
function SignOut() {
    return (
        <div className={cx('container')}>
            <img src={images.signout} alt={images.signout} />
            <h2 className={cx('title')}>See You Again!</h2>
            <p>Thanks for using VieTravel. You are now successfully signed out.</p>
            <Button primary className={cx('button')} to={configRoute.home}>
                Back to Home
            </Button>
        </div>
    );
}

export default SignOut;
