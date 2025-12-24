import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import main from "../assets/offset/main.png";
import road from "../assets/offset/road.png";
import certificate from "../assets/offset/certificate.png";
import Footer from "../components/Footer";
import { FaArrowRight, FaLock } from "react-icons/fa6";
import { PRICING } from "../lib/carbonCalculations";

type FrequencyType = "one-time" | "monthly" | "quarterly" | "yearly";
type PurchaseModeType = "dollar" | "token";

const OffsetNow = () => {
  const [purchaseMode, setPurchaseMode] = useState<PurchaseModeType>("dollar");
  const [amount, setAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<FrequencyType>("one-time");
  const [tokens, setTokens] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);

  // Calculate tokens and cost based on input
  useEffect(() => {
    const numAmount = parseFloat(amount) || 0;

    if (purchaseMode === "dollar") {
      // Calculate tokens from dollar amount
      const calculatedTokens = Math.floor(numAmount / PRICING.TOKEN_COST);
      setTokens(calculatedTokens);
      setCost(numAmount);
    } else {
      // Calculate cost from token amount
      const tokenAmount = parseInt(amount) || 0;
      setTokens(tokenAmount);
      setCost(tokenAmount * PRICING.TOKEN_COST);
    }
  }, [amount, purchaseMode]);

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
        <div className="h-full w-full bg-black/[0.4] flex justify-center items-center px-4">
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-center min-h-[70%] text-white">
            <h1 className="uppercase text-xs font-bold">offset now</h1>
            <h1 className="text-3xl md:text-5xl font-bold text-center">Purchase Carbon Credits</h1>

            {/* Purchase Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setPurchaseMode("dollar")}
                className={`${
                  purchaseMode === "dollar"
                    ? "bg-white text-green-600"
                    : "border-2 border-green-600"
                } font-bold px-4 md:px-7 py-2 rounded-md transition-colors`}
              >
                Dollar/INR Amount
              </button>
              <button
                onClick={() => setPurchaseMode("token")}
                className={`${
                  purchaseMode === "token"
                    ? "bg-white text-green-600"
                    : "border-2 border-green-600"
                } font-bold px-4 md:px-10 py-2 rounded-md transition-colors`}
              >
                Credit Amount
              </button>
            </div>

            {/* Purchase Form */}
            <div className="bg-white text-black w-full md:w-[80%] gap-4 p-5 rounded-md flex flex-col items-center">
              <h1 className="font-semibold">
                {purchaseMode === "dollar" ? "Enter Dollar Amount" : "Enter Token Amount"}
              </h1>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder={purchaseMode === "dollar" ? "100 $" : "10 tokens"}
                className="w-full h-14 text-2xl md:text-4xl font-bold text-center border-b-2 border-black focus:outline-none focus:border-green-600"
              />

              <h1 className="font-semibold">Select Frequency</h1>
              <div className="flex flex-wrap gap-3 justify-center w-full md:w-[70%]">
                <div
                  onClick={() => setFrequency("one-time")}
                  className={`w-28 md:w-32 text-center py-3 text-sm md:text-lg font-bold rounded-md cursor-pointer transition-colors ${
                    frequency === "one-time"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  One-Time
                </div>
                <div
                  onClick={() => setFrequency("monthly")}
                  className={`w-28 md:w-32 text-center py-3 text-sm md:text-lg font-bold rounded-md cursor-pointer transition-colors ${
                    frequency === "monthly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  Monthly
                </div>
                <div
                  onClick={() => setFrequency("quarterly")}
                  className={`w-28 md:w-32 text-center py-3 text-sm md:text-lg font-bold rounded-md cursor-pointer transition-colors ${
                    frequency === "quarterly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  Quarterly
                </div>
                <div
                  onClick={() => setFrequency("yearly")}
                  className={`w-28 md:w-32 text-center py-3 text-sm md:text-lg font-bold rounded-md cursor-pointer transition-colors ${
                    frequency === "yearly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  Yearly
                </div>
              </div>

              {/* Total Display */}
              <h1 className="text-xs tracking-[4px] uppercase font-bold">
                total <span className="text-green-600">{tokens} tokens</span>
              </h1>
              <h1 className="text-sm font-semibold">
                Cost: <span className="text-green-600">${cost.toFixed(2)}</span>
              </h1>

              <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[80%] rounded-full hover:bg-green-500 transition-colors">
                <h1 className="font-bold">Add to Wallet</h1>
                <FaLock />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator section */}
      <div className="bg-[#DEFFDD] p-8 md:p-20 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-center">
          <h1 className="uppercase text-xs font-bold">
            unsure about your impact ?
          </h1>
          <h1 className="text-2xl md:text-3xl w-full md:w-[70%] text-center">
            Use Our Calculator To See How Much Carbon To Offset
          </h1>
          <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[60%] rounded-full hover:bg-green-500 transition-colors">
            <h1 className="font-bold">Calculate Carbon footprint</h1>
            <FaArrowRight />
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-center">
          <h1 className="uppercase text-xs font-bold">
            Already Know Your Impact ?
          </h1>
          <h1 className="text-2xl md:text-3xl w-full md:w-[70%] text-center">
            Instantly Offset Your Carbon With Our Custom Purchase Tool
          </h1>
          <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[60%] rounded-full hover:bg-green-500 transition-colors">
            <h1 className="font-bold">Buy Carbon Credits Now</h1>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Certificate section */}
      <div className="flex flex-col md:flex-row">
        <div className="bg-black px-8 md:px-20 py-10 text-white w-full md:w-[70%]">
          <h1 className="uppercase text-xs font-bold">Proof Of Purchase</h1>
          <h1 className="text-2xl md:text-3xl w-full md:w-80">
            Receive A Certificate Upon Purchase
          </h1>
        </div>
        <div className="w-full md:w-[30%] relative min-h-[200px] md:min-h-0">
          <img src={road} alt="Road background" className="w-full h-full object-cover" />
          <img
            src={certificate}
            alt="Certificate preview"
            className="hidden md:block w-full absolute -top-10 -left-72"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OffsetNow;
