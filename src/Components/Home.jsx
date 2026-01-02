import Slider from "./Slider";
import FifaMap from "./FifaMap";
import FAQs from "./FAQs";
import Groups from "./Groups";

const Home = () => {
    return (
        <>
            <div id="home" className="scroll-mt-24 scroll-smooth">
                <Slider sliderDuration={6000} />
            </div>

            {/* Refactored Section 2: Format Comparison */}
            <div id="format" className="relative py-6 sm:py-8 md:py-20 lg:py-12 font-outfit scroll-mt-24 scroll-smooth"
                style={{
                    backgroundImage: 'url("/src/assets/img8.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-darkgreen/90 via-darkgreen/80 to-darkgreen/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-8 sm:mb-12 md:mb-16 tracking-tight drop-shadow-lg">
                        Tournament <span className="text-cyanCustom">Format</span>
                    </h2>

                    {/* Comparison Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">

                        {/* Old Format Card */}
                        <div className="backdrop-blur-md bg-white/5 border border-darkGray/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition hover:scale-[1.02] duration-300 shadow-2xl ring-1 ring-darkGray/10">
                            <div className="border-b border-darkGray/50 pb-3 sm:pb-4 mb-4 sm:mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">Previous Format</h3>
                                <p className="text-sm sm:text-base text-veryLightGray/70 mt-1">Qatar 2022 & Earlier</p>
                            </div>

                            <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm sm:text-base text-gray-300 font-medium">Participating Teams</span>
                                    <span className="text-xl sm:text-2xl font-bold text-white">32</span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm sm:text-base text-gray-300 font-medium">Group Structure</span>
                                    <span className="text-lg sm:text-xl font-bold text-white text-right">8 Groups<br /><span className="text-xs sm:text-sm font-normal text-veryLightGray/70">4 teams each</span></span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm sm:text-base text-gray-300 font-medium">Total Matches</span>
                                    <span className="text-xl sm:text-2xl font-bold text-white">64</span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm sm:text-base text-gray-300 font-medium">Knockout Stage</span>
                                    <div className="text-right">
                                        <span className="text-lg sm:text-xl font-bold text-white">Round of 16</span>
                                        <p className="text-xs text-veryLightGray/70 mt-1">Top 2 per group</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* New Format Card */}
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-cyanCustom/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden transition hover:scale-[1.02] duration-300 shadow-2xl ring-1 ring-cyanCustom/70">
                            <div className="absolute top-0 right-0 bg-cyanCustom text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                                NEW ERA
                            </div>
                            <div className="border-b border-white/10 pb-3 sm:pb-4 mb-4 sm:mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">2026 Format</h3>
                                <p className="text-sm sm:text-base text-cyanCustom mt-1">FIFA World Cup 2026</p>
                            </div>

                            <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-cyanCustom/10 rounded-xl border border-cyanCustom/20">
                                    <span className="text-sm sm:text-base text-white font-medium">Participating Teams</span>
                                    <span className="text-xl sm:text-2xl font-bold text-cyanCustom">48</span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-cyanCustom/10 rounded-xl border border-cyanCustom/20">
                                    <span className="text-sm sm:text-base text-white font-medium">Group Structure</span>
                                    <span className="text-lg sm:text-xl font-bold text-cyanCustom text-right">12 Groups<br /><span className="text-xs sm:text-sm font-normal text-veryLightGray/70">4 teams each</span></span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-cyanCustom/10 rounded-xl border border-cyanCustom/20">
                                    <span className="text-sm sm:text-base text-white font-medium">Total Matches</span>
                                    <span className="text-xl sm:text-2xl font-bold text-cyanCustom">104</span>
                                </div>
                                <div className="flex items-center justify-between p-3 sm:p-4 bg-cyanCustom/10 rounded-xl border border-cyanCustom/20">
                                    <span className="text-sm sm:text-base text-white font-medium">Knockout Stage</span>
                                    <div className="text-right">
                                        <span className="text-lg sm:text-xl font-bold text-cyanCustom">Round of 32</span>
                                        <p className="text-xs text-veryLightGray/70 mt-1">Top 2 + Best 8 3rd place</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                        <div className="inline-block p-4 sm:p-6 backdrop-blur-md bg-black/30 rounded-xl sm:rounded-2xl border border-white/10">
                            <h4 className="text-lg sm:text-xl font-bold text-gold mb-2">Host Countries</h4>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white letter-spacing-wide">
                                United States • Mexico • Canada
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="teams" className="scroll-mt-24 scroll-smooth">
                <Groups />
            </div>

            <div id="host-cities" className="text-center px-4 sm:px-6 md:px-8 -scroll-mt-96 scroll-smooth" style={{
                background: 'linear-gradient(to top, rgba(200, 255, 255, 0.5) 10%, rgba(212, 175, 55, 0.25) 100%)',
            }}>
                <div className="pt-4 sm:pt-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Stadium and Host Cities</h2>
                    <div className="w-full flex justify-center items-center">
                        <FifaMap />
                    </div>
                </div>
            </div>

            <div id="schedule" className="text-center px-4 sm:px-6 md:px-8 scroll-mt-24 scroll-smooth" style={{
                backgroundImage: 'url("/src/assets/img12.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}>
                <div className="pb-2 backdrop-blur-1 rounded-2xl border border-white/10">
                    <h2 className="text-2xl sm:text-3xl font-bold pt-4">Schedule Overview</h2>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl pt-4 p-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Opening Match</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Thursday, 11 June 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Group Stage</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Thursday, 11 June 2026 - Sunday, 27 June 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Round of 32</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Sunday, 28 June 2026 - Friday, 3 July 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Round of 16</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Saturday, 4 July 2026 - Tuesday, 7 July 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Quarter-finals</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Thursday, 9 July 2026 - Saturday, 11 July 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Semi-finals</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Tuesday, 14 July 2026 - Wednesday, 15 July 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Third Place Match</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Saturday, 18 July 2026</p>
                        <h3 className="text-sm sm:text-base md:text-lg font-extrabold bg-white bg-opacity-40 rounded-xl p-1">Final</h3>
                        <p className="font-bold text-sm sm:text-base md:text-lg p-2 text-white drop-shadow-2xl bg-black bg-opacity-50 border border-gold rounded-xl">Sunday, 19 July 2026</p>
                    </div>
                </div>
            </div>

            <div id="faqs" className="text-center pt-4 px-4 sm:px-6 md:px-8 scroll-mt-24 scroll-smooth" style={{
                backgroundImage: 'url("/src/assets/img7.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-md text-black">FAQs</h2>
                <FAQs />
            </div>
        </>
    );
};

export default Home;
