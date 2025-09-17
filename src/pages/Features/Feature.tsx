import {
  DollarSign,
  ShieldCheck,
  Smartphone,
  Zap,
  Users,
  Globe,
  Wallet,
  Headphones,
  CreditCard,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ZPayFeatures: FeatureItem[] = [
  {
    title: "Instant Transactions",
    description:
      "Send and receive money in seconds, anytime and anywhere with ZPay.",
    icon: <Zap className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Secure Payments",
    description:
      "Advanced encryption and fraud protection to keep your transactions safe.",
    icon: <ShieldCheck className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Mobile Friendly",
    description:
      "Access your wallet easily from your smartphone with a smooth experience.",
    icon: <Smartphone className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Low Transaction Fees",
    description:
      "Enjoy the lowest service fees compared to traditional payment providers.",
    icon: <DollarSign className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Global Access",
    description:
      "Send and receive payments worldwide with multi-currency support.",
    icon: <Globe className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Easy Bill Payments",
    description:
      "Pay utility bills, recharge mobiles, and make online payments hassle-free.",
    icon: <CreditCard className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Multi-User Access",
    description:
      "Share and manage your account with family or business team members.",
    icon: <Users className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Get assistance any time with our dedicated customer support team.",
    icon: <Headphones className="size-5 md:size-6 text-violet-600" />,
  },
  {
    title: "Smart Wallet",
    description:
      "Track spending, set budgets, and manage your money smarter with ZPay.",
    icon: <Wallet className="size-5 md:size-6 text-violet-600" />,
  },
];

const Feature = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase text-violet-600">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-violet-600">ZPay</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            ZPay brings you the fastest, most secure, and affordable way to
            manage your money. Explore our top features designed to make your
            life easier.
          </p>
        </div>


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ZPayFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-violet-600 rounded-xl hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
