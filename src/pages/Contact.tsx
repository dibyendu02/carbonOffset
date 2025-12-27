import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Footer from "../components/Footer";
import contact from "../assets/contact/contact.png";
import Newsletter from "../components/Newsletter";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      setIsSubmitting(false);

      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <div>
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
          className="flex items-center justify-center relative px-4"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Contact Us</h1>

          <img src={curve} alt="Decorative curve" className="absolute bottom-0 w-full" />
        </div>
      </div>

      {/* contact form  */}

      <div className="flex flex-col lg:flex-row items-center my-16 px-4">
        <div className="w-full lg:w-1/2 flex flex-col items-start p-6 md:p-12 lg:p-20 bg-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Contact Us</h1>
          <h2 className="text-base md:text-lg mb-6">
            Our friendly team would love to hear from you
          </h2>
          {success && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row mb-4 sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    errors.firstName ? "border-red-500" : "focus:border-green-600"
                  }`}
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    errors.lastName ? "border-red-500" : "focus:border-green-600"
                  }`}
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-green-600"
                }`}
                id="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.phone ? "border-red-500" : "focus:border-green-600"
                }`}
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.message ? "border-red-500" : "focus:border-green-600"
                }`}
                id="message"
                placeholder="Your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-10">
          <img src={contact} alt="Contact illustration" className="w-full" />
        </div>
      </div>

      {/* newsletter  */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Contact;
