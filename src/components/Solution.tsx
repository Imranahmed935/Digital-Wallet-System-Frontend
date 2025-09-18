import { ArrowRight } from "lucide-react";
import s1 from "../../src/assets/send/3.jpg"
import s2 from "../../src/assets/send/4.jpg"
import s3 from "../../src/assets/send/send1.jpg"
import s4 from "../../src/assets/send/6.jpg"
import s5 from "../../src/assets/send/7.jpg"
import s6 from "../../src/assets/send/8.jpg"

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
      summary: "Easily add money to your ZPay account using bank transfer, cards, or agents.",
      label: "Money In",
      url: "#",
      image: `${s1}`,
    },
    {
      id: "solution-2",
      title: "Send Money",
      summary: "Send money instantly to friends and family, anytime and anywhere.",
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
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={solution.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg text-pink-600 font-semibold hover:underline md:text-xl">
                  <a href={solution.url}>{solution.title}</a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={solution.url}
                  className="flex items-center text-foreground hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 size-4" />
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
