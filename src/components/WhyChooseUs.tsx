import {
  ShieldCheck,
  Zap,
  CreditCard,
  LineChart,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    desc: "Your data and transactions are protected with advanced encryption and multi-layer security.",
  },
  {
    icon: Zap,
    title: "Fast & Seamless Payments",
    desc: "Experience lightning-fast transactions with minimal processing time worldwide.",
  },
  {
    icon: CreditCard,
    title: "Smart Card Management",
    desc: "Control spending, freeze cards, and manage limits directly from your dashboard.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    desc: "Track your expenses, income, and insights with real-time financial analytics.",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Send and receive money internationally with competitive exchange rates.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our expert support team is always available to help you anytime, anywhere.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            A Smarter Way to Manage
            <span className="block text-primary"> Your Finances</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
            Built for speed, security, and simplicity — everything you need in a
            modern fintech platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8
                         bg-white/90 dark:bg-accent/70 backdrop-blur-xl
                         border border-primary/20 dark:border-primary/30
                         shadow-[0_0_30px_rgba(99,102,241,0.18)]
                         dark:shadow-[0_0_60px_rgba(99,102,241,0.35)]
                         transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl
                           bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_60%)]
                           dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.45),transparent_60%)]"
              />

              <div
                className="relative z-10 flex items-center justify-center w-14 h-14 mb-6 rounded-xl
                           bg-primary/15 text-primary
                           shadow-[0_0_25px_rgba(99,102,241,0.4)]
                           dark:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
              >
                <item.icon size={26} />
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
