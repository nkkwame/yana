import { YANALayout } from "@yana/ui/yana-layout";

export default function Home() {
  return (
    <YANALayout platform="studios">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            YANA Studios - Creative Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where creativity meets innovation. Discover premium digital assets, connect with 
            talented creators, and bring your creative vision to life.
          </p>
          <div className="mt-8">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors mr-4">
              Explore Assets
            </button>
            <button className="border border-pink-600 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-colors">
              Join as Creator
            </button>
          </div>
        </div>

        {/* Asset Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Digital Asset Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Website Templates",
                icon: "🌐",
                count: "5,000+",
                color: "bg-blue-100 text-blue-600"
              },
              {
                category: "Graphics & Logos",
                icon: "🎨",
                color: "bg-pink-100 text-pink-600",
                count: "15,000+"
              },
              {
                category: "Stock Photos",
                icon: "📷",
                color: "bg-green-100 text-green-600",
                count: "100,000+"
              },
              {
                category: "Video Templates",
                icon: "🎬",
                color: "bg-purple-100 text-purple-600",
                count: "3,000+"
              },
              {
                category: "Audio & Music",
                icon: "🎵",
                color: "bg-yellow-100 text-yellow-600",
                count: "8,000+"
              },
              {
                category: "UI/UX Kits",
                icon: "📱",
                color: "bg-indigo-100 text-indigo-600",
                count: "2,500+"
              },
              {
                category: "Fonts & Typography",
                icon: "🔤",
                color: "bg-red-100 text-red-600",
                count: "4,000+"
              },
              {
                category: "3D Models",
                icon: "🎯",
                color: "bg-teal-100 text-teal-600",
                count: "1,200+"
              }
            ].map((item) => (
              <div key={item.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{item.category}</h3>
                <p className="text-gray-600 text-center">{item.count} assets</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Assets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Trending Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Business Website Template",
                creator: "DesignPro",
                price: "$29",
                sales: "1.2k",
                rating: "4.9"
              },
              {
                title: "Minimalist Logo Collection",
                creator: "BrandCraft",
                price: "$19",
                sales: "2.5k",
                rating: "4.8"
              },
              {
                title: "Corporate Video Intro",
                creator: "VideoMaster",
                price: "$39",
                sales: "890",
                rating: "4.9"
              },
              {
                title: "Social Media Pack",
                creator: "SocialDesign",
                price: "$15",
                sales: "3.1k",
                rating: "4.7"
              }
            ].map((asset, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-48 flex items-center justify-center">
                  <span className="text-white text-6xl">🎨</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-sm">{asset.title}</h3>
                  <p className="text-gray-600 text-xs mb-2">by {asset.creator}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-pink-600 font-bold">{asset.price}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1">{asset.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">{asset.sales} sales</div>
                  <button className="w-full bg-pink-600 text-white py-2 rounded text-sm hover:bg-pink-700 transition-colors">
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Creative Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pink-600 text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
              <p className="text-gray-600 mb-6">
                Get bespoke designs tailored to your brand from our expert designers.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors">
                Start Project
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pink-600 text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Professional web development services from concept to launch.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors">
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pink-600 text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">App Design</h3>
              <p className="text-gray-600 mb-6">
                Beautiful, user-friendly mobile app designs that convert.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Creator Spotlight */}
        <div className="bg-pink-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Creator Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                specialty: "UI/UX Designer",
                avatar: "👨‍🎨",
                earnings: "$15k+",
                rating: "4.9"
              },
              {
                name: "Sarah Kim",
                specialty: "Graphic Designer",
                avatar: "👩‍🎨",
                earnings: "$22k+",
                rating: "5.0"
              },
              {
                name: "Marcus Johnson",
                specialty: "Video Producer",
                avatar: "👨‍💻",
                earnings: "$18k+",
                rating: "4.8"
              }
            ].map((creator, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{creator.avatar}</div>
                <h3 className="text-lg font-semibold">{creator.name}</h3>
                <p className="text-gray-600 mb-2">{creator.specialty}</p>
                <div className="flex justify-center items-center space-x-4 text-sm">
                  <span className="text-green-600 font-semibold">{creator.earnings}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-1">{creator.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-pink-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join YANA Studios and be part of the world's most creative community.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Creating
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
              Browse Portfolio
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
