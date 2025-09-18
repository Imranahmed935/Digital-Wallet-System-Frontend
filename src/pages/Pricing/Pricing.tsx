import {
  ArrowDownCircle,
  ArrowUpCircle,
  Send,
  CreditCard,
} from "lucide-react";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Cash In",
      description: "Add money to your wallet instantly from banks or agents.",
      fee: "Free",
      icon: <ArrowDownCircle className="size-10 text-violet-600" />,
    },
    {
      title: "Cash Out",
      description: "Withdraw money easily from agents or ATMs.",
      fee: "1.5% per transaction",
      icon: <ArrowUpCircle className="size-10 text-violet-600" />,
    },
    {
      title: "Send Money",
      description: "Transfer money to friends and family securely.",
      fee: "৳5 flat fee",
      icon: <Send className="size-10 text-violet-600" />,
    },
    {
      title: "Bill Payments",
      description: "Pay utility bills, internet, and more from your wallet.",
      fee: "৳10 per bill",
      icon: <CreditCard className="size-10 text-violet-600" />,
    },
  ];

  return (
    <section id="pricing-section" className="md:py-32 py-20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-foreground">
             <span className="text-violet-600">ZPay's</span> Transaction Fees
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and affordable fees for every transaction you make.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingOptions.map((option, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card border-1 border-violet-500 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition"
            >
              <div className="flex justify-center mb-6">{option.icon}</div>
              <h3 className="text-xl font-semibold dark:text-foreground text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 dark:text-muted-foreground">{option.description}</p>
              <p className="text-lg font-bold text-violet-600">{option.fee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
