import images from '~/assets/images';

function Intro() {
    return (
        <div className="w-full">
            <div className="flex justify-between items-start gap-8">
                <div>
                    <h4 className="text-[var(--primary)] font-bold text-xl s:text-2xl mb-[14px] uppercase">ABOUT US</h4>
                    <h1 className="text-[24px] s:text-[32px] sm:text-[48px] font-[var(--font-family-header)] text-[var(--header-color)] tracking-[0.5px]">
                        The best travel agency for you
                    </h1>
                    <p className="max-w-[700px] mt-4 leading-relaxed text-[16px] text-[#333]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum sit libero, placerat nibh
                        facilisis in rutrum. Risus, gravida purus nunc suspendisse. Sit elementum mi, netus in sit.
                        Massa posuere ac auctor quis elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In elementum sit libero, placerat nibh facilisis in rutrum. Risus, gravida purus nunc
                        suspendisse. Sit elementum mi, netus in sit. Massa posuere ac auctor quis elementum.
                    </p>
                </div>
                <img
                    src={images.destination_1}
                    alt="aboutus"
                    className="rounded-[32px_0_32px_0] w-[150px] s:w-[200px] sm:w-auto"
                />
            </div>
        </div>
    );
}

export default Intro;
