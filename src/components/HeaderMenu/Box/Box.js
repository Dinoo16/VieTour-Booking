import PropTypes from 'prop-types';
import images from '~/assets/images';

function Box({ user, menuItems = [], onItemClick, onLogout }) {
    const items = menuItems.length > 0 ? menuItems : [];

    const handleItemClick = (item) => {
        if (item.action === 'logout' && onLogout) {
            onLogout(item);
        } else if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] py-2 min-w-[200px] border border-[#e1e5e9]">
            <div className="user-menu">
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b border-[#f0f0f0]">
                    <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                        <img
                            src={images[user.avatar] || user.avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[var(--title-color)]">
                            {user.name || user.username}
                        </span>
                        <span className="text-xs text-[var(--text-color)]">{user.role}</span>
                    </div>
                </div>

                {/* Menu items */}
                <div>
                    {items.map((item, index) => {
                        const isLogout = item.className === 'logout';
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-200
                                    hover:bg-[#E5E5E5]
                                    ${isLogout ? 'border-t border-[#f0f0f0] mt-1 hover:bg-[rgba(255,172,155,0.3)]' : ''}
                                `}
                                onClick={() => handleItemClick(item)}
                            >
                                <item.icon
                                    className={`w-4 h-4 ${
                                        isLogout ? 'text-[var(--primary)]' : 'text-[var(--text-color)]'
                                    }`}
                                />
                                <span
                                    className={`text-sm ${
                                        isLogout ? 'text-[var(--primary)]' : 'text-[var(--text-color)]'
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

Box.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        avatar: PropTypes.string,
    }),
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            to: PropTypes.string,
            action: PropTypes.string,
            className: PropTypes.string,
        }),
    ),
    onItemClick: PropTypes.func,
    onLogout: PropTypes.func,
};

export default Box;
