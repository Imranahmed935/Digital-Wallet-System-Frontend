/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_3vadbk3",
        "template_tddw8te",
        formData,
        "7lGJvGVZeWienpTMV"
      );
      setSuccess("Message sent successfully!");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again.");
      setSuccess("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact with <span className="text-violet-600">ZPay's</span></h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have any questions? Reach out to us and we'll get back to you promptly.
          </p>
        </div>

 
        <div className="flex flex-col lg:flex-row gap-10">

          <div className="flex-1 bg-white p-8 rounded-xl shadow-md space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-600">imrantahir9918@gmail.com</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+880 1734890724</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-600">Sylhet, Bangladesh</p>
            </div>
          </div>

      
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
            {success && (
              <p
                className={`mb-4 font-medium text-center ${
                  success.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-600"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>


        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.914278435354!2d90.39299931543153!3d23.81033218459143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b2b7f71f2b%3A0x2f0d5eec76cf0b8d!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1694949800000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZPay Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
