import Navbar from "../components/Navbar";
import main from "../assets/offset/main.png";
import road from "../assets/offset/road.png";
import certificate from "../assets/offset/certificate.png";
import Footer from "../components/Footer";
import { FaArrowRight, FaLock } from "react-icons/fa6";
import { useState } from "react";

const OffsetNow = () => {
  const [amount, setAmount] = useState(0);
  const handleClick = async () => {

  }
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="h-full w-full bg-black/[0.4] flex justify-center items-center">
          <div className="w-1/2 flex flex-col gap-5 items-center h-[70%] text-white">
            <h1 className="uppercase text-xs font-bold">offset now</h1>
            <h1 className="text-5xl font-bold">Purchase Carbon Credits</h1>
            <div className="flex gap-2">
              <button className="bg-white text-green-600 font-bold px-7 py-2 rounded-md">
                Dollar/INR Amount
              </button>
              <button className="border-2 border-green-600 font-bold px-10 py-2 rounded-md">
                Credit Amount
              </button>
            </div>
            <div className="bg-white text-black w-[80%] gap-4 p-5 rounded-md flex flex-col items-center ">
              <h1 className="font-semibold">Enter Dollar Amount</h1>
              <input
                placeholder="100 $"
                value={amount}
                // onChange={(e) => setAmount(e.target.value)}
                className="w-full h-14 text-4xl font-bold text-center border-b-2 border-black focus:outline-none focus:border-b-2"
              />
              <h1 className="font-semibold">Select Frequency</h1>
              <div className="flex flex-wrap gap-3 w-[50%]">
                <div className="w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                  One-Time
                </div>
                <div className="w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                  Monthly
                </div>
                <div className="w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                  Quarterly
                </div>
                <div className="w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                  Yearly
                </div>
              </div>
              <h1 className="text-xs tracking-[4px] uppercase font-bold">
                total <span className="text-green-600">10 tokens</span>
              </h1>
              <button
                onClick={() => handleClick()}
                className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-[80%] rounded-full">
                <h1 className="font-bold">Add to Wallet</h1>
                <FaLock />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* calculator  */}

      <div className="bg-[#DEFFDD] p-20 flex ">
        <div className="w-1/2 flex flex-col gap-5 items-center ">
          <h1 className="uppercase text-xs font-bold">
            unsure about your impact ?
          </h1>
          <h1 className="text-3xl w-[70%] text-center">
            Use Our Calculator To See How Much Carbon To Offset
          </h1>
          <button className="flex justify-between  px-6 py-3 bg-green-600 items-center text-white w-[40%] rounded-full">
            <h1 className="font-bold">Calculate Carbon footprint</h1>
            <FaArrowRight />
          </button>
        </div>
        <div className="w-1/2 flex flex-col gap-5 items-center ">
          <h1 className="uppercase text-xs font-bold">
            Already Know Your Impact ?
          </h1>
          <h1 className="text-3xl w-[70%] text-center">
            Instantly Offset Your Carbon With Our Custom Purchase Tool
          </h1>
          <button className="flex justify-between  px-6 py-3 bg-green-600 items-center text-white w-[40%] rounded-full">
            <h1 className="font-bold">Buy Carbon Credits Now</h1>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* certificate */}
      <div className="flex">
        <div className="bg-black px-20 py-10 text-white w-[70%]">
          <h1 className="uppercase text-xs font-bold">Proof Of Purchase</h1>
          <h1 className="text-3xl w-80">Receive A Certificate Upon Purchase</h1>
        </div>
        <div className="w-[30%] relative">
          <img src={road} className="w-full" />
          <img src={certificate} className="w-full absolute -top-10 -left-72" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OffsetNow;
