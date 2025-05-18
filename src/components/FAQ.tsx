
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Blue Cross/Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our office to verify your specific insurance coverage before your appointment."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling our office directly at (555) 123-4567, using our online booking system on this website, or sending us an email at appointments@drtopiwala.com."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your photo ID, insurance card, list of current medications, medical history documents, and any recent test results or imaging reports relevant to your visit."
  },
  {
    question: "Do you offer telemedicine consultations?",
    answer: "Yes, we offer telemedicine consultations for certain types of appointments. This allows patients to consult with Dr. Topiwala remotely using video conferencing for follow-ups, medication reviews, and some initial consultations."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We request that patients notify us at least 24 hours in advance for appointment cancellations. Late cancellations or no-shows may incur a fee that is not covered by insurance."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-medical-700">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services, appointments, and procedures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-gray-900 px-6 hover:text-medical-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question? Feel free to reach out to us directly.
            </p>
            <Button asChild className="bg-medical-600 hover:bg-medical-700 text-white">
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
