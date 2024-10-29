import layer1 from "../../../public/Layer.png"
import layer2 from "../../../public/frame.png"
import footerlogo from "../../../public/footerlogo.png"
import facebook from "../../../public/facebook.png"
import insta from "../../../public/insta.png"
import whatsapp from "../../../public/whatsapp.png"
import linked from "../../../public/linked.png"
import "./Footer.css"

function SubFooter() {
    return (
        <div className="subfooter">
    {/* Left Column */}
    <div className="borderr">
        <img src={layer1} alt="Connect With People" />
        <h3 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
            Connect With People <span className="text-[#6851FF]">Who Can Help</span>
        </h3>
        <div className="mt-4">
            <button type="button" className="text-xl font-bold border border-[#6851FF] text-[#6851FF] px-4 py-2 rounded-3xl hover:bg-slate-50 hover:text-[#6851FF] dark:text-white">
                Coming Soon
            </button>
        </div>
    </div>

    {/* Right Column */}
    <div className="borderr">
        <img src={layer2} alt="Post Your Job" />
        <h3 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
            <span className="text-[#6851FF]">Post Your Job</span> For People To See
        </h3>
        <div className="mt-4">
            <button type="button" className="text-xl font-bold border border-[#6851FF] text-[#6851FF] px-4 py-2 rounded-3xl hover:bg-slate-50 hover:text-[#6851FF] dark:text-white">
                Coming Soon
            </button>
        </div>
    </div>
</div>

    )
}

function Footer() {
    return (
        <div className="relative bottom-0 mt-20 pt-16 flex flex-col justify-center items-center w-full border-t border-gray-700 bg-gradient-to-b from-[#4d3bdb] to-[#9747ff]">
            <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* Left Section */}
                <div className="text-white ">
                    <div>
                        <img
                            src={footerlogo} // Add your image URL or base64 here
                            alt="HiringMine"
                            className="mb-4"
                        />
                        <p className="text-sm">
                            HiringMine connects employers and job seekers, where employers are
                            the source of the resources and the job seeker can find and apply
                            for their targeted job.
                        </p>
                    </div>
                    <div className="mt-6">
                        <p className="text-sm font-semibold">Follow us</p>
                        <div className="flex gap-6 mt-2 mb-2 items-center   ">
                            <a href="https://www.facebook.com/HiringMine" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a
                                href="https://chat.whatsapp.com/BT2IHPvxw2gITPw4gvIMQU"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={whatsapp} alt="WhatsApp" />
                            </a>
                            <a
                                href="https://www.instagram.com/hiring_mine/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={insta} alt="Instagram" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/hiring-mine/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linked} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="text-white flex justify-end">
                    <div>
                        <ul className="list-none space-y-2">
                            <li className="font-bold">Contact Us</li>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.6666 1.99984C13.6666 1.2665 13.0666 0.666504 12.3333 0.666504H1.66659C0.933252 0.666504 0.333252 1.2665 0.333252 1.99984V9.99984C0.333252 10.7332 0.933252 11.3332 1.66659 11.3332H12.3333C13.0666 11.3332 13.6666 10.7332 13.6666 9.99984V1.99984ZM12.3333 1.99984L6.99992 5.33317L1.66659 1.99984H12.3333ZM12.3333 9.99984H1.66659V3.33317L6.99992 6.6665L12.3333 3.33317V9.99984Z"
                                        fill="white"
                                    />
                                </svg>
                                <a href="mailto:portal.hiringmine@gmail.com" className="underline">
                                    portal.hiringmine@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="py-2 flex flex-col items-center w-full border-t-2 border-white my-6">
                <div className="flex gap-5 mb-2">
                    <p className="text-white cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="text-white cursor-pointer hover:underline">Terms and Conditions</p>
                </div>
                <p className="text-white text-sm text-center">
                    &copy; HiringMine 2024. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export { Footer, SubFooter } 