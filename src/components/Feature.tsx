import Marquee from "react-fast-marquee";
import {
  Wallet,
  Send,
  DollarSign,
  Smartphone,
  Banknote,
  HeartHandshake,
  GraduationCap,
  PiggyBank,
  CreditCard,
  Receipt,
  Globe,
} from "lucide-react";

const features = [
  { name: "Add Money", icon: Wallet, color: "text-green-500" },
  { name: "Send Money", icon: Send, color: "text-blue-500" },
  { name: "Cashout", icon: DollarSign, color: "text-orange-500" },
  { name: "Mobile Recharge", icon: Smartphone, color: "text-purple-500" },
  { name: "ZPay Loan", icon: Banknote, color: "text-pink-500" },
  { name: "Education Fee", icon: GraduationCap, color: "text-yellow-500" },
  { name: "Donation", icon: HeartHandshake, color: "text-red-500" },
  { name: "Remittance", icon: Globe, color: "text-teal-500" },
  { name: "Savings", icon: PiggyBank, color: "text-indigo-500" },
  { name: "Payment", icon: CreditCard, color: "text-cyan-500" },
  { name: "Pay Bill", icon: Receipt, color: "text-rose-500" },
];

const Feature = () => {
  return (
    <section className="bg-background">
      <Marquee gradient={false} speed={40} pauseOnHover className="overflow-hidden">
        <div className="flex gap-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[160px] text-center"
            >
              <feature.icon className={`h-12 w-12 mb-2 ${feature.color}`} />
              <span className="text-lg font-semibold text-foreground">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Feature;
