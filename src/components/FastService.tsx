
import s6 from "../../src/assets/send/78.jpg"; 

const features = [
  {
    title: "Update Information",
    description: "Easily update customer information through the ZPay app",
    position: "left-top",
  },
  {
    title: "Secure Transactions",
    description: "Scan QR codes of customers, agents, or merchants to make secure transactions.",
    position: "right-top",
  },
  {
    title: "ZPay PIN & Verification Code",
    description: "Secure transactions using PIN and verification codes",
    note: "",
    position: "left-bottom",
  },
  {
    title: "Card Information Security",
    description: "ZPay payment cards comply with the industry's security standards",
    position: "right-bottom",
  },
];

const FastService = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16 md:mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Fast & Secure Transactions
      </h2>

      <div className="relative flex justify-center items-center">
        <div className="relative w-64 md:w-80 lg:w-96 h-[480px] md:h-[600px] lg:h-[700px] rounded-[50px] overflow-hidden border-8 border-gray-200 shadow-xl z-10">
          <img
            src={s6}
            alt="Phone Mockup"
            className="w-full h-full object-cover"
          />
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute max-w-xs p-4 bg-white dark:bg-card shadow-md rounded-lg text-center
              ${feature.position === "left-top" ? "top-40 left-0 " : ""}
              ${feature.position === "right-top" ? "top-40 right-0 " : ""}
              ${feature.position === "left-bottom" ? "bottom-40 left-0 " : ""}
              ${feature.position === "right-bottom" ? "bottom-40 right-0" : ""}
            `}
          >
            <h3 className="font-semibold text-lg mb-1 text-indigo-600">{feature.title}</h3>
            <p className="text-gray-600 text-sm dark:text-muted-foreground">{feature.description}</p>
            {feature.note && (
              <p className="text-gray-400 text-xs mt-1">{feature.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FastService;
