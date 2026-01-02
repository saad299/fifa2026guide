import { useState } from "react";

const faqs = [
    {
        question: "How many teams are in World Cup 2026?",
        answer:
            "The FIFA World Cup 2026 will have 48 teams, making it the biggest World Cup tournament in history. This expanded format allows more countries from around the world to participate and increases global representation in the competition.",
    },
    {
        question: "Where is the FIFA World Cup 2026 hosted?",
        answer:
            "The FIFA World Cup 2026 is hosted by the United States, Canada, and Mexico. It is the first World Cup to be jointly hosted by three nations, with matches taking place in multiple cities across North America.",
    },
    {
        question: "How will the group system work?",
        answer:
            "The 48 teams will be divided into 12 groups of 4 teams each. The top two teams from each group qualify for the knockout stage. The 8 best third-placed teams also advance. This format introduces a Round of 32, followed by the traditional knockout rounds leading to the final.",
    },
    {
        question: "How do teams qualify?",
        answer:
            "Teams qualify through continental qualification tournaments organized by FIFA's six confederations (UEFA, CONMEBOL, AFC, CAF, CONCACAF, and OFC).\n\nThe host nations (USA, Canada, and Mexico) qualify automatically, while the remaining spots are earned through qualifiers and intercontinental playoffs.",
    },
    {
        question: "Why are there 48 teams?",
        answer:
            "FIFA expanded the World Cup to 48 teams to increase global participation, give more nations the opportunity to compete, and grow football's popularity worldwide. The expansion also results in more matches, more fans, and greater international exposure.",
    },
    {
        question: "How many matches will be played?",
        answer:
            "The FIFA World Cup 2026 will feature a total of 104 matches, significantly more than the 64 matches played in previous 32-team tournaments. This makes it the longest and most comprehensive World Cup ever held.",
    },
    {
        question: "When will the World Cup take place?",
        answer:
            "The FIFA World Cup 2026 will be held from 11 June 2026 to 19 July 2026.",
    },
    {
        question: "How many stadiums will be used?",
        answer:
            "The FIFA World Cup 2026 will be held in 16 stadiums across the United States, Canada, and Mexico.\nThis includes:\n 11 stadiums in the United States.\n 3 stadiums in Canada.\n 2 stadiums in Mexico.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden transition-all duration-300 rounded-lg sm:rounded-xl border border-gold/70 backdrop-blur-2xl ${openIndex === index
                            ? "bg-black/10 shadow-lg"
                            : "bg-black/20 hover:bg-black/30"
                            }`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center gap-3 p-4 sm:p-5 md:p-6 text-left transition-colors"
                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-md pr-2">
                                {faq.question}
                            </span>
                            <span className={`transform transition-transform duration-300 text-gold flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                        <div
                            className={`transition-[max-height,opacity] duration-300 ease-in-out ${openIndex === index ? "max-h-96 sm:max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5 sm:pt-2 md:px-6 md:pb-6 md:pt-3 text-lightGray font-semibold text-base sm:text-lg md:text-xl leading-relaxed border-t border-white/10 text-left">
                                {faq.answer.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
