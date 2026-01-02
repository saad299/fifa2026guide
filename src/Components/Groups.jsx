import { useState } from 'react';

const Groups = () => {
    const [active, setActive] = useState("All");

    const groups = [
        {
            id: "A",
            name: "Group A",
            teams: ["Mexico", "South Africa", "Korea Republic", "European Play-Off D"]
        },
        {
            id: "B",
            name: "Group B",
            teams: ["Canada", "European Play-Off A", "Qatar", "Switzerland"]
        },
        {
            id: "C",
            name: "Group C",
            teams: ["Brazil", "Morocco", "Haiti", "Scotland"]
        },
        {
            id: "D",
            name: "Group D",
            teams: ["USA", "Paraguay", "Australia", "European Play-Off C"]
        },
        {
            id: "E",
            name: "Group E",
            teams: ["Germany", "Curaçao", "Côte d'Ivoire", "Ecuador"]
        },
        {
            id: "F",
            name: "Group F",
            teams: ["Netherlands", "Japan", "European Play-Off B", "Tunisia"]
        },
        {
            id: "G",
            name: "Group G",
            teams: ["Belgium", "Egypt", "IR Iran", "New Zealand"]
        },
        {
            id: "H",
            name: "Group H",
            teams: ["Spain", "Cabo Verde", "Saudi Arabia", "Uruguay"]
        },
        {
            id: "I",
            name: "Group I",
            teams: ["France", "Senegal", "FIFA Play-Off Tournament 2", "Norway"]
        },
        {
            id: "J",
            name: "Group J",
            teams: ["Argentina", "Algeria", "Austria", "Jordan"]
        },
        {
            id: "K",
            name: "Group K",
            teams: ["Portugal", "FIFA Play-Off Tournament 1", "Uzbekistan", "Colombia"]
        },
        {
            id: "L",
            name: "Group L",
            teams: ["England", "Croatia", "Ghana", "Panama"]
        },
    ];

    const teamFlags = {
        "Mexico": "mx",
        "South Africa": "za",
        "Korea Republic": "kr", // kr
        "European Play-Off D": "eu",
        "Canada": "ca",
        "European Play-Off A": "eu",
        "Qatar": "qa",
        "Switzerland": "ch",
        "Brazil": "br",
        "Morocco": "ma",
        "Haiti": "ht",
        "Scotland": "gb-sct",
        "USA": "us",
        "Paraguay": "py",
        "Australia": "au",
        "European Play-Off C": "eu",
        "Germany": "de",
        "Curaçao": "cw",
        "Côte d'Ivoire": "ci",
        "Ecuador": "ec",
        "Netherlands": "nl",
        "Japan": "jp",
        "European Play-Off B": "eu",
        "Tunisia": "tn",
        "Belgium": "be",
        "Egypt": "eg",
        "IR Iran": "ir",
        "New Zealand": "nz",
        "Spain": "es",
        "Cabo Verde": "cv",
        "Saudi Arabia": "sa",
        "Uruguay": "uy",
        "France": "fr",
        "Senegal": "sn",
        "FIFA Play-Off Tournament 2": "xx",
        "Norway": "no",
        "Argentina": "ar",
        "Algeria": "dz",
        "Austria": "at",
        "Jordan": "jo",
        "Portugal": "pt",
        "FIFA Play-Off Tournament 1": "xx", // generic placeholder
        "Uzbekistan": "uz",
        "Colombia": "co",
        "England": "gb-eng",
        "Croatia": "hr",
        "Ghana": "gh",
        "Panama": "pa"
    };

    const visibleGroups = active === "All" ? groups : groups.filter(group => group.id === active);

    return (
        <>
            <div id="section3" className="text-center bg-cyanCustom/50">
                <div className="p-4 sm:p-6 pt-4 sm:pt-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold h-auto sm:h-12 mb-4 sm:mb-0">Teams and Groups</h2>
                    <div className="flex justify-center items-center min-h-20 sm:min-h-28 py-2">
                        <ul className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer flex-wrap px-2">
                            <li
                                onClick={() => setActive("All")}
                                className={`
                                    px-3 py-2 sm:p-2 rounded-xl transition-all duration-200 border backdrop-blur-md text-sm sm:text-base
                                    ${active === "All"
                                        ? "bg-white/40 shadow-md border-gold text-neutral font-bold scale-105 sm:scale-110"
                                        : "bg-cyanDark/20 border-gold text-greenGray shadow-md hover:bg-white/30 hover:scale-105 hover:border-gold"
                                    }
                                `}
                            >
                                All
                            </li>
                            {groups.map((group) => (
                                <li
                                    key={group.id}
                                    onClick={() => setActive(group.id)}
                                    className={`
                                        px-3 py-2 sm:p-2 rounded-xl transition-all duration-200 border backdrop-blur-md text-sm sm:text-base
                                        ${active === group.id
                                            ? "bg-white/40 shadow-md border-gold text-neutral font-bold scale-105 sm:scale-110"
                                            : "bg-cyanDark/20 border-gold text-greenGray shadow-md hover:bg-white/30 hover:scale-105 hover:border-gold"
                                        }
                                    `}
                                >
                                    <span className="hidden sm:inline">Group </span>{group.id}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center flex-wrap sm:p-3">
                        {visibleGroups.map((group) => (
                            <div key={group.id} className="w-full sm:w-64 md:w-64 lg:w-72 text-center p-4 sm:p-5 min-h-20 flex flex-col border-2 border-gold rounded-xl shadow-md bg-cyanDark/30 slide-in-bottom mx-10 sm:mx-0">
                                <p className="text-xl sm:text-2xl font-bold">{group.name}</p>
                                <div className="flex flex-col items-start gap-2 m-4 sm:m-6">
                                    {group.teams.map((team, idx) => (
                                        <p key={idx} className="text-left text-sm sm:text-base">
                                            <span className={`fi fi-${teamFlags[team] || 'xx'} shadow-sm ml-[-8px] mr-2`}></span>
                                            {team}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Groups;