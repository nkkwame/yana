import { YANALayout } from "@yana/ui/yana-layout";

export default function Home() {
  return (
    <YANALayout platform="mart">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            YANA Mart - Your Everything Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover millions of products from trusted sellers worldwide. From electronics to fashion, 
            from home essentials to unique finds - we've got everything you need.
          </p>
          <div className="mt-8">
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 text-white px-8 py-3 rounded-r-lg hover:bg-purple-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Electronics", icon: "📱", color: "bg-blue-100 text-blue-600" },
              { name: "Fashion", icon: "👕", color: "bg-pink-100 text-pink-600" },
              { name: "Home & Garden", icon: "🏠", color: "bg-green-100 text-green-600" },
              { name: "Sports", icon: "⚽", color: "bg-orange-100 text-orange-600" },
              { name: "Beauty", icon: "💄", color: "bg-purple-100 text-purple-600" },
              { name: "Books", icon: "📚", color: "bg-indigo-100 text-indigo-600" }
            ].map((category) => (
              <div key={category.name} className="text-center">
                <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:scale-105 transition-transform`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <p className="font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Wireless Headphones", price: "$99.99", image: "🎧", rating: "4.8" },
              { name: "Smart Watch", price: "$299.99", image: "⌚", rating: "4.9" },
              { name: "Laptop Stand", price: "$49.99", image: "💻", rating: "4.7" },
              { name: "Coffee Maker", price: "$129.99", image: "☕", rating: "4.6" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-bold text-lg">{product.price}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded mt-3 hover:bg-purple-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seller Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Why Shop with YANA Mart?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-purple-600 text-xl mr-3">🚚</span>
                <div>
                  <h4 className="font-semibold mb-1">Fast & Free Shipping</h4>
                  <p className="text-gray-600">Free shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 text-xl mr-3">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1">Secure Shopping</h4>
                  <p className="text-gray-600">Your data and payments are always protected</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 text-xl mr-3">↩️</span>
                <div>
                  <h4 className="font-semibold mb-1">Easy Returns</h4>
                  <p className="text-gray-600">30-day hassle-free return policy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Become a Seller</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of sellers and reach millions of customers worldwide. 
              Start your online business with YANA Mart today.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                <span>Easy setup in minutes</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                <span>Low selling fees</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                <span>Marketing tools included</span>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Selling Now
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-purple-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with YANA Mart</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive deals, new product alerts, and shopping tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
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
