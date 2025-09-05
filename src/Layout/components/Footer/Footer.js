import icons from '~/assets/icons';
import images from '~/assets/images';
import Button from '../../../components/Button/Button';

function Footer() {
    return (
        <div className="h-full w-full xl:w-[1200px] mx-auto mt-[66px] px-4 sm:px-6 lg:px-12 xl:px-0">
            {/* Subscribe Section */}
            <div className="w-full flex flex-col justify-between s:flex-row items-center mb-10">
                <h2 className=" text-4xl xl:text-[48px] font-bold text-[var(--header-color)] font-[var(--font-family-header)]">
                    Subscribe and get exclusive deals & offer
                </h2>
                <form className="flex gap-3 mt-4 sm:mt-0 ">
                    <input
                        type="email"
                        placeholder="Enter your mail"
                        className="px-4 py-3 rounded-md border border-gray-300 text-sm max-w-[250px]"
                    />
                    <Button primary small>
                        Subscribe
                    </Button>
                </form>
            </div>

            <hr className="border-t border-[#ddd] my-8" />

            {/* Footer Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 py-10">
                {/* Logo + Description */}
                <div>
                    <div className="mb-3">
                        <img src={images.logo_black} alt="logo" />
                    </div>
                    <p className="text-sm text-[#444] mb-3">
                        Travel helps companies <br /> manage payments easily.
                    </p>
                    <div className="flex gap-3 mt-3">
                        <div className="w-8 h-8 rounded-full border border-[var(--primary)] flex justify-center items-center cursor-pointer">
                            <icons.facebook />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-[var(--primary)] flex justify-center items-center cursor-pointer">
                            <icons.twitter />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-[var(--primary)] flex justify-center items-center cursor-pointer">
                            <icons.instagram />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-[var(--primary)] flex justify-center items-center cursor-pointer">
                            <icons.youtube />
                        </div>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-base font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-[#444]">
                        <li className="cursor-pointer hover:underline">About</li>
                        <li className="cursor-pointer hover:underline">Careers</li>
                        <li className="cursor-pointer hover:underline">Logistic</li>
                        <li className="cursor-pointer hover:underline">Privacy & Policy</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-base font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-[#444]">
                        <li className="cursor-pointer hover:underline">Help/FAQ</li>
                        <li className="cursor-pointer hover:underline">Press</li>
                        <li className="cursor-pointer hover:underline">Affiliates</li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h4 className="text-base font-semibold mb-4">More</h4>
                    <ul className="space-y-2 text-sm text-[#444]">
                        <li className="cursor-pointer hover:underline">Press Centre</li>
                        <li className="cursor-pointer hover:underline">Our Blog</li>
                        <li className="cursor-pointer hover:underline">Low fare tips</li>
                    </ul>
                </div>
            </div>

            <hr className="border-t border-[#ddd] my-8" />

            {/* Bottom Bar */}
            <div className="flex justify-between text-xs text-[#888]">
                <p>Copyright ©Dino 2025. All Rights Reserved.</p>
                <p className="cursor-pointer hover:underline">Terms & Conditions</p>
            </div>
        </div>
    );
}

export default Footer;
