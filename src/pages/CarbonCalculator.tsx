import Navbar from "../components/Navbar";
import mainbg from "../assets/calculator/mainbg.png";
import subbg from "../assets/calculator/subbg.png";
import curve from "../assets/home/curve.png";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Vehicle from "../components/Calculator/Vehicles";
import NaturalGas from "../components/Calculator/NaturalGas";
import Electricity from "../components/Calculator/Electricity";
import FuelOil from "../components/Calculator/FuelOil";
import Propane from "../components/Calculator/Propane";
import Waste from "../components/Calculator/Waste";


const factors = ["Vehicle", "Natural Gas", "Electricity", "Fuel Oil", "Propane", "Waste"];

const emissionFactorVehicle = 19.6
const emissionFactorNaturalGas = 11.7
const emissionFactorElectricity = 0.000417
const emissionFactorFuelOil = 22.61
const emissionFactorPropane = 12.43
const emissionFactorWaste = 692

const naturalGasConversion = 10.23

const CarbonCalculator = () => {
  const [factor, setFactor] = useState("Vehicle");
  const [totalCO2, setTotalCO2] = useState(0.00);
  const [totalCost, setTotalCost] = useState(0.00);
  const [vehicleCO2, setVehicleCO2] = useState(0.00);
  const [naturalGasCO2, setNaturalGasCO2] = useState(0.00);
  const [electricityCO2, setElectricityCO2] = useState(0.00);
  const [fuelOilCO2, setFuelOilCO2] = useState(0.00);
  const [propaneCO2, setPropaneCO2] = useState(0.00);
  const [wasteCO2, setWasteCO2] = useState(0);

  const calculateTotalCO2 = () => {
    const totalEmissions = (
      vehicleCO2 * emissionFactorVehicle +
      naturalGasCO2 / naturalGasConversion * emissionFactorNaturalGas +
      electricityCO2 * emissionFactorElectricity +
      fuelOilCO2 * emissionFactorFuelOil +
      propaneCO2 * emissionFactorPropane +
      wasteCO2 * emissionFactorWaste
    );
    return parseFloat(totalEmissions.toFixed(2));
  };

  const calculateTotalCost = (co2: number) => {
    const tokenConversion = 0.1;
    return parseFloat((co2 * tokenConversion).toFixed(2));
  };

  useEffect(() => {
    const co2 = calculateTotalCO2();
    setTotalCO2(co2);
    setTotalCost(calculateTotalCost(co2));
  }, [vehicleCO2, naturalGasCO2, electricityCO2, fuelOilCO2, propaneCO2, wasteCO2]);
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
        <h1 className="text-5xl font-bold text-white">
          Individual Emissions Calculator
        </h1>

        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* calculator section  */}
      <div className="p-10 flex flex-col gap-20 items-center">
        <h1 className="text-2xl w-[80%] text-center">
          Please complete each step of the emissions calculator that is relevant
          to your lifestyle, using actual (or estimated) annual operational
          data.
        </h1>

        <div className="w-[80%] bg-[#EBFFEA]  rounded-xl">
          <div className="flex p-10 px-20 justify-between border-b border-black">
            {
              factors.map((item) => (
                <button
                  onClick={() => setFactor(item)}
                  className={`px-5 py-2 ${factor === item ? 'bg-[#16A34A] border-white text-white' : 'bg-white border-black'} rounded-full border  uppercase shadow-xl text-xs`}>
                  {item}
                </button>
              ))
            }

          </div>
          <div className="w-full flex px-20 p-16">
            <div className="w-1/2">
              {
                factor === "Vehicle" && <Vehicle addInput={setVehicleCO2} />
              }
              {
                factor === "Natural Gas" && <NaturalGas addInput={setNaturalGasCO2} />
              }
              {
                factor === "Electricity" && <Electricity addInput={setElectricityCO2} />
              }
              {
                factor === "Fuel Oil" && <FuelOil addInput={setFuelOilCO2} />
              }
              {
                factor === "Propane" && <Propane addInput={setPropaneCO2} />
              }
              {
                factor === "Waste" && <Waste addInput={setWasteCO2} />
              }


              <h1 className="my-3">Tonnes CO2 : {totalCO2}</h1>
              <h1>
                Total Cost : <span className="font-bold">${totalCost}</span>
              </h1>
            </div>

            <div className="w-1/2 flex flex-col gap-3 pl-40">
              <div className="flex flex-col gap-3">
                <h1 className="uppercase text-xs font-semibold tracking-widest">
                  Emmision total tokens
                </h1>
                <div className="bg-white px-2 w-48 py-3 rounded-md border border-black ">
                  <h1 className="font-semibold">Total 0.00 Tokens</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <button className="bg-green-600 hover:bg-green-500 w-48 py-4 text-white font-bold rounded-md">
                  Buy Now
                </button>
                <button className=" border border-green-600 w-48 py-4  font-bold rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* calculation methods  */}
      <div
        style={{
          backgroundImage: `url(${subbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
        }}
        className="px-48 flex items-center relative"
      >
        <div className="bg-white w-[40%] flex flex-col gap-3 p-6">
          <h1 className="font-semibold text-xs uppercase">
            Calculation Methods
          </h1>
          <h1 className="text-3xl ">
            The data for this calculator comes from the EPA and U.S. Department
            of Energy. See our Calculation Methods page for more information.
          </h1>
          <button className="bg-green-600 w-40 py-2 rounded-full font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarbonCalculator;
