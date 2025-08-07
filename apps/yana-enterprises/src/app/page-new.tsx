import { YANALayout } from "@yana/ui/yana-layout";

export default function Home() {
  return (
    <YANALayout platform="enterprises">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to YANA Enterprises
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your All-in-One Digital Ecosystem. From healthcare to e-commerce, 
            from education to creative services - we're building the future of digital platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* YANACare */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-green-600 h-32 flex items-center justify-center">
              <div className="text-white text-4xl">🏥</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">YANACare</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive hospital management system for modern healthcare.
              </p>
              <a 
                href="http://localhost:3001" 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Visit Platform
              </a>
            </div>
          </div>

          {/* YANA Mart */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-purple-600 h-32 flex items-center justify-center">
              <div className="text-white text-4xl">🛒</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">YANA Mart</h3>
              <p className="text-gray-600 mb-4">
                Your ultimate e-commerce marketplace for everything you need.
              </p>
              <a 
                href="http://localhost:3002" 
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Visit Platform
              </a>
            </div>
          </div>

          {/* YANA Learn */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-orange-600 h-32 flex items-center justify-center">
              <div className="text-white text-4xl">📚</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">YANA Learn</h3>
              <p className="text-gray-600 mb-4">
                Your Academic Network Assistant - personalized e-learning platform.
              </p>
              <a 
                href="http://localhost:3003" 
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Visit Platform
              </a>
            </div>
          </div>

          {/* YANA Studios */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-pink-600 h-32 flex items-center justify-center">
              <div className="text-white text-4xl">🎨</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">YANA Studios</h3>
              <p className="text-gray-600 mb-4">
                Creative services platform for designers, developers, and artists.
              </p>
              <a 
                href="http://localhost:3004" 
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
              >
                Visit Platform
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose YANA Enterprises?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee across all platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized performance with global CDN and modern architecture.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support across all our platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your platform and begin your digital journey with YANA Enterprises today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </YANALayout>
  );
}
