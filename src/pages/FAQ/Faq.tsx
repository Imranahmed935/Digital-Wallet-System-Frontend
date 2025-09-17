import Faq3 from "@/components/Faq3";


const faqItems = [
  {
    id: "faq-1",
    question: "What is ZPay?",
    answer:
      "ZPay is a secure digital wallet that allows you to send, receive, and manage money instantly using your mobile device.",
  },
  {
    id: "faq-2",
    question: "How do I create a ZPay account?",
    answer:
      "Download the ZPay app from the App Store or Google Play, sign up using your phone number or email, and follow the verification steps to activate your account.",
  },
  {
    id: "faq-3",
    question: "Is ZPay safe to use?",
    answer:
      "Yes. ZPay uses industry-standard encryption and security protocols to protect your funds and personal information.",
  },
  {
    id: "faq-4",
    question: "How can I add money to my ZPay wallet?",
    answer:
      "You can add money to your ZPay wallet via bank transfer, debit card, or by receiving money from other ZPay users.",
  },
  {
    id: "faq-5",
    question: "Can I withdraw money from ZPay to my bank account?",
    answer:
      "Yes. You can withdraw money from your ZPay wallet to your linked bank account anytime, usually within a few hours.",
  },
  {
    id: "faq-6",
    question: "How do I pay merchants using ZPay?",
    answer:
      "Simply scan the merchant’s QR code in the app or select the merchant from the list and enter the amount to complete the payment.",
  },
  {
    id: "faq-7",
    question: "What should I do if I forget my password?",
    answer:
      "Use the ‘Forgot Password’ link on the login page to reset your password via your registered email or phone number.",
  },
  {
    id: "faq-8",
    question: "Are there any fees for using ZPay?",
    answer:
      "ZPay charges minimal fees for certain transactions like cash-out to bank accounts. Sending and receiving money within ZPay is usually free.",
  },
];

const Faq = () => {
  return (
    <Faq3
      heading="ZPay Frequently Asked Questions"
      description="Find answers to common questions about ZPay. Can't find what you're looking for? Contact our support team."
      items={faqItems}
      supportHeading="Need More Help?"
      supportDescription="Our support team is ready to assist you with any questions or issues."
      supportButtonText="Contact Support"
      supportButtonUrl="/contact"
    />
  );
};

export default Faq;
