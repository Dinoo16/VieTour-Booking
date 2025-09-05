import images from '~/assets/images';
import Button from '~/components/Button/Button';

function Promotion() {
    return (
        <div className="pt-[120px] flex w-screen -ml-[calc(50vw-50%)]">
            {/* Promo 1 */}
            <div
                className="flex-1 h-[240px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${images.promotion_banner})` }}
            >
                <div className="bg-black/40 p-3 sm:p-6 text-center text-white w-full h-full flex flex-col justify-center">
                    <p className="text-sm tracking-[1px] font-semibold">PROMOTION</p>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-[var(--font-family-header)] font-bold mb-4">
                        Explore Nature
                    </h2>
                    <div>
                        <Button transparent primary>
                            Explore Tours
                        </Button>
                    </div>
                </div>
            </div>

            {/* Promo 2 */}
            <div
                className="flex-1 h-[240px] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${images.destination_3})` }}
            >
                <div className="bg-black/40 p-3 sm:p-6 text-center text-white w-full h-full flex flex-col justify-center">
                    <p className="text-sm tracking-[1px] font-semibold">PROMOTION</p>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-[var(--font-family-header)] font-bold mb-4">
                        Explore Cities
                    </h2>
                    <div>
                        <Button transparent primary>
                            Explore Tours
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
