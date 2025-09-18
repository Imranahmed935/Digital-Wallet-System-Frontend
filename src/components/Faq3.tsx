import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const Faq3 = ({
  heading,
  description,
  items = [],
  supportHeading,
  supportDescription,
  supportButtonText,
  supportButtonUrl,
}: Faq3Props) => {
  return (
    <section id="faq-section" className="py-32">
      <div className="container space-y-10">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl space-y-2"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-2 border-violet-600 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-80 px-4 py-3">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2 px-4 py-2 bg-violet-50">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

     
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold">{supportHeading}</h3>
          <p className="text-muted-foreground my-4">{supportDescription}</p>
          <a
            href={supportButtonUrl}
            className="inline-block rounded-md bg-violet-600 px-6 py-3 text-white transition"
          >
            {supportButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq3;
