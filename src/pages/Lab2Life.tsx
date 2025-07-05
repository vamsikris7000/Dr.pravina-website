
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, TrendingUp, Heart, Users } from "lucide-react";

const Lab2Life = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Lab2Life</h1>
            <p className="text-xl mb-8">Revolutionary Diagnostic-Based Lifestyle Plans</p>
            <p className="text-lg mb-8 opacity-90">Coming Soon - Where Clinical Diagnostics Meets Preventive Care</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Lab2Life represents the future of personalized healthcare - a revolutionary approach that bridges the gap between clinical diagnostics and lifestyle medicine. By analyzing your lab results, we create precise, evidence-based lifestyle interventions that target your specific health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">From Lab Results to Life Changes</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional medicine often focuses on treating disease after it occurs. Lab2Life takes a different approach - we use your diagnostic data to prevent disease and optimize health through targeted lifestyle modifications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This innovative collaboration between clinical diagnostics and preventive care will revolutionize how women approach their health journey.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Join the Waitlist
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-200 to-green-200 rounded-full flex items-center justify-center shadow-2xl">
                <Microscope className="h-32 w-32 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How Lab2Life Will Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Comprehensive Testing</h3>
                <p className="text-gray-600 text-sm">Advanced diagnostic tests to understand your unique health profile</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Data Analysis</h3>
                <p className="text-gray-600 text-sm">AI-powered analysis of your results combined with expert interpretation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Personalized Plan</h3>
                <p className="text-gray-600 text-sm">Custom lifestyle interventions based on your specific lab markers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Regular monitoring and plan adjustments based on progress</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Lab2Life Will Be Revolutionary</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Precision Medicine</h3>
              <p className="text-gray-600">Move beyond one-size-fits-all approaches to truly personalized healthcare based on your unique biomarkers</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Early Detection</h3>
              <p className="text-gray-600">Identify health imbalances before they become diseases, allowing for preventive interventions</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Measurable Results</h3>
              <p className="text-gray-600">Track your progress with objective lab markers, not just symptoms or how you feel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of the Healthcare Revolution</h2>
            <p className="text-xl mb-8">Join our waitlist to be among the first to experience Lab2Life when it launches</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600">
                Learn More About Our Current Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab2Life;
