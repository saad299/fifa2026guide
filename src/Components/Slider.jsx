import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/slider_image_1.webp";
import img2 from "../assets/slider_image_2.jpg";
import img3 from "../assets/slider_image_3.jpg";
import img4 from "../assets/slider_image_4.jpg";
import img5 from "../assets/slider_image_5.jpg";

const slides = [
    { id: 1, src: img1, alt: "Slide 1" },
    { id: 2, src: img2, alt: "Slide 2" },
    { id: 3, src: img3, alt: "Slide 3" },
    { id: 4, src: img4, alt: "Slide 4" },
    { id: 5, src: img5, alt: "Slide 5" }

]
function Slider({ sliderDuration = 6000, }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const start = () => {
            timeoutRef.current = setTimeout(() => {
                setIndex((prev) => (prev + 1) % slides.length);
            }, sliderDuration);
        };

        start();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, [index, sliderDuration]);

    const imgVariants = {
        /* When the image is entering the screen */
        enter: () => ({
            opacity: 0,
            scale: 1,
        }),
        /* When the image is in the center of the screen */
        center: () => ({
            opacity: 1.2,
            scale: 1.1,
            transition: {
                delay: 0.6,
                duration: sliderDuration / 2000 - 0.6,
                ease: "linear",
            },
        }),
        /* When the image is exiting the screen */
        exit: () => ({
            opacity: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className={`relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]`} aria-roledescription="carousel">

            {/* Slides */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <AnimatePresence initial={false} mode="wait">
                    {slides.map((slide, i) =>
                        i === index ? (
                            <motion.div
                                key={slide.id}
                                className="absolute inset-0"
                                custom={i}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={imgVariants}
                            >
                                <motion.img
                                    src={slide.src}
                                    alt={slide.alt}
                                    width="1920"
                                    height="1080"
                                    fetchPriority={i === 0 ? "high" : "auto"}
                                    loading={i === 0 ? "eager" : "lazy"}
                                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[770px] object-cover"
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={imgVariants}
                                />
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
                <div id="hero" className="relative bg-opacity-40 bg-white h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center text-center
                items-center drop-shadow-lg px-4 sm:px-6 md:px-8">
                    <div id="slider">
                        <div id="content" className="max-w-4xl">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Your Complete Beginner's Guide to World Cup 2026</h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8">From the tournament format to the best teams and players, we've got you covered.</p>
                            <div id="btns" className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                                <button className="bg-white/30 backdrop-blur-sm border border-gold shadow-sm shadow-gold/30
                                text-cyanDark font-bold rounded-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg hover:bg-cyanCustom hover:text-darkGray hover:scale-105 transition-all duration-300 w-full sm:w-auto"><a href="#format">Explore Tournament Format</a></button>
                                <button className="bg-white/30 backdrop-blur-sm border border-gold shadow-sm shadow-gold/30
                                text-cyanDark font-bold rounded-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg hover:bg-cyanCustom hover:text-darkGray hover:scale-105 transition-all duration-300 w-full sm:w-auto"><a href="#host-cities">View Host Cities</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;