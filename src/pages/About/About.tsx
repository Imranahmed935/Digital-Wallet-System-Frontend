import Logo from "@/assets/icon/Logo";

import img1 from "../../assets/about/Mobile-Banking1.jpg";
import img2 from "../../assets/about/maim.jpg";
import img3 from "../../assets/team/team1.jpg";
import img4 from "../../assets/team/team2.jpg";
import img5 from "../../assets/team/team3.jpg";
import img6 from "../../assets/team/team4.jpg";
import img7 from "../../assets/team/team5.jpg";
import img8 from "../../assets/team/team6.jpg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const companies = [
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg", alt: "Arc" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg", alt: "Descript" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg", alt: "Mercury" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg", alt: "Ramp" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg", alt: "Retool" },
  ];

  const achievements = [
    { label: "Years in Business", value: "10+" },
    { label: "Total Users", value: "500+" },
    { label: "Happy Users", value: "99%" },
    { label: "Awards Won", value: "15+" },
  ];

  const teamMembers = [
    { id: 1, name: "Alice Johnson", role: "CEO", avatar: img3 },
    { id: 2, name: "Bob Smith", role: "CTO", avatar: img4 },
    { id: 3, name: "Carol White", role: "Lead Designer", avatar: img5 },
    { id: 4, name: "David Brown", role: "Marketing Head", avatar: img6 },
    { id: 5, name: "Eva Green", role: "Product Manager", avatar: img7 },
    { id: 6, name: "Frank Moore", role: "Developer", avatar: img8 },
  ];

  return (
    <section className="py-20 md:w-7/12 mx-auto">
      <div className="container mx-auto space-y-32">

        <div className="grid gap-5 text-center md:grid-cols-2 md:text-left mb-14">
          <h1 className="text-5xl font-semibold dark:text-foreground">About Us</h1>
          <p className="text-gray-600 dark:text-foreground">
            We are a passionate team dedicated to creating innovative solutions 
            that empower businesses and customers alike.
          </p>
        </div>


        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={img2}
            alt="Our Story"
            className="col-span-2 rounded-xl object-cover max-h-[620px]"
          />
          <div className="flex flex-col gap-7 lg:flex-col">
            <div className="bg-white p-7 rounded-xl shadow-md flex flex-col justify-between gap-6">
              <div>
                <p className="text-lg font-semibold mb-2"><span className="text-violet-600">ZPay's</span> Mission</p>
                <p className="text-gray-600">
                  We aim to deliver exceptional digital solutions, improve 
                  workflows, and drive growth for businesses worldwide.
                </p>
              </div>
              <Logo />
            </div>
            <img
              src={img1}
              alt="Team"
              className="grow basis-0 rounded-xl object-cover"
            />
          </div>
        </div>


        <div className="text-center dark:bg-primary-foreground p-5">
          <p className="mb-8 text-gray-600">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 ">
            {companies.map((company, idx) => (
              <img key={idx} src={company.src} alt={company.alt} className="h-8 w-auto  dark:text-foreground" />
            ))}
          </div>
        </div>

        <div className="md:flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-4"><span className="text-violet-600">ZPay's</span> Service Story</h2>
          <p className="text-gray-600 max-w-3xl text-muted-foreground">
            Our journey started with a mission to simplify digital transactions
            and empower businesses with cutting-edge solutions. Over the years,
            we have grown into a trusted platform providing seamless, secure,
            and efficient services to thousands of customers worldwide.
          </p>
        </div>

      
        <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-accent p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold"><span className="text-violet-600">ZPay's</span> Achievements</h2>
            <p className="text-gray-600 max-w-xl">
              Delivering innovative solutions and measurable impact for clients across industries.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4 " key={idx}>
                <p className="text-gray-700 dark:text-foreground">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
              </div>
            ))}
          </div>
        </div>


        <section >
          <div className="container flex flex-col items-center text-center">
            <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
            <span className="text-violet-600">ZPay's</span> Team
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl ">
              Meet the passionate individuals behind our mission, driving innovation and excellence.
            </p>
          </div>
          <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 dark:bg-card p-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <Avatar className="mb-4 h-20 w-20 border-1 border-violet-600 md:mb-5 lg:h-32 lg:w-32">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">{member.name}</p>
                <p className="text-muted-foreground text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
