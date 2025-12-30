/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import web from "../assets/web.webp";

const faqs = [
  {
    question: "What is ZPay?",
    answer:
      "ZPay is a secure and user-friendly fintech platform that allows you to manage your finances, send money, and track transactions effortlessly.",
  },
  {
    question: "Is ZPay safe to use?",
    answer:
      "Absolutely! ZPay uses top-level encryption and security protocols to ensure your money and data are fully protected.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click 'Sign Up', enter your details, verify your email, and start using ZPay instantly.",
  },
  {
    question: "Are there any fees for transactions?",
    answer:
      "ZPay offers competitive and transparent fees. You’ll always see the cost before confirming any transaction.",
  },
  {
    question: "How can I contact ZPay support?",
    answer:
      "Our support team is available 24/7 via live chat, email, or the contact form in your dashboard.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex justify-center w-2xl">
          <img
            src={web}
            alt="Fintech Illustration"
            className="w-full animate-fadeIn rounded"
          />
        </div>

        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-accent-foreground mb-6 text-center lg:text-left">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 dark:bg-accent rounded-xl p-5 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-indigo-400/40"
            >
              <button
                className="flex justify-between w-full text-left font-semibold dark:text-accent-foreground text-gray-800 text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-indigo-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 dark:text-accent-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
