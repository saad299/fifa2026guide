import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState, useEffect } from "react";
import northAmerica from "./northAmerica.json";
import statesUS from "./statesUS.json";
import mexico from "./mexico.json";
import canada from "./canada.json";
import markers from "./markers";

function FifaMap() {

    const [hoverState, setHoverState] = useState(null);
    const [dimensions, setDimensions] = useState({
        width: 800,
        height: 620,
        scale: 350
    });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            let width, height, scale;

            // Mobile devices (< 640px)
            if (screenWidth < 640) {
                width = Math.min(screenWidth - 32, 400);
                height = width * 0.775;
                scale = width * 0.4375;
            }
            // Tablet devices (640px - 1024px)
            else if (screenWidth < 1024) {
                width = Math.min(screenWidth - 64, 600);
                height = width * 0.775;
                scale = width * 0.4375;
            }
            // Desktop devices (>= 1024px)
            else {
                width = 800;
                height = 620;
                scale = 350;
            }

            setDimensions({ width, height, scale });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Calculate responsive marker scale
    const markerScale = dimensions.width / 800 * 0.7;

    // Calculate responsive font sizes
    const cityFontSize = Math.max(10, dimensions.width / 800 * 14);
    const stadiumFontSize = Math.max(9, dimensions.width / 800 * 12);

    return (
        <div className="w-full flex justify-center">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: dimensions.scale,
                    center: [-115, 53.21], // Focus on North America
                }}
                width={dimensions.width}
                height={dimensions.height}
            >
                <Geographies geography={northAmerica}>
                    {({ geographies }) =>
                        geographies
                            .filter((geo) =>
                                ["United States of America", "Canada", "Mexico"].includes(
                                    geo.properties.name
                                )
                            )
                            .map((geo) => (
                                <>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        strokeWidth={0.1}
                                        stroke="#C41E3A"
                                        className="fill-white transition-all outline-none"
                                    />

                                </>
                            ))
                    }
                </Geographies>
                <Geographies geography={statesUS}>
                    {({ geographies }) =>
                        geographies
                            .map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="none"
                                    stroke="black"
                                    strokeWidth={0.1}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { stroke: "#00CFFF", fill: "#F7F8F7" },
                                    }}
                                />
                            ))
                    }
                </Geographies>
                <Geographies geography={mexico}>
                    {({ geographies }) =>
                        geographies
                            .filter((geo) => !geo.properties.mun_name)
                            .map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="none"
                                    stroke="black"
                                    strokeWidth={0.1}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { stroke: "#0B7F0B", fill: "#F7F8F7" },
                                    }}
                                />
                            ))
                    }
                </Geographies>
                <Geographies geography={canada}>
                    {({ geographies }) =>
                        geographies
                            .map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="none"
                                    stroke="black"
                                    strokeWidth={0.1}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { stroke: "#E63946", fill: "#F7F8F7" },
                                    }}
                                />
                            ))
                    }
                </Geographies>

                {markers.map(({ name, coordinates, connectorProps, stadium, cityX, cityY, stadiumX, stadiumY, boxX, boxY, boxWidth, boxHeight }) => (
                    <Marker
                        key={name}
                        coordinates={coordinates}
                        onMouseEnter={() => setHoverState({ name, stadium })}
                        onMouseLeave={() => setHoverState(null)}
                    >
                        <g
                            fill="none"
                            stroke={connectorProps.stroke}
                            strokeWidth={connectorProps.strokeWidth}
                            transform={`translate(-8, -16) scale(${markerScale})`}
                            className="cursor-pointer"
                        >
                            <circle cx="12" cy="10" r={3} fill={connectorProps.stroke} />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                        {hoverState && hoverState.name === name && (
                            <g transform="translate(0, -45)" style={{ pointerEvents: "none" }}>
                                <rect
                                    x={boxX}
                                    y={boxY}
                                    width={boxWidth}
                                    height={boxHeight}
                                    rx="5"
                                    fill="rgba(255, 255, 255, 1)"
                                    stroke="#333333"
                                    strokeWidth="1"
                                />
                                <text
                                    x={cityX}
                                    y={cityY}
                                    textAnchor="middle"
                                    style={{ fontFamily: "system-ui", fill: "black", fontSize: `${cityFontSize}px`, fontWeight: "bold" }}
                                >
                                    City: {name}
                                </text>
                                <text
                                    x={stadiumX}
                                    y={stadiumY}   // -15
                                    textAnchor="middle"
                                    style={{ fontFamily: "system-ui", fill: "black", fontSize: `${stadiumFontSize}px` }}
                                >
                                    Stadium: {stadium}
                                </text>
                            </g>
                        )}
                    </Marker>
                ))}
            </ComposableMap>
        </div >
    );
}

export default FifaMap;