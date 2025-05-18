
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-medical-700">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                We're here to answer any questions you might have about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900">Office Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-medical-600 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-gray-600">
                          123 Healthcare Ave<br />
                          Medical Center, CA 90210
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-600">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">info@drtopiwala.com</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900">Office Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Monday - Friday</span>
                          <span className="text-gray-800 font-medium">9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Saturday</span>
                          <span className="text-gray-800 font-medium">9:00 AM - 1:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Sunday</span>
                          <span className="text-gray-800 font-medium">Closed</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="lg:col-span-2 border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
