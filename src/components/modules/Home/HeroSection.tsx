import hero from "../../../assets/send/Send-Money.png"

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export function HeroSection({
  heading = "ZPay",
  subheading = "isn’t just a digital wallet—it’s freedom in your pocket.",
  description = "We believe money should move as fast as you do!",
  image = {
    src:`${hero}`,
    alt: "Placeholder",
  },
}: HeroSectionProps) {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container flex flex-col items-center gap-10 lg:flex-row">
        {/* Text Content */}
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
            <span>{heading}</span>{" "}
            <span className="text-muted-foreground ">{subheading}</span>
          </h2>
          <p className="text-base text-pink-600 md:text-lg lg:text-xl">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
          </div>
        </div>

        {/* Image Section */}
        <div className="relative z-10">
          <div className="absolute top-2.5 left-1/2 h-[92%] w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover "
            />
          </div>
          <img
            className="relative z-10"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
}
