import { YANALayout } from "@yana/ui/yana-layout";

export default function Home() {
  return (
    <YANALayout platform="care">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            YANACare Hospital Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare management system designed for modern hospitals, 
            clinics, and healthcare providers. Streamline patient care and operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Patient Management */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
            <p className="text-gray-600 mb-4">
              Complete patient records, history tracking, and care coordination in one platform.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>

          {/* Appointment Scheduling */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
            <p className="text-gray-600 mb-4">
              AI-powered appointment scheduling with automated reminders and optimization.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>

          {/* Medical Records */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Records</h3>
            <p className="text-gray-600 mb-4">
              Secure, HIPAA-compliant electronic health records with easy access.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>

          {/* Billing & Insurance */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Billing & Insurance</h3>
            <p className="text-gray-600 mb-4">
              Automated billing, insurance claims processing, and financial reporting.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>

          {/* Staff Management */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Staff Management</h3>
            <p className="text-gray-600 mb-4">
              Manage healthcare staff schedules, credentials, and performance tracking.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>

          {/* Analytics & Reports */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics & Reports</h3>
            <p className="text-gray-600 mb-4">
              Real-time analytics and comprehensive reporting for better decision making.
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Learn More →
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of healthcare providers already using YANACare to improve patient outcomes.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </YANALayout>
  );
}
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
