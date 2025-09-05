import images from '~/assets/images';

function WhyUs() {
    return (
        <div className="w-full">
            <div className="mt-[120px] flex flex-col md:flex-row justify-between gap-[100px] md:gap-[200px] flex-wrap">
                {/* Who We Are */}
                <div className="flex-1">
                    <h4 className="text-[var(--primary)] font-medium text-2xl mb-[14px] tracking-[0.5em]">
                        W h o W e A r e
                    </h4>
                    <h1 className="text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] tracking-[0.5px] mb-6">
                        Who We Are
                    </h1>
                    <p className="leading-relaxed text-[16px] text-[#333]">
                        Established in [Year of Establishment], [Your Travel Agency Name] has been dedicated to creating
                        unforgettable travel experiences. Our journey started with a simple idea: to make travel
                        extraordinary. Today, we continue to turn dreams into reality
                    </p>
                    <div className="mt-8 w-full h-[528px] border-[12px] border-[#E5E5E5] rounded-[24px] overflow-hidden">
                        <img className="w-[101%] h-full object-cover" src={images.aboutus} alt="aboutus" />
                    </div>
                </div>

                {/* Why Us */}
                <div className="flex-1  md:mt-[100px]">
                    <h4 className="text-[var(--primary)] font-medium text-2xl mb-[14px] tracking-[0.5em]">W h y U s</h4>
                    <h1 className="text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] tracking-[0.5px] mb-6">
                        Why Us
                    </h1>
                    <p className="leading-relaxed text-[16px] text-[#333]">
                        Established in [Year of Establishment], [Your Travel Agency Name] has been dedicated to creating
                        unforgettable travel experiences. Our journey started with a simple idea: to make travel
                        extraordinary. Today, we continue to turn dreams into reality
                    </p>
                    <div className="mt-8 w-full h-[528px] border-[12px] border-[#E5E5E5] rounded-[24px] overflow-hidden">
                        <img className="w-[101%] h-full object-cover" src={images.whyus} alt="why-us" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
