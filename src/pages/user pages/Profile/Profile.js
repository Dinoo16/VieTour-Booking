import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useContext } from 'react';
import { UserContext } from '~/contexts/UserContext';

const cx = classNames.bind(styles);

function Profile() {
    const context = useContext(UserContext);

    return (
        <div>
            <img src={context.avatar} alt={context.avatar} />
        </div>
    );
}

export default Profile;
