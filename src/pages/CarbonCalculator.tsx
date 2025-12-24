import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import mainbg from "../assets/calculator/mainbg.png";
import subbg from "../assets/calculator/subbg.png";
import curve from "../assets/home/curve.png";
import Footer from "../components/Footer";
import {
  CategoryType,
  CarbonFormState,
  INITIAL_FORM_STATE,
} from "../types/carbon";
import {
  calculateElectric,
  calculateAnimals,
  calculateHeat,
  calculateVehicle,
  calculateAir,
  calculateRail,
  calculateShipping,
  convertToTokensAndCost,
  parseInput,
  CalculationResult,
  CategoryBreakdown,
  ElectricInput,
  AnimalInput,
  HeatInput,
  VehicleInput,
  AirInput,
  RailInput,
  ShippingInput,
} from "../lib/carbonCalculations";
import { generateOffsetReport } from "../lib/pdfExport";
import { FaFileDownload } from "react-icons/fa";

const CarbonCalculator = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>("electric");
  const [formData, setFormData] =
    useState<CarbonFormState>(INITIAL_FORM_STATE);
  const [result, setResult] = useState<CalculationResult>({
    totalKgCO2: 0,
    totalTonsCO2: 0,
    totalTokens: 0,
    totalCost: 0,
  });

  // Helper function to parse form inputs to calculation inputs
  const parseInputs = <T extends Record<string, string>>(
    inputs: T
  ): Record<keyof T, number> => {
    const parsed: any = {};
    for (const key in inputs) {
      parsed[key] = parseInput(inputs[key]);
    }
    return parsed;
  };

  // Calculate category breakdown
  const getBreakdown = (): CategoryBreakdown => {
    return {
      electric: calculateElectric(
        parseInputs(formData.electric) as ElectricInput
      ),
      animals: calculateAnimals(parseInputs(formData.animals) as AnimalInput),
      heat: calculateHeat(parseInputs(formData.heat) as HeatInput),
      vehicle: calculateVehicle(
        parseInputs(formData.vehicle) as VehicleInput
      ),
      air: calculateAir(parseInputs(formData.air) as AirInput),
      rail: calculateRail(parseInputs(formData.rail) as RailInput),
      shipping: calculateShipping(
        parseInputs(formData.shipping) as ShippingInput
      ),
    };
  };

  // Real-time calculation effect
  useEffect(() => {
    const breakdown = getBreakdown();
    const totalCO2 =
      breakdown.electric +
      breakdown.animals +
      breakdown.heat +
      breakdown.vehicle +
      breakdown.air +
      breakdown.rail +
      breakdown.shipping;

    setResult(convertToTokensAndCost(totalCO2));
  }, [formData]);

  // Handle input changes
  const handleInputChange = (
    category: CategoryType,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  // Handle PDF export
  const handleExportPDF = () => {
    const breakdown = getBreakdown();
    generateOffsetReport({
      userName: "User", // In production, this would come from auth context
      calculations: result,
      breakdown,
    });
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          width: "100%",
        }}
        className="flex items-center justify-center relative"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white px-4 text-center">
          Individual Emissions Calculator
        </h1>

        <img src={curve} alt="Decorative curve" className="absolute bottom-0 w-full" />
      </div>

      {/* Calculator section */}
      <div className="p-4 md:p-10 flex flex-col gap-10 md:gap-20 items-center">
        <h1 className="text-base md:text-2xl w-full md:w-[80%] text-center px-4">
          Please complete each step of the emissions calculator that is relevant
          to your lifestyle, using actual (or estimated) annual operational
          data.
        </h1>

        <div className="w-full md:w-[90%] lg:w-[80%] bg-[#EBFFEA] rounded-xl">
          {/* Tab buttons */}
          <div className="flex flex-wrap p-4 md:p-10 md:px-20 justify-center md:justify-between border-b border-black gap-2">
            {(
              [
                "electric",
                "animals",
                "heat",
                "vehicle",
                "air",
                "rail",
                "shipping",
              ] as CategoryType[]
            ).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-5 py-2 bg-white rounded-full border border-black uppercase text-xs transition-shadow ${
                  activeTab === tab ? "shadow-xl" : "hover:shadow-xl"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Category forms */}
          <div className="w-full flex flex-col lg:flex-row px-4 md:px-20 p-8 md:p-16">
            <div className="w-full lg:w-1/2">
              {/* Electric Form */}
              {activeTab === "electric" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Household Electricity Usage
                  </h1>
                  <h1 className="text-xs">KWH</h1>
                  <input
                    className="my-4 p-2 rounded-md w-full md:w-80 border border-black"
                    placeholder="0"
                    type="number"
                    value={formData.electric.annualKwh}
                    onChange={(e) =>
                      handleInputChange("electric", "annualKwh", e.target.value)
                    }
                  />
                </div>
              )}

              {/* Animals Form */}
              {activeTab === "animals" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Livestock Emissions
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Number of Cows/Cattle</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.animals.cows}
                        onChange={(e) =>
                          handleInputChange("animals", "cows", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Number of Pigs</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.animals.pigs}
                        onChange={(e) =>
                          handleInputChange("animals", "pigs", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Number of Chickens</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.animals.chickens}
                        onChange={(e) =>
                          handleInputChange(
                            "animals",
                            "chickens",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Number of Sheep</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.animals.sheep}
                        onChange={(e) =>
                          handleInputChange("animals", "sheep", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Heat Form */}
              {activeTab === "heat" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Home Heating Usage
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Natural Gas (kWh)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.heat.naturalGasKwh}
                        onChange={(e) =>
                          handleInputChange(
                            "heat",
                            "naturalGasKwh",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Heating Oil (kWh)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.heat.oilKwh}
                        onChange={(e) =>
                          handleInputChange("heat", "oilKwh", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Propane (kWh)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.heat.propaneKwh}
                        onChange={(e) =>
                          handleInputChange(
                            "heat",
                            "propaneKwh",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Wood (kWh)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.heat.woodKwh}
                        onChange={(e) =>
                          handleInputChange("heat", "woodKwh", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Vehicle Form */}
              {activeTab === "vehicle" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Vehicle Miles Driven
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Gasoline Car (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.vehicle.gasolineMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "vehicle",
                            "gasolineMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Diesel Car (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.vehicle.dieselMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "vehicle",
                            "dieselMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Hybrid Car (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.vehicle.hybridMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "vehicle",
                            "hybridMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Electric Vehicle (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.vehicle.evMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "vehicle",
                            "evMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Air Form */}
              {activeTab === "air" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Air Travel Miles
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Short-Haul Flights (&lt;500 miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.air.shortHaulMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "air",
                            "shortHaulMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">
                        Medium-Haul Flights (500-1500 miles)
                      </h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.air.mediumHaulMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "air",
                            "mediumHaulMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Long-Haul Flights (&gt;1500 miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.air.longHaulMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "air",
                            "longHaulMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Rail Form */}
              {activeTab === "rail" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Rail Travel Miles
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Commuter Rail/Metro (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.rail.commuterMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "rail",
                            "commuterMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Regional Trains (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.rail.regionalMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "rail",
                            "regionalMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">High-Speed Rail (miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.rail.highSpeedMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "rail",
                            "highSpeedMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping Form */}
              {activeTab === "shipping" && (
                <div>
                  <h1 className="text-2xl md:text-3xl mb-8">
                    Annual Freight Shipping (Ton-Miles)
                  </h1>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xs">Container Ship (ton-miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.shipping.containerTonMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "containerTonMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Bulk Carrier (ton-miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.shipping.bulkTonMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "bulkTonMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <h1 className="text-xs">Oil Tanker (ton-miles)</h1>
                      <input
                        className="my-2 p-2 rounded-md w-full md:w-80 border border-black"
                        placeholder="0"
                        type="number"
                        value={formData.shipping.tankerTonMiles}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "tankerTonMiles",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="mt-8">
                <h1 className="my-3">
                  Tonnes CO2: {result.totalTonsCO2.toFixed(2)}
                </h1>
                <h1>
                  Total Cost: <span className="font-bold">${result.totalCost.toFixed(2)}</span>
                </h1>
                <div className="flex gap-3 md:gap-5 mt-10 flex-wrap">
                  <button className="bg-green-600 hover:bg-green-500 w-full md:w-48 py-4 text-white font-bold rounded-md">
                    Buy Now
                  </button>
                  <button className="border border-green-600 w-full md:w-48 py-4 font-bold rounded-md hover:bg-green-50">
                    Add to Cart
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="border border-blue-600 w-full md:w-48 py-4 text-blue-600 font-bold rounded-md hover:bg-blue-50 flex items-center justify-center gap-2"
                  >
                    <FaFileDownload />
                    Export PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Emission total */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:pl-20 xl:pl-40 mt-8 lg:mt-0">
              <h1 className="uppercase text-xs font-semibold tracking-widest">
                Emission Total Tokens
              </h1>
              <div className="bg-white px-2 w-full md:w-48 py-3 rounded-md border border-black">
                <h1 className="font-semibold">
                  Total {result.totalTokens} Tokens
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculation methods */}
      <div
        style={{
          backgroundImage: `url(${subbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
        }}
        className="px-4 md:px-48 flex items-center relative"
      >
        <div className="bg-white w-full md:w-[70%] lg:w-[40%] flex flex-col gap-3 p-6">
          <h1 className="font-semibold text-xs uppercase">
            Calculation Methods
          </h1>
          <h1 className="text-2xl md:text-3xl">
            The data for this calculator comes from the EPA and U.S. Department
            of Energy. See our Calculation Methods page for more information.
          </h1>
          <button className="bg-green-600 w-40 py-2 rounded-full font-semibold text-white hover:bg-green-500">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarbonCalculator;
