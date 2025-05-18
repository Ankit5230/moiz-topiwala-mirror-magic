
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in <span className="text-medical-700">Touch</span>
              </h1>
              <p className="text-lg text-gray-600">
                We're here to answer any questions you might have about our services.
                Feel free to reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Office Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-gray-600">
                        123 Healthcare Ave<br />
                        Medical Center, CA 90210
                      </p>
                      <div className="mt-4 h-48 w-full rounded-lg overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209790265539!3d34.09771875403337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1621538291665!5m2!1sen!2sus" 
                          className="w-full h-full border-0" 
                          loading="lazy"
                          title="Office Location"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Office Hours
                      </CardTitle>
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

                  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Contact Information
                      </CardTitle>
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
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-medical-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span className="text-gray-600">Fax: (555) 123-4568</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="lg:col-span-2 border border-gray-200 shadow-md">
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

        <section className="py-16 bg-white">
          <div className="container-custom text-center animate-fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-medical-700">Promise</span> to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We value your communication and strive to respond to all inquiries promptly. 
              Our team is committed to providing exceptional service and addressing your concerns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-medical-50 rounded-xl">
                <div className="h-12 w-12 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              
              <div className="p-6 bg-medical-50 rounded-xl">
                <div className="h-12 w-12 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy Protected</h3>
                <p className="text-gray-600">
                  All communications are kept confidential and secure.
                </p>
              </div>
              
              <div className="p-6 bg-medical-50 rounded-xl">
                <div className="h-12 w-12 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Care</h3>
                <p className="text-gray-600">
                  Every message is handled with personal attention and care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
