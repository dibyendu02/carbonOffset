import Navbar from "../components/Navbar";
import mainbg from "../assets/calculator/mainbg.png";
import subbg from "../assets/calculator/subbg.png";
import curve from "../assets/home/curve.png";
import Footer from "../components/Footer";

const CarbonCalculator = () => {
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
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase shadow-xl text-xs">
              electric
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              animals
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              heat
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              vehicle
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              air
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              rail
            </button>
            <button className="px-5 py-2 bg-white rounded-full border border-black uppercase text-xs hover:shadow-xl">
              shipping
            </button>
          </div>
          <div className="w-full flex px-20 p-16">
            <div className="w-1/2">
              <h1 className="text-3xl mb-8">
                Annual Household Electricity Useage
              </h1>
              <h1 className="text-xs">KWH</h1>
              <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
              />

              <h1 className="my-3">Tonnes CO2 : 0.00</h1>
              <h1>
                Total Cost : <span className="font-bold">$0.00</span>
              </h1>
              <div className="flex gap-5 mt-10">
                <button className="bg-green-600 hover:bg-green-500 w-48 py-4 text-white font-bold rounded-md">
                  Buy Now
                </button>
                <button className=" border border-green-600 w-48 py-4  font-bold rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3 pl-40">
              <h1 className="uppercase text-xs font-semibold tracking-widest">
                Emmision total tokens
              </h1>
              <div className="bg-white px-2 w-48 py-3 rounded-md border border-black ">
                <h1 className="font-semibold">Total 0.00 Tokens</h1>
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
