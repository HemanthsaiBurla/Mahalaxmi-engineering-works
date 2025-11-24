import { useState, useEffect } from 'react';
import { Phone, Wrench, Zap, Factory, Flame, Shield, Boxes, Settings, CheckCircle, Award, Clock, DollarSign, Heart, MapPin, MessageCircle, Hammer, Cog } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setShowModal(true);
  }, []);

  const whatsappBase = "https://wa.me/918247387557"; // Replace with actual number
  const premiumMsg = "?text=Hi%20Mahalaxmi%20Engineering%20Works%2C%20I%20want%20to%20book%20a%20Premium%20Service.%20Please%20share%20available%20slots%20and%20charges.";
  const normalMsg = "?text=Hi%20Mahalaxmi%20Engineering%20Works%2C%20I%20want%20to%20book%20a%20Normal%20Service.%20Please%20confirm%20available%20time.";
  const chatMsg = "?text=Hi%20Mahalaxmi%20Engineering%20Works%2C%20I%20have%20a%20question%20about%20your%20services.";

  const services = [
    { icon: <Flame className="w-8 h-8" />, title: "Welding Services", desc: "Expert MIG, TIG, and Arc welding services" },
    { icon: <Factory className="w-8 h-8" />, title: "Fabrication Work", desc: "Custom metal fabrication and structures" },
    { icon: <Wrench className="w-8 h-8" />, title: "Gate & Grill Work", desc: "Decorative gates and security grills" },
    { icon: <Shield className="w-8 h-8" />, title: "Iron & Steel Work", desc: "Structural iron and steel installations" },
    { icon: <Boxes className="w-8 h-8" />, title: "Rolling Shutters", desc: "Installation and repair of rolling shutters" },
    { icon: <Cog className="w-8 h-8" />, title: "Machine Repair", desc: "Industrial machinery repair and maintenance" },
    { icon: <Hammer className="w-8 h-8" />, title: "Custom Work", desc: "Customized engineering solutions" },
    { icon: <Settings className="w-8 h-8" />, title: "Metal Works", desc: "All types of metal work and repairs" }
  ];

  const whyChooseUs = [
    { icon: <Clock className="w-6 h-6" />, title: "Fast Service", desc: "Quick response and timely completion" },
    { icon: <Award className="w-6 h-6" />, title: "Quality Work", desc: "Premium materials and skilled craftsmen" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Experienced Team", desc: "Certified welders and engineers" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Fair Pricing", desc: "Competitive and transparent rates" },
    { icon: <Heart className="w-6 h-6" />, title: "Customer First", desc: "100% satisfaction guaranteed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Under Development Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              🚧 Website Under Development
            </h2>
            <p className="text-gray-700 mb-6">
              Hi there! This website is still being developed. Some features may not be available yet.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative shadow-md sticky top-0 z-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200')",
            filter: "blur(0.5px)",
            transform: "scale(1.05)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative container mx-auto px-4 py-8 text-center text-white">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-3xl font-bold text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.9)]">
                Mahalaxmi Engineering Works
              </h1>
              <p className="text-2xl md:text-base text-gray-100 mt-2">
                Your Trusted Partner for Welding & Fabrication Services
              </p>
            </div>

            <a
              href="tel:8247387557"
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">8247387557</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Welding & Engineering Services
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
              From custom fabrication to welding repairs, we provide complete engineering solutions for your industrial and residential needs
            </p>
          </div>

          {/* Service Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-gray-700 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Flame className="w-24 h-24 text-orange-500 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Flame className="w-8 h-8 text-orange-400" />
                <p className="text-white font-semibold">Welding Services</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-blue-700 to-blue-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Factory className="w-24 h-24 text-blue-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Factory className="w-8 h-8 text-blue-400" />
                <p className="text-white font-semibold">Fabrication</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-red-700 to-red-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Wrench className="w-24 h-24 text-red-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Wrench className="w-8 h-8 text-red-400" />
                <p className="text-white font-semibold">Gate & Grill</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-gray-600 to-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-24 h-24 text-gray-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Shield className="w-8 h-8 text-gray-400" />
                <p className="text-white font-semibold">Iron & Steel</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-purple-700 to-purple-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Boxes className="w-24 h-24 text-purple-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Boxes className="w-8 h-8 text-purple-400" />
                <p className="text-white font-semibold">Rolling Shutters</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-green-700 to-green-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cog className="w-24 h-24 text-green-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Cog className="w-8 h-8 text-green-400" />
                <p className="text-white font-semibold">Machine Repair</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-yellow-600 to-yellow-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <Hammer className="w-24 h-24 text-yellow-200 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Hammer className="w-8 h-8 text-yellow-400" />
                <p className="text-white font-semibold">Custom Work</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60 bg-gradient-to-br from-indigo-700 to-indigo-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Settings className="w-24 h-24 text-indigo-300 opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 py-3 flex items-center gap-2">
                <Settings className="w-8 h-8 text-indigo-400" />
                <p className="text-white font-semibold">Metal Works</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            <a
              href={whatsappBase + premiumMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Premium Service
            </a>
            <a
              href={whatsappBase + normalMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Normal Service
            </a>
            <a
              href={whatsappBase + chatMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Shop Image Section */}
      <section className="py-20 bg-gradient-to-r from-orange-300 via-red-300 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Workshop
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Visit our workshop for all types of welding, fabrication, and engineering services. 
            We provide professional quality with skilled craftsmen.
          </p>

          {/* Shop Image Card */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Factory className="w-32 h-32 text-orange-500 mx-auto mb-4" />
                <p className="text-white text-xl font-semibold">Workshop Image Coming Soon</p>
              </div>
            </div>
            <div className="bg-orange-600 text-white py-3">
              <p className="font-semibold tracking-wide">
                Mahalaxmi Engineering Works
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive engineering solutions for all your industrial and residential needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Quality craftsmanship in every project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Flame className="w-24 h-24 text-orange-500 opacity-50" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 text-center">
                    Project Gallery - Image {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Your satisfaction is our priority
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              About Us
            </h2>
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Welcome to <span className="font-bold text-orange-600">Mahalaxmi Engineering Works</span>, your trusted partner for all welding, fabrication, and engineering services. With years of experience in the industry, we specialize in custom metal work, structural fabrication, gate & grill work, and industrial repairs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our commitment to quality workmanship, premium materials, and customer satisfaction has made us a trusted name in the community. Whether it's a small repair or a large-scale fabrication project, we handle every job with precision and professionalism.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
                <p className="text-gray-800 italic mb-2">
                  "At Mahalaxmi Engineering Works, we don't just complete projects – we build lasting relationships through honest service and quality craftsmanship."
                </p>
                <div className="text-right font-semibold text-gray-900">
                  <p>- [Owner Name]</p>
                  <p>- Certified Welder & Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <a href="tel:8247387557" className="text-orange-300 hover:text-orange-200 text-lg">
              8247387557
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <a
                href={whatsappBase + chatMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-200 text-lg"
              >
                Chat with us
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-300">
                Visit us for quality service
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-400">Map integration coming soon</p>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-4">
              <p className="text-gray-300 font-semibold">
                Mahalaxmi Engineering Works
              </p>
              <p className="text-gray-500 text-sm">
                [Add your complete address here]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2025 Mahalaxmi Engineering Works | All Rights Reserved
          </p>
          <p className="text-sm">
            Professional Welding & Engineering Services
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappBase + chatMsg}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;

