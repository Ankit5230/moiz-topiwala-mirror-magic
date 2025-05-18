
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
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
    ]
  },
  {
    category: "Medical Services",
    questions: [
      {
        question: "What medical services do you offer?",
        answer: "We offer a comprehensive range of medical services including preventive care, chronic disease management, wellness consultations, diagnostic services, specialized treatments, and telemedicine. Each service is personalized to meet the specific needs of our patients."
      },
      {
        question: "How long does a typical appointment last?",
        answer: "Initial consultations typically last 45-60 minutes to allow Dr. Topiwala to gather a complete medical history and address your concerns. Follow-up appointments are usually 20-30 minutes, depending on the complexity of your medical needs."
      },
      {
        question: "Can I get lab work done at your office?",
        answer: "We can collect specimens for many common laboratory tests in our office. For specialized tests, we may refer you to a nearby laboratory facility. We work with major labs to ensure your insurance coverage is optimized."
      },
      {
        question: "Do you treat children?",
        answer: "Dr. Topiwala primarily treats adult patients aged 18 and older. For pediatric care, we can recommend excellent pediatricians in our network."
      },
      {
        question: "How do I access my medical records?",
        answer: "You can access your medical records through our secure patient portal. If you need assistance setting up your account or have questions about accessing specific information, please contact our office staff."
      }
    ]
  },
  {
    category: "Insurance & Billing",
    questions: [
      {
        question: "Will I receive a bill after my visit?",
        answer: "After your visit, we will submit a claim to your insurance company. Once they process the claim, you may receive a bill for any remaining balance not covered by your insurance. This typically includes deductibles, copayments, or coinsurance amounts."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, personal checks, and all major credit cards. We also offer payment plans for certain services. Please discuss with our billing department if you need financial arrangements."
      },
      {
        question: "Do you offer any discounts for self-pay patients?",
        answer: "Yes, we offer discounted rates for patients who do not have insurance and are paying out-of-pocket. Please contact our billing department for current self-pay rates."
      },
      {
        question: "How do I know if a procedure will be covered by my insurance?",
        answer: "Our office staff can help verify your insurance benefits before scheduled procedures. However, we recommend that you also contact your insurance company directly to confirm coverage for specific services."
      },
      {
        question: "What should I do if I receive a bill I don't understand?",
        answer: "If you have questions about your bill, please contact our billing department at (555) 123-4570. Our staff can explain charges, help you understand your insurance coverage, and address any concerns about your statement."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-medical-700">Questions</span>
              </h1>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our services, appointments, and procedures.
                If you don't see your question here, please feel free to contact us.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 animate-fade-in">
                <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
                  <ul className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <li key={index}>
                        <a href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-medical-600 hover:text-medical-800 hover:underline transition-colors">
                          {category.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Still have questions? We're here to help!
                    </p>
                    <Button asChild className="w-full bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300 transform hover:scale-105">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-12 animate-fade-in">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-200">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-b last:border-0">
                          <AccordionTrigger className="text-lg text-gray-900 px-6 hover:text-medical-700 hover:no-underline transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 px-6 pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="bg-medical-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Couldn't Find Your Answer?
                  </h2>
                  <p className="text-gray-600">
                    Our team is ready to answer any specific questions you might have about our services or procedures.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300 transform hover:scale-105">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-medical-600 text-medical-700 hover:bg-medical-50">
                    <Link to="/book">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
