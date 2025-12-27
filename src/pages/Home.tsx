import Navbar from "../components/Navbar";
import heroImg from "../assets/home/hero.png";
import curve from "../assets/home/curve.png";
import individual from "../assets/home/individual.png";
import farm from "../assets/home/farm.png";
import bg from "../assets/home/bg.png";
import howWeWork from "../assets/home/howWeWork.png";
import future1 from "../assets/home/future1.png";
import future2 from "../assets/home/future2.png";
import future3 from "../assets/home/future3.png";
import projectbg1 from "../assets/home/projectbg1.png";
import projectbg2 from "../assets/home/projectbg2.png";
import projectbg3 from "../assets/home/projectbg3.png";
import { FaTree } from "react-icons/fa6";
import "../index.css"; // Ensure you import the CSS file
import { FaArrowRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const FutureData = [
  {
    title: "Renewable Energy initiatives",
    image: future1,
  },
  {
    title: "Urban Green Spaces",
    image: future2,
  },
  {
    title: "Sustainable agriculture Practices",
    image: future3,
  },
];

const ProjectData = [
  {
    title: "Clean Kailash",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg1,
  },
  {
    title: "Urban Green Spaces",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg2,
  },
  {
    title: "Sustainable agriculture Practices",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg3,
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="flex flex-col gap-3 justify-center items-center relative px-4"
      >
        <h1 className="text-white font-bold text-sm md:text-lg mt-20 text-center">
          SAFEGUARDING NATURE FOR FUTURE GENERATIONS
        </h1>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold w-full md:w-3/4 lg:w-1/2 text-center">
          Working Towards A Sustainable World
        </h1>
        <button className="px-5 py-2 mt-10 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold hover:bg-green-500 transition-colors">
          <FaTree /> Offset Now
        </button>

        <img src={curve} alt="Decorative curve" className="absolute bottom-20 w-full" />

        <div className="bg-white w-full h-20 absolute bottom-0"></div>
      </div>

      {/* Onboarding */}
      <div className="bg-white min-h-[50vh] lg:h-[50vh] relative px-4 md:px-8 lg:px-0">
        <div className="bg-white mx-0 md:mx-8 lg:mx-16 flex flex-col lg:flex-row border border-green-600 absolute -top-20 md:-top-32 lg:-top-44">
          <div className="p-5 w-full lg:w-1/2 px-6 md:px-10 lg:px-14 border-b lg:border-r lg:border-b-0 border-green-600">
            <h1 className="uppercase text-xs md:text-sm font-bold">
              Sustainability Options For
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold my-3">Individuals</h1>
            <h1 className="text-base md:text-lg w-full md:w-[90%] mb-10">
              You can be a leader in the fight against climate change. Offset
              your carbon footprint and support our industry-leading projects!
            </h1>
            <div className="relative mb-8 lg:mb-0">
              <button className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full absolute -top-5 left-5 hover:bg-green-500 transition-colors">
                <h1>Learn More</h1>
                <FaArrowRight />
              </button>
              <img src={individual} alt="Individual sustainability" />
            </div>
          </div>

          <div className="p-5 w-full lg:w-1/2 px-6 md:px-10 lg:px-14 border-r border-green-600">
            <h1 className="uppercase text-xs md:text-sm font-bold">
              Sustainability Options For
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold my-3">Farm Onboarding</h1>
            <h1 className="text-base md:text-lg w-full md:w-[90%] mb-10">
              We can help Farm Onboarding of all sizes measure and offset their
              carbon footprint!
            </h1>
            <div className="relative">
              <button className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full absolute -top-5 left-5 hover:bg-green-500 transition-colors">
                <h1>Learn More</h1>
                <FaArrowRight />
              </button>
              <img src={farm} alt="Farm onboarding" />
            </div>
          </div>
        </div>
      </div>

      {/* call to action  */}

      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
        className="flex flex-col lg:flex-row items-center px-4 py-8 lg:py-0"
      >
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col gap-6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Purchase Carbon Credits</h1>
          <h1 className="text-base md:text-lg">
            A whopping 50,000 pounds a year! That's the average carbon footprint
            from our home, work, travel and everything else we do and buy. You
            can be a leader in the fight against climate change. Offset your
            carbon footprint and support our industry-leading carbon reduction
            projects.
          </h1>
          <h1 className="text-base md:text-lg w-full lg:w-[80%] mt-4">
            Need help? Use our calculators find out how much carbon to offset.
          </h1>
          <button className="bg-green-600 px-3 py-2 rounded-full w-full md:w-80 hover:bg-green-500 transition-colors">
            Individual Carbon Footprint Calculator
          </button>
        </div>

        {/* buying area  */}

        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-center min-h-[70%] text-white mt-8 lg:mt-0">
          <h1 className="uppercase text-xs font-bold">I want to offset by</h1>
          <div className="flex gap-2 flex-wrap justify-center">
            <button className="bg-white text-green-600 font-bold px-4 md:px-7 py-2 rounded-md">
              Dollar/INR Amount
            </button>
            <button className="border-2 border-green-600 font-bold px-6 md:px-10 py-2 rounded-md hover:bg-green-600 transition-colors">
              Credit Amount
            </button>
          </div>
          <div className="bg-white text-black w-full md:w-[90%] lg:w-[80%] gap-4 p-5 rounded-md flex flex-col items-center">
            <h1 className="font-semibold">Enter Dollar Amount</h1>
            <input
              placeholder="100 $"
              className="w-full h-14 text-2xl md:text-3xl lg:text-4xl font-bold text-center border-b-2 border-black focus:outline-none focus:border-green-600"
            />
            <h1 className="font-semibold">Select Frequency</h1>
            <div className="flex flex-wrap gap-3 justify-center w-full md:w-[70%]">
              <div className="w-28 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-base md:text-lg font-bold rounded-md cursor-pointer transition-colors">
                One-Time
              </div>
              <div className="w-28 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-base md:text-lg font-bold rounded-md cursor-pointer transition-colors">
                Monthly
              </div>
              <div className="w-28 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-base md:text-lg font-bold rounded-md cursor-pointer transition-colors">
                Quarterly
              </div>
              <div className="w-28 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-base md:text-lg font-bold rounded-md cursor-pointer transition-colors">
                Yearly
              </div>
            </div>
            <h1 className="text-xs tracking-[4px] uppercase font-bold">
              total <span className="text-green-600">10 tokens</span>
            </h1>
            <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[80%] rounded-full hover:bg-green-500 transition-colors">
              <h1 className="font-bold">Add to Wallet</h1>
              <FaLock />
            </button>
          </div>
        </div>
      </div>

      {/* how we work  */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-6 md:p-10 gap-6">
        <div className="w-full lg:w-1/3">
          <div className="flex gap-2 items-center">
            <FaLeaf color="green" />
            <h1 className="uppercase font-bold text-sm text-green-600">
              How We Work
            </h1>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mt-3">
            We Work Together For Bettering Tomorrow
          </h1>
        </div>
        <img src={howWeWork} alt="How we work illustration" className="w-full lg:w-auto max-w-md" />
      </div>
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 lg:px-32 py-5 gap-6 md:gap-10 lg:gap-14">
        {FutureData.map((item, index) => (
          <div
            key={index}
            className="p-5 flex flex-col gap-3 border border-green-600 hover:shadow-lg transition-shadow"
          >
            <img src={item.image} alt={item.title} className="w-full" />
            <h1 className="text-base md:text-lg">{item.title}</h1>
            <FaArrowRight color="green" />
          </div>
        ))}
      </div>

      {/* our projects  */}
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-5 px-4">Our Projects</h1>

        <div className="flex flex-col md:flex-row p-6 md:p-10 px-6 md:px-16 lg:px-32 gap-6 md:gap-10 lg:gap-20">
          {ProjectData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
              className="w-full md:w-[35%] flex flex-col gap-6 text-white rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="w-full h-full bg-black/[0.6] p-6">
                <h1 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h1>
                <h1 className="text-sm md:text-base line-clamp-6">{item.desc}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-green-600 py-2 px-8 rounded-md text-white text-base font-bold my-5 hover:bg-green-500 transition-colors">
            View More Projects
          </button>
        </div>
      </div>

      {/* newsletter  */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
