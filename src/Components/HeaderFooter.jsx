import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import wc26Logo from "../assets/WC26_Logo.avif";

const HeaderFooter = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleHomeClick = () => {
        setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <>
            <div id="header" className="bg-darkgreen sticky top-0 z-10 w-full">
                <div id="nav" className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 sm:h-20 md:h-24 md:pt-6 pt-2 pb-2">
                    <div id="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-28 bg-black flex justify-center items-center cursor-pointer rounded-xl shrink-0 md:pt-4 md:mt-6">
                        <img src={wc26Logo} alt="WC26_Logo" width="70" height="70" className="h-12 sm:h-16 md:h-24 md:pb-4" />
                    </div>

                    <div id="menu" className="hidden lg:flex justify-center items-center gap-10 xl:gap-12 md:pb-4">
                        <Link to="/" onClick={handleHomeClick} className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors">Home</Link>
                        <div className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors"><a href="#format">Format</a></div>
                        <div className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors"><a href="#teams">Teams</a></div>
                        <div className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors"><a href="#host-cities">Host Cities</a></div>
                        <div className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors"><a href="#schedule">Schedule</a></div>
                        <Link to="/fan-guide" className="text-veryLightGray text-sm xl:text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors"><a href="#fan-guide">Fan Guide</a></Link>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-veryLightGray transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-veryLightGray transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-veryLightGray transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                <div className={`lg:hidden bg-darkgreen overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 border-t border-veryLightGray/20' : 'max-h-0'}`}>
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <Link
                            to="/"
                            onClick={() => {
                                setIsMenuOpen(false);
                                handleHomeClick();
                            }}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Home
                        </Link>
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Format
                        </div>
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Teams
                        </div>
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Host Cities
                        </div>
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Schedule
                        </div>
                        <Link
                            to="/fan-guide"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-veryLightGray text-base font-bold cursor-pointer hover:text-cyanCustom transition-colors w-full text-center py-2"
                        >
                            Fan Guide
                        </Link>
                    </div>
                </div>
            </div>

            <ScrollToTop />
            <Outlet />

            <div id="footer" className="bg-black text-white min-h-24 sm:min-h-28 md:min-h-32 flex justify-center items-center text-center px-4 py-6">
                <div className="flex flex-col space-y-2">
                    <p className="font-mono text-xs sm:text-sm md:text-base">© 2026 FIFA World Cup 2026 Guide | All rights reserved.</p>
                    <p className="font-mono text-xs sm:text-sm md:text-base">
                        Developed with 💖 of ⚽ by <span className="font-bold text-gold"><a href="https://www.linkedin.com/in/muhammad-saad-ahmad" target="_blank" rel="noopener noreferrer">Saad</a></span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeaderFooter;