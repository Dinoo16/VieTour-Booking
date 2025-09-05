import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children, banner, onShowDialog }) {
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const showDialogInLayout = (message) => {
        setDialogMessage(message);
        setShowDialog(true);
    };

    const handleClose = () => {
        setShowDialog(false);
        navigate('/signin');
    };

    return (
        <div>
            {banner && (
                <div
                    className="relative w-full min-h-[450px] bg-cover bg-top flex flex-col text-white"
                    style={{
                        backgroundImage: `url(${banner.image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-[#262626]/60 " />
                    <div className="relative h-full w-full xl:w-[1200px] mx-auto flex flex-col px-4 sm:px-6 lg:px-12 xl:px-0">
                        <Header />
                        <div className="relative text-center pt-8">
                            <h1 className="text-5xl font-semibold">{banner.title}</h1>
                            {banner.subtitle && (
                                <span className="text-lg font-light mt-3 block tracking-[1px]">{banner.subtitle}</span>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div> {React.cloneElement(children, { showDialog: showDialogInLayout })}</div>
            {showDialog && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0, 0, 0, 0.5)] z-50">
                    <div className="bg-white p-5 rounded-lg max-w-[300px] text-center shadow-[0_2px_8px_rgba(0,0,0,0.3)] ">
                        <h3 className="mt-0">Thông báo</h3>
                        <p>{dialogMessage}</p>
                        <button
                            onClick={handleClose}
                            className="mt-[15px] px-4 py-2 bg-[var(--primary)] text-white border-none rounded-[4px] cursor-pointer"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
            <div className="-translate-y-[52px] flex gap-2 items-center justify-center">
                <span>Copyright @Dino 2025.</span>
                <span>All Rights Reserved.</span>
                <span>Terms & Conditions</span>
            </div>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    banner: PropTypes.node.isRequired,
};

export default AuthLayout;
