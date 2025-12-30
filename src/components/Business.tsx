import { Card, CardContent } from "@/components/ui/card";
import s2 from "../../src/assets/send/4.jpg";
import s3 from "../../src/assets/send/send1.jpg";
import s4 from "../../src/assets/send/6.jpg";
import s6 from "../../src/assets/send/78.jpg";

const blogs = [
  {
    id: 1,
    title: "Empowering Merchants with ZPay",
    description:
      "Discover how ZPay enables businesses to accept digital payments seamlessly, driving efficiency and customer trust.",
    date: "Sept 20, 2025",
    author: "ZPay Team",
    image: s6,
  },
  {
    id: 2,
    title: "Smart Business Insights with ZPay",
    description:
      "Get real-time analytics on your transactions and optimize your business decisions.",
    date: "Sept 15, 2025",
    author: "ZPay Insights",
    image: s2,
  },
  {
    id: 3,
    title: "Faster Settlements, Greater Growth",
    description:
      "Experience instant settlements and boost your business cash flow.",
    date: "Sept 12, 2025",
    author: "Finance Dept.",
    image: s3,
  },
  {
    id: 4,
    title: "ZPay Business Loan",
    description:
      "Flexible loans designed to help your business expand without limits.",
    date: "Sept 10, 2025",
    author: "ZPay Finance",
    image: s4,
  },
];

const Business = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:mb-20">
      <h1 className="text-3xl font-bold text-center mb-2"><span className="text-violet-600 md:text-3xl text-2xl font-bold">ZPay</span> for Business</h1>
      <p className="text-center text-gray-600 dark:text-muted-foreground mb-8">
        Boost your business with seamless payments, insightful analytics, and flexible financing options.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <Card className="md:col-span-2 shadow-md">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="w-full object-cover rounded-t-xl"
          />
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">
              {blogs[0].date} • {blogs[0].author}
            </p>
            <h2 className="text-xl font-semibold mt-2 text-indigo-600">{blogs[0].title}</h2>
            <p className="text-gray-600 mt-2 dark:text-muted-foreground">{blogs[0].description}</p>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {blogs.slice(1).map((blog) => (
            <Card key={blog.id} className="flex items-center gap-3 shadow-sm">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-l-xl"
              />
              <CardContent className="p-3">
                <p className="text-xs text-gray-500">
                  {blog.date} • {blog.author}
                </p>
                <h3 className="text-sm font-semibold text-indigo-600">{blog.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
