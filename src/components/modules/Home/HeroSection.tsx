import { Link } from "react-router-dom";
import hero from "../../../assets/send/Send-Money.png";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
}

export function HeroSection({
  heading = "ZPay",
  subheading = "isn’t just a digital wallet — it’s freedom in your pocket.",
  description = "We believe money should move as fast as you do.",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl dark:bg-pink-600/20" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-600/20" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-600/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
      
          <div className="flex flex-col gap-8 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {heading}
              </span>{" "}
              <span className="text-foreground">{subheading}</span>
            </h1>

            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>

         
            <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Link to={`/feature`} className="relative rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:scale-105 hover:shadow-pink-500/60">
                Features
              </Link>

             
            </div>
          </div>

          <div className="relative lg:w-1/2 flex justify-center">
            <div className="absolute h-[420px] w-[320px] rounded-3xl bg-gradient-to-b from-pink-500/40 to-purple-600/40 blur-2xl" />

            <img
              src={hero}
              alt="ZPay App"
              className="relative z-10 rounded-3xl transition hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
