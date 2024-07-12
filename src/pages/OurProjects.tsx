import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/projects/mainbg.png";
import vehicle from "../assets/projects/vehicle.png";
import trees from "../assets/projects/trees.png";
import Footer from "../components/Footer";
import road from "../assets/offset/road.png";
import certificate from "../assets/offset/certificate.png";
import { FaArrowRight, FaTree } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";

const OurProjects = () => {
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
          Carbon Footprint Offset
        </h1>

        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* vehicle and tress  */}

      <div className="p-10 flex flex-col ">
        <h1 className="text-3xl px-16 my-10 text-center">
          That’s the average American’s carbon footprint from our home, work,
          travel, and everything else we do and buy. You can be a leader in the
          fight against climate change. Offset your carbon footprint and support
          our industry-leading carbon reduction projects. Thank you!
        </h1>

        <div className="flex gap-20  w-full justify-center my-16 ">
          <div
            style={{
              backgroundImage: `url(${vehicle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              width: "40%",
            }}
            className="flex justify-center items-center cursor-pointer group rounded-xl"
          >
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaCarRear color="white" size={40} />
              <h1 className="text-xl font-bold text-white">Vehicle</h1>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${trees})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              width: "40%",
            }}
            className="flex justify-center items-center cursor-pointer group rounded-xl"
          >
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaTree color="white" size={40} />
              <h1 className="text-xl font-bold text-white">Trees</h1>
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

export default OurProjects;
