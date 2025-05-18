
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "preventive-care",
    title: "Preventive Care",
    description: "Regular check-ups and screenings to prevent health issues before they start.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    detailedDescription: "Our preventive care services focus on maintaining your health and preventing disease. We offer comprehensive health assessments, screenings for common conditions, immunizations, and personalized health advice. Regular preventive care visits can detect health issues early when they're easier to treat.",
    benefits: ["Early detection of potential health issues", "Personalized health recommendations", "Up-to-date immunizations", "Reduced healthcare costs long-term"]
  },
  {
    id: "chronic-disease-management",
    title: "Chronic Disease Management",
    description: "Comprehensive care plans for managing chronic conditions and improving quality of life.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    detailedDescription: "Our chronic disease management program provides ongoing, coordinated care for conditions such as diabetes, hypertension, asthma, and heart disease. Dr. Topiwala works closely with each patient to develop personalized treatment plans that address symptoms, slow disease progression, and improve quality of life.",
    benefits: ["Personalized treatment plans", "Regular monitoring and adjustments", "Coordination with specialists", "Patient education and self-management support"]
  },
  {
    id: "wellness-consultations",
    title: "Wellness Consultations",
    description: "Personalized wellness plans focusing on nutrition, exercise, and mental health.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    detailedDescription: "Our wellness consultations take a holistic approach to your health. Dr. Topiwala provides guidance on nutrition, physical activity, stress management, and sleep hygiene. These consultations aim to optimize your overall wellbeing and help you make sustainable lifestyle changes.",
    benefits: ["Customized nutrition guidance", "Exercise recommendations", "Stress reduction strategies", "Sleep improvement techniques"]
  },
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    description: "Advanced diagnostic testing to identify and treat medical conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    detailedDescription: "We offer comprehensive diagnostic services to accurately identify and monitor health conditions. Our practice provides blood tests, urinalysis, electrocardiograms (ECGs), spirometry, and can arrange for advanced imaging when needed. Quick and accurate diagnosis allows for prompt and effective treatment.",
    benefits: ["Comprehensive laboratory testing", "Cardiac and respiratory assessment", "Coordination of advanced imaging", "Prompt results and treatment planning"]
  },
  {
    id: "specialized-treatments",
    title: "Specialized Treatments",
    description: "Advanced treatments for specific medical conditions tailored to individual needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    detailedDescription: "Dr. Topiwala offers specialized treatments for a variety of conditions, including minor surgical procedures, joint injections, skin lesion removal, and management of complex medical issues. These specialized services are delivered with attention to detail and a focus on patient comfort.",
    benefits: ["Minor surgical procedures", "Joint and soft tissue injections", "Dermatological treatments", "Comprehensive wound care"]
  },
  {
    id: "telemedicine",
    title: "Telemedicine",
    description: "Virtual consultations for convenient access to healthcare from anywhere.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-medical-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    detailedDescription: "Our telemedicine services provide convenient access to healthcare from the comfort of your home. Virtual consultations are available for follow-up appointments, medication reviews, and some initial consultations. This service is especially valuable for patients with mobility issues, busy schedules, or those who live far from our office.",
    benefits: ["Convenient access from anywhere", "Reduced travel and waiting time", "Same quality of care as in-person visits", "Secure and private platform"]
  }
];

const ServiceDetailsSection = ({ service }) => {
  return (
    <div id={service.id} className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 animate-fade-up">
            <div className="bg-medical-50 p-8 rounded-xl sticky top-24">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button className="bg-medical-600 hover:bg-medical-700 text-white w-full transition-all duration-300 transform hover:scale-105">
                Book This Service
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-8">
              {service.detailedDescription}
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
            <ul className="space-y-3 mb-8">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-medical-600 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Card className="mt-8 border-medical-100 hover:shadow-md transition-shadow">
              <CardHeader className="bg-medical-50 rounded-t-lg">
                <CardTitle className="text-xl text-gray-900">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  During your appointment for this service, Dr. Topiwala will take time to understand your specific needs and concerns. 
                  He will conduct a thorough assessment, discuss treatment options, and develop a personalized care plan. 
                  Our goal is to provide you with the highest quality care in a comfortable and supportive environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-up">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-medical-700">Medical Services</span>
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive healthcare services focused on improving your health and quality of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {services.map((service, index) => (
                <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                    <Button asChild variant="link" className="p-0 text-medical-700 hover:text-medical-800 transition-colors">
                      <a href={`#${service.id}`}>Learn More →</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {services.map((service, index) => (
          <ServiceDetailsSection key={index} service={service} />
        ))}

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
