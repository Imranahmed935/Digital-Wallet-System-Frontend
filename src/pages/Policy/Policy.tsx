import React from "react";

const policies = [
  {
    title: "Privacy Policy",
    desc: "We value your privacy. All personal data is encrypted and never shared with third parties.",
  },
  {
    title: "Terms of Service",
    desc: "By using our services, you agree to comply with our guidelines and policies at all times.",
  },
  {
    title: "Security",
    desc: "Your security is our top priority. We implement bank-grade encryption and multi-layer protection.",
  },
  {
    title: "Refund Policy",
    desc: "Our refund policy ensures fair treatment in case of service issues, fully transparent and simple.",
  },
];

const Policy = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl dark:bg-pink-600/20" />
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/20" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-600/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Policies
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Learn how we protect your data, secure your transactions, and maintain transparency.
          </p>
        </div>
        <div className="space-y-10">
          {policies.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 bg-white/90 dark:bg-accent/70 backdrop-blur-xl
                         border border-gray-200/60 dark:border-white/10
                         shadow-[0_0_40px_rgba(99,102,241,0.2)]
                         dark:shadow-[0_0_60px_rgba(99,102,241,0.35)]
                         transition-transform duration-500
                         hover:-translate-y-2`}
              style={{ marginLeft: index % 2 === 0 ? "0" : "3rem" }}
            >
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none
                           bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_70%)]
                           dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.45),transparent_70%)]"
              />

              <h3 className="relative z-10 text-2xl font-semibold text-gray-900 dark:text-white mb-4">
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

export default Policy;
