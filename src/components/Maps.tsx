// import { LuFishSymbol } from "react-icons/lu";

const Maps = () => {
    return (
        <div className="flex w-full h-screen shadow-lg p-2 mt-48 px-12">
            {/* <div className="sticky w-full flex justify-between items-center z-20 py-4 px-4 top-10">
                <h3 className="text-sm bg-white rounded-2xl px-4 py-1 text-gray-700 flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center">
                        <LuFishSymbol size={20} />
                    </div>
                    <span className="font-medium tracking-wide">EXPLORE FISHING SPOTS</span>
                </h3>
                <button className="text-sm bg-white rounded-xl px-4 py-2 text-gray-700 font-medium transition-all duration-100 shadow-sm hover:rounded-full hover:bg-blue-400">
                    FIND NEW SPOT
                </button>
            </div> */}

            <div className="content w-1/2">
                <h2 className="text-6xl uppercase">Know When and where to fish, with our Largest map of fishing.</h2>
                <div className="map-container bg-white/90 rounded-2xl p-4 border-2 border-black mt-12">
                    <style>
                        {`
    .map-container {
        width: 620px;
        height: 320px;
        position: relative;
    }

    .map-background {
        border-radius: inherit;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .map-cities {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .map-city {
        --city-radius: 1rem;
        border-radius: var(--city-radius);
        left: calc(var(--x) * 1% - var(--city-radius));
        padding: var(--city-radius);
        position: absolute;
        top: calc(var(--y) * 1% - var(--city-radius));
        cursor: pointer;
    }

    .map-city::after,
    .map-city::before {
        --city-pin-size-font: 0.8rem;
        font-size: var(--city-pin-size-font);
    }

    .map-city::before {
        content: "•";
        left: calc(-50% + var(--city-radius));
        position: absolute;
        top: calc(-0.65em + var(--city-radius));
        text-align: center;
        text-shadow: 0 1px 1px #000;
        width: 100%;
    }

    .map-city::after {
        clip-path: inset(-0.5em 0 0 0);
        content: "📍";
        left: calc(-50% + var(--city-radius));
        position: absolute;
        top: calc(-1em + var(--city-radius));
        text-align: center;
        transition: all 300ms ease-out;
        width: 100%;
    }

    .map-city__label {
        display: none;
        left: calc(-5em + 50%);
        position: absolute;
        text-align: center;
        width: 10em;
        z-index: 999;
    }

    .map-city__sign {
        --city-sign-color-back: #00c080;
        --city-sign-color-font: #fff;
        align-items: center;
        background-color: var(--city-sign-color-back);
        border-radius: 0.2rem;
        border: 0.15em solid var(--city-sign-color-font);
        box-shadow: 0 0 3px #000;
        color: var(--city-sign-color-font);
        column-gap: 0.3em;
        display: flex;
        font-weight: 700;
        justify-content: center;
        margin: 0 auto;
        max-width: 100%;
        overflow: hidden;
        padding: 0.4em 0.6em 0.4em 0.3em;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: max-content;
        font-size: 0.8rem;
    }

    .map-city__sign::before {
        content: attr(data-icon);
    }

    .map-city:hover::after {
        clip-path: inset(-0.5em 0 0.5em 0);
        transform: translateY(0.5em);
    }

    .map-city:hover .map-city__label {
        animation: fadein 300ms forwards ease-out;
        display: block;
    }

    @keyframes fadein {
        0% {
            opacity: 0;
            top: calc(var(--city-radius));
        }
        100% {
            opacity: 1;
            top: calc(var(--city-radius) + var(--city-pin-size-font) / 2);
        }
    }
`}
                    </style>
                    <svg viewBox="0 0 500 500" className="map-background">
                        <rect style={{ fill: "#f5f0e5" }} width="100%" height="100%"></rect>
                        <path
                            style={{ fill: "#90daee" }}
                            d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z"
                        ></path>
                    </svg>
                    <div className="map-cities">
                        <div style={{ "--x": 5, "--y": 67 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🏖️" className="map-city__sign">Beach city</span>
                            </div>
                        </div>
                        <div style={{ "--x": 32, "--y": 32 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🌷" className="map-city__sign">Flower city</span>
                            </div>
                        </div>
                        <div style={{ "--x": 58, "--y": 83 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🏄" className="map-city__sign">Surf city</span>
                            </div>
                        </div>
                        <div style={{ "--x": 65, "--y": 22 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🏛️" className="map-city__sign">Capital city</span>
                            </div>
                        </div>
                        <div style={{ "--x": 87, "--y": 58 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🎢" className="map-city__sign">Funland</span>
                            </div>
                        </div>
                        <div style={{ "--x": 94, "--y": 38 } as React.CSSProperties} className="map-city">
                            <div className="map-city__label">
                                <span data-icon="🌊" className="map-city__sign">Coast city</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[85vh] w-1/2 relative bg-gray-50 rounded-2xl border-[5px] border-white">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d491201.0123456789!2d45.7010236!3d-15.7638108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1635786889174!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maps;