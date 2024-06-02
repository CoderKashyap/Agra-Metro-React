import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const stations = [
  { stationName: "Taj East Gate", stationImgUrl: "" },
  { stationName: "Basai", stationImgUrl: "" },
  { stationName: "Fatehabad Road", stationImgUrl: "" },
  { stationName: "Taj Mahal", stationImgUrl: "" },
  { stationName: "Agra Fort", stationImgUrl: "" },
  { stationName: "Mankameshwar", stationImgUrl: "" },
];

const PlanYourJourneyCol = () => {
  const [fromStation, setFromStation] = useState("");
  const [showFromStation, setShowFromStation] = useState(false);
  const [fromStationObjRemake, setFromStationObjRemake] = useState<
    Array<{ stationName: string }>
  >([]);
  const [toStationObjRemake, setToStationObjRemake] = useState<
    Array<{ stationName: string }>
  >([]);

  const [toStation, setToStation] = useState("");
  const [showToStation, setShowToStation] = useState(false);

  useEffect(() => {
    if (stations) setFromStationObjRemake(stations);
    if (stations) setToStationObjRemake(stations);
  }, [stations]);

  const createFromStationsObjForDropdown = (stationName: string) => {
    const filteredStations = stations?.filter((station) =>
      station.stationName.toLowerCase().includes(stationName.toLowerCase())
    );
    setFromStationObjRemake(filteredStations);
    if (stationName.length > 0) {
      setShowFromStation(true);
    } else {
      setShowFromStation(false);
      setFromStationObjRemake(stations);
    }
  };

  const createToStationsObjForDropdown = (stationName: string) => {
    const filteredStations = stations?.filter((station) =>
      station.stationName.toLowerCase().includes(stationName.toLowerCase())
    );
    setToStationObjRemake(filteredStations);
    if (stationName.length > 0) {
      setShowToStation(true);
    } else {
      setShowToStation(false);
      setToStationObjRemake(stations);
    }
  };

  const resetPlanJourneyForm = () => {
    setFromStation("");
    setToStation("");
  };

  return (
    <>
      <div className="relative flex flex-col">
        <div
          onClick={() => {
            setShowFromStation(false);
            setShowToStation(false);
          }}
          className="before:absolute before:bg-contain before:h-56 before:w-full before:top-24 before:left-0 before:opacity-10 before:bg-no-repeat before:bg-center before:bg-[url('/watermarks/metro4.png')] relative shadow-md bg-[#daf3ff] border border-[#93c7df] p-4 rounded-lg "
        //   className="before:absolute before:bg-contain before:h-56 before:w-full before:top-24 before:left-4 sm:before:left-14 before:opacity-10 before:bg-no-repeat before:bg-center before:bg-[url('/watermarks/metro4.png')] relative shadow-md bg-[#daf3ff] border border-[#93c7df] p-4 rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-2">
            {" "}
            <img
              height="40px"
              width="40px"
              src="/UPMRC.png"
              alt="Metro Agra Logo"
            />{" "}
            <span className="text-lg font-medium text-gray-800">
              Plan Your Journey
            </span>
          </div>
          <div className="text-sm my-4 text-gray-700">
            Click here to plan through{" "}
            <span className="text-blue-600">Interactive Map</span>
          </div>

          <form className="md:py-4">
            {/* From Station */}
            <div onClick={(e) => e.stopPropagation()} className="relative">
              <label
                htmlFor="fromStation"
                className="text-sm font-medium text-red-700 block mb-1"
              >
                From
              </label>

              {fromStation && fromStation ? (
                <div
                  onClick={() => {
                    setShowFromStation(!showFromStation);
                    setShowToStation(false);
                    setFromStationObjRemake(stations);
                  }}
                  className="flex items-center justify-between cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-1.5"
                >
                  <div className="flex items-center">
                    <img
                      className="sm:h-7 sm:w-7 h-6 w-6 mx-2 object-contain"
                      src="/metroAgraLogo.webp"
                      data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                      loading="lazy" // Enable lazy loading in supporting browsers
                      alt="brandImage"
                    ></img>
                    <span className="mx-2"> {fromStation} </span>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setFromStation("");
                      setShowToStation(false);
                      setFromStationObjRemake(stations);
                    }}
                    className="rounded-full text-xs px-2 py-1.5 text-white bg-[#7ab5d0]"
                  >
                    <span className="hidden md:block">Search</span>{" "}
                    <span className="md:hidden block">
                      <SearchIcon fontSize="small" />
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => {
                      setShowToStation(false);
                      setShowFromStation(!showFromStation);
                    }}
                    className="flex justify-center items-center"
                  >
                    <input
                      type="text"
                      name="station"
                      id="fromStation"
                      className="shadow-sm border border-cyan-400 text-gray-800 sm:text-s rounded-md focus:outline-none focus:ring-0 focus:border-red-600 block w-full p-2"
                      placeholder="Search station or click to select"
                      onChange={(e) =>
                        createFromStationsObjForDropdown(e.target.value)
                      }
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-6 ${
                        showFromStation && "transform rotate-180"
                      } absolute right-2 text-gray-600 cursor-pointer`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </>
              )}

              {/* From station dropdown  */}
              {showFromStation && (
                <div
                  className={`p-0 border border-gray-300 absolute w-full z-10 rounded-b-lg bg-[#fffef7] overflow-y-auto h-auto max-h-68`}
                >
                  {fromStationObjRemake &&
                    fromStationObjRemake.map(
                      (station: { stationName: string }, index: number) => (
                        <div
                          onClick={() => {
                            setFromStation(station.stationName);
                            setShowFromStation(false);
                          }}
                          key={index}
                          className="px-2 relative flex gap-2 mx-2 my-3 items-center cursor-pointer"
                        >
                          {index < fromStationObjRemake.length - 1 && (
                            <span className="absolute top-4 rotate-90 -z-10 text-yellow-400">
                              <HorizontalRuleIcon />
                            </span>
                          )}

                          <span className="px-1.5 text-sm border border-yellow-400 bg-yellow-400 font-semibold text-white rounded-full">
                            {index + 1}
                          </span>
                          <span className="ml-2 text-md">
                            {" "}
                            {station.stationName}{" "}
                          </span>
                        </div>
                      )
                    )}

                  <div className="bg-[#f6d71a] bottom-0 left-0 right-0 flex justify-between items-center text-sm font-semibold text-white px-5 py-1.5">
                    {" "}
                    <span>Line 1</span>
                    <span className="flex justify-center items-center gap-2">
                      Yellow
                      <span className="px-1.5 bg-white text-yellow-300 rounded-full">
                        1
                      </span>{" "}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* To Station */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative my-4 md:my-6"
            >
              <label
                htmlFor="toStation"
                className="text-sm font-medium text-red-700 block mb-1"
              >
                To
              </label>

              {toStation && toStation ? (
                <div
                  onClick={() => {
                    setShowToStation(!showToStation);
                    setShowFromStation(false);
                    setToStationObjRemake(stations);
                  }}
                  className="flex items-center justify-between cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-1.5"
                >
                  <div className="flex items-center">
                    <img
                      className="sm:h-7 sm:w-7 h-6 w-6 ml-2 object-contain"
                      src="/metroAgraLogo.webp"
                      data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                      loading="lazy" // Enable lazy loading in supporting browsers
                      alt="brandImage"
                    ></img>
                    <span className="ml-2"> {toStation} </span>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setToStation("");
                      setShowFromStation(false);
                      setToStationObjRemake(stations);
                    }}
                    className="rounded-full text-xs px-2 py-1.5 text-white bg-[#7ab5d0]"
                  >
                    <span className="hidden md:block">Search</span>{" "}
                    <span className="md:hidden block">
                      <SearchIcon fontSize="small" />
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => {
                      setShowToStation(!showToStation);
                      setShowFromStation(false);
                    }}
                    className="flex justify-center items-center"
                  >
                    <input
                      type="text"
                      name="toStation"
                      id="toStation"
                      className="shadow-sm border border-cyan-400 text-gray-900 sm:text-s rounded-md focus:outline-none focus:ring-0 focus:border-red-600 block w-full p-2"
                      placeholder="Search station or click to select"
                      onChange={(e) =>
                        createToStationsObjForDropdown(e.target.value)
                      }
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-6 ${
                        showToStation && "transform rotate-180"
                      } absolute right-2 text-gray-600 cursor-pointer`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </>
              )}

              {/* To station dropdown  */}
              {showToStation && (
                <div
                  className={`p-0 border border-gray-300 absolute w-full z-10 rounded-b-lg bg-[#fffef7] overflow-y-auto h-auto max-h-68`}
                >
                  {toStationObjRemake &&
                    toStationObjRemake.map(
                      (station: { stationName: string }, index: number) => (
                        <div
                          onClick={() => {
                            setToStation(station.stationName);
                            setShowToStation(false);
                          }}
                          key={index}
                          className="px-2 relative flex gap-2 mx-2 my-3 items-center cursor-pointer"
                        >
                          {/* <img className="sm:h-18 sm:w-18 h-10 w-8 ml-2 object-contain" src="/metroAgraLogo.webp"
                                            data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                                            loading="lazy" // Enable lazy loading in supporting browsers
                                            alt="brandImage"></img> */}

                          {index < toStationObjRemake.length - 1 && (
                            <span className="absolute top-4 rotate-90 -z-10 text-yellow-400">
                              <HorizontalRuleIcon />
                            </span>
                          )}

                          <span className="px-1.5 text-sm border border-yellow-400 bg-yellow-400 font-semibold text-white rounded-full">
                            {index + 1}
                          </span>
                          <span className="ml-2 text-md">
                            {" "}
                            {station.stationName}{" "}
                          </span>
                        </div>
                      )
                    )}

                  <div className="bg-[#f6d71a] bottom-0 left-0 right-0 flex justify-between items-center text-sm font-semibold text-white px-5 py-1.5">
                    {" "}
                    <span>Line 1</span>
                    <span className="flex justify-center items-center gap-2">
                      Yellow
                      <span className="px-1.5 bg-white text-yellow-300 rounded-full">
                        1
                      </span>{" "}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex justify-between items-center">
              <button
                onClick={() => resetPlanJourneyForm()}
                className="font-medium text-gray-700 text-sm underline"
                type="reset"
              >
                Reset
              </button>
              <button
                className="bg-[#c0282c] rounded-md text-white font-medium text-sm p-2 px-6"
                type="submit"
              >
                Show Route & Fare
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlanYourJourneyCol;
