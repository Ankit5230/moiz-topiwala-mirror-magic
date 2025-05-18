
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  About <span className="text-medical-700">Dr. Moiz Topiwala</span>
                </h1>
                <p className="text-lg text-gray-600">
                  A dedicated healthcare professional with over 15 years of experience providing exceptional patient care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300 transform hover:scale-105">
                    <Link to="/book">Book an Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-medical-600 text-medical-700 hover:bg-medical-50">
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 blur-3xl transform rotate-12"></div>
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  alt="Dr. Moiz Topiwala"
                  className="relative rounded-3xl shadow-xl object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 animate-fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey in Medicine</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    My journey in medicine began with a simple desire: to help people live healthier, happier lives. Growing up in a family where service to others was valued above all else, I was drawn to the medical field from an early age.
                  </p>
                  <p>
                    After completing my medical education at Harvard Medical School, I pursued specialized training in Internal Medicine, where I developed a deep appreciation for the complexity of the human body and the importance of personalized care.
                  </p>
                  <p>
                    Throughout my 15+ years of practice, I have remained committed to the principle that good medicine is about treating the whole person, not just the disease. This philosophy guides my approach to patient care every day.
                  </p>
                  <p>
                    Today, I am privileged to serve a diverse community of patients, addressing their unique healthcare needs with compassion, expertise, and the latest medical knowledge.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy of Care</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Patient-Centered Care</h4>
                        <p className="text-gray-600 mt-2">
                          I believe that the patient should be at the center of all healthcare decisions. I take time to listen to your concerns, answer your questions, and involve you in developing your treatment plan.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Preventive Focus</h4>
                        <p className="text-gray-600 mt-2">
                          I emphasize preventive care and early intervention to help you maintain optimal health and avoid serious medical conditions before they develop.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-medical-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Evidence-Based Medicine</h4>
                        <p className="text-gray-600 mt-2">
                          I stay current with the latest medical research and evidence to ensure that my recommendations and treatments are based on the most up-to-date scientific knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 animate-fade-in">
                <div className="bg-medical-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Credentials</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Education</h4>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li>• MD, Harvard Medical School</li>
                        <li>• Residency in Internal Medicine, Massachusetts General Hospital</li>
                        <li>• BS in Biochemistry, Stanford University</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Certifications</h4>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li>• Board Certified, American Board of Internal Medicine</li>
                        <li>• Advanced Cardiac Life Support (ACLS)</li>
                        <li>• Basic Life Support (BLS)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Memberships</h4>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li>• American Medical Association</li>
                        <li>• American College of Physicians</li>
                        <li>• Society of General Internal Medicine</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">English</span>
                      <div className="flex">
                        <span className="h-3 w-12 bg-medical-600 rounded-l"></span>
                        <span className="h-3 w-12 bg-medical-600"></span>
                        <span className="h-3 w-12 bg-medical-600 rounded-r"></span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Spanish</span>
                      <div className="flex">
                        <span className="h-3 w-12 bg-medical-600 rounded-l"></span>
                        <span className="h-3 w-12 bg-medical-600"></span>
                        <span className="h-3 w-12 bg-gray-200 rounded-r"></span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hindi</span>
                      <div className="flex">
                        <span className="h-3 w-12 bg-medical-600 rounded-l"></span>
                        <span className="h-3 w-12 bg-medical-600"></span>
                        <span className="h-3 w-12 bg-medical-600 rounded-r"></span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gujarati</span>
                      <div className="flex">
                        <span className="h-3 w-12 bg-medical-600 rounded-l"></span>
                        <span className="h-3 w-12 bg-medical-600"></span>
                        <span className="h-3 w-12 bg-medical-600 rounded-r"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Involvement</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Giving back to the community is an essential part of my commitment as a healthcare provider.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <svg className="h-10 w-10 text-medical-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 9-3-3m11 0v8a2 2 0 01-2 2h-1" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Health Clinics</h3>
                <p className="text-gray-600">
                  I regularly volunteer at free health clinics in underserved areas, providing medical care to those who might otherwise go without.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <svg className="h-10 w-10 text-medical-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Education</h3>
                <p className="text-gray-600">
                  I conduct regular health education workshops in community centers and schools, empowering people with knowledge to make better health decisions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <svg className="h-10 w-10 text-medical-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Health Initiatives</h3>
                <p className="text-gray-600">
                  I participate in medical missions to provide healthcare services in developing countries and disaster-affected regions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
