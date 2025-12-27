import { useState, FormEvent } from "react";
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Success
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${newsletterbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "150px",
      }}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-6 md:py-0 gap-6 md:gap-0"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
        <img src={logo} alt="1World1Nation Logo" className="w-24 md:w-auto" />
        <h1 className="text-lg md:text-xl text-white text-center md:text-left">
          Join Our Newsletter
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <div className="flex flex-col w-full sm:w-auto">
          <input
            className="w-full sm:w-60 h-10 rounded-md p-2 bg-white"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <span className="text-red-200 text-xs mt-1">{error}</span>
          )}
          {success && (
            <span className="text-green-200 text-xs mt-1">
              Successfully subscribed!
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md hover:bg-violet-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
