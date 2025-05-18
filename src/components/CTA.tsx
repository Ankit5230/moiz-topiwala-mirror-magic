
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-medical-700">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Prioritize Your Health?
          </h2>
          <p className="text-lg text-medical-100 mb-8">
            Schedule an appointment today and take the first step toward improved health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-medical-700">
              <Link to="/book">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-medical-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="mt-12 bg-medical-600 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Emergency Contact</h3>
                <p className="text-medical-100">
                  For urgent medical concerns outside of regular hours:
                </p>
              </div>
              <div className="flex items-center">
                <svg className="h-8 w-8 text-medical-200 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white text-xl font-bold">(555) 911-1234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
