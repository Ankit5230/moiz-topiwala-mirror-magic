
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-medical-700">Dr. Moiz Topiwala</span>
          </h2>
          <p className="text-lg text-gray-600">
            Dedicated to providing compassionate care and comprehensive treatment options for all patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 blur-3xl transform rotate-12"></div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. Moiz Topiwala in his office"
              className="relative rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-gray-900">My Commitment to Your Health</h3>
            <p className="text-gray-600">
              With over 15 years of experience in the medical field, I am committed to providing the highest quality of care to my patients. I believe in building strong relationships with my patients based on trust and open communication.
            </p>
            <p className="text-gray-600">
              My practice focuses on personalized care, taking the time to understand each patient's unique health needs and concerns. I stay current with the latest medical advancements to provide evidence-based treatments and preventative care strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Education</h4>
                <p className="text-gray-600 text-sm">Harvard Medical School, MD</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Experience</h4>
                <p className="text-gray-600 text-sm">15+ Years of Practice</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Certifications</h4>
                <p className="text-gray-600 text-sm">Board Certified Internal Medicine</p>
              </div>
              <div className="bg-medical-50 p-4 rounded-lg">
                <h4 className="font-semibold text-medical-700">Memberships</h4>
                <p className="text-gray-600 text-sm">American Medical Association</p>
              </div>
            </div>

            <Button asChild className="mt-6 bg-medical-600 hover:bg-medical-700 text-white">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
