import { ArrowRight } from "lucide-react";
import s1 from "../../src/assets/send/3.jpg";
import s2 from "../../src/assets/send/4.jpg";
import s3 from "../../src/assets/send/send1.jpg";
import s4 from "../../src/assets/send/6.jpg";
import s5 from "../../src/assets/send/7.jpg";
import s6 from "../../src/assets/send/8.jpg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface SolutionItem {
  id: string;
  title: string;
  summary: string;
  label: string;
  url: string;
  image: string;
}

interface SolutionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  solutions?: SolutionItem[];
}

const Solution = ({
  heading = "All financial solutions on one platform.",
  description = "Add money, send money, cash out, mobile recharge, and ZPay loan — all in one seamless platform.",
  solutions = [
    {
      id: "solution-1",
      title: "Add Money",
      summary:
        "Easily add money to your ZPay account using bank transfer, cards, or agents.",
      label: "Money In",
      url: "#",
      image: `${s1}`,
    },
    {
      id: "solution-2",
      title: "Send Money",
      summary:
        "Send money instantly to friends and family, anytime and anywhere.",
      label: "Transfer",
      url: "#",
      image: `${s2}`,
    },
    {
      id: "solution-3",
      title: "Cash Out",
      summary: "Withdraw cash from nearby agents or ATMs with full security.",
      label: "Withdraw",
      url: "#",
      image: `${s3}`,
    },
    {
      id: "solution-4",
      title: "Mobile Recharge",
      summary: "Recharge your mobile instantly with just a few taps.",
      label: "Recharge",
      url: "#",
      image: `${s4}`,
    },
    {
      id: "solution-5",
      title: "ZPay Loan",
      summary: "Get instant micro-loans with flexible repayment options.",
      label: "Loan",
      url: "#",
      image: `${s5}`,
    },
    {
      id: "solution-6",
      title: "Pay Bills",
      summary: "Get instant micro-loans with flexible repayment options.",
      label: "Loan",
      url: "#",
      image: `${s6}`,
    },
  ],
}: SolutionProps) => {
  return (
    <section className=" py-32 px-4 ">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
  shadow-lg transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
             
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r 
    from-indigo-500/20 via-cyan-400/20 to-emerald-400/20 
    opacity-0 group-hover:opacity-100 blur-xl transition duration-300"
              />

              
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Label Badge */}
                <span
                  className="absolute left-4 top-4 rounded-full 
      bg-black/70 px-4 py-1 text-xs font-medium text-white backdrop-blur-md"
                >
                  {solution.label}
                </span>
              </div>

              <CardHeader className="relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {solution.title}
                </h3>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {solution.summary}
                </p>
              </CardContent>

              <CardFooter className="relative z-10">
                <a
                  href={solution.url}
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 
      transition-all group-hover:gap-3 group-hover:text-cyan-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
