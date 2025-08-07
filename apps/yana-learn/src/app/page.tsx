import { YANALayout } from "@yana/ui/yana-layout";

export default function Home() {
  return (
    <YANALayout platform="learn">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            YANA Learn - Your Academic Network Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with personalized learning experiences. From professional 
            development to academic excellence - your learning journey starts here.
          </p>
          <div className="mt-8">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors mr-4">
              Start Learning Today
            </button>
            <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors">
              Browse Courses
            </button>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technology & Programming",
                icon: "💻",
                courses: "150+ courses",
                color: "bg-blue-100 border-blue-200",
                textColor: "text-blue-600"
              },
              {
                title: "Business & Marketing",
                icon: "📊",
                courses: "120+ courses",
                color: "bg-green-100 border-green-200",
                textColor: "text-green-600"
              },
              {
                title: "Design & Creative Arts",
                icon: "🎨",
                courses: "90+ courses",
                color: "bg-purple-100 border-purple-200",
                textColor: "text-purple-600"
              },
              {
                title: "Health & Wellness",
                icon: "🏥",
                courses: "80+ courses",
                color: "bg-red-100 border-red-200",
                textColor: "text-red-600"
              },
              {
                title: "Language Learning",
                icon: "🌍",
                courses: "60+ courses",
                color: "bg-indigo-100 border-indigo-200",
                textColor: "text-indigo-600"
              },
              {
                title: "Personal Development",
                icon: "🚀",
                courses: "70+ courses",
                color: "bg-pink-100 border-pink-200",
                textColor: "text-pink-600"
              }
            ].map((category) => (
              <div key={category.title} className={`${category.color} border-2 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className={`${category.textColor} font-medium`}>{category.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Web Development Bootcamp",
                instructor: "Sarah Johnson",
                duration: "12 weeks",
                level: "Beginner",
                rating: "4.9",
                students: "15,000+",
                price: "$89.99"
              },
              {
                title: "Digital Marketing Mastery",
                instructor: "Mike Chen",
                duration: "8 weeks",
                level: "Intermediate",
                rating: "4.8",
                students: "12,000+",
                price: "$79.99"
              },
              {
                title: "UI/UX Design Fundamentals",
                instructor: "Emma Davis",
                duration: "10 weeks",
                level: "Beginner",
                rating: "4.9",
                students: "8,500+",
                price: "$69.99"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-48 flex items-center justify-center">
                  <span className="text-white text-6xl">📚</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">by {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm ml-1">{course.rating} ({course.students})</span>
                    </div>
                    <span className="text-orange-600 font-bold text-lg">{course.price}</span>
                  </div>
                  <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Features */}
        <div className="bg-orange-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose YANA Learn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">AI-powered recommendations tailored to your goals</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Certificates</h3>
              <p className="text-gray-600">Industry-recognized certificates upon completion</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Connect with learners and experts worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Learning</h3>
              <p className="text-gray-600">Learn anywhere, anytime on any device</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <p className="text-gray-600">Expert Instructors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
            <p className="text-gray-600">Courses Available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1M+</div>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
            <p className="text-gray-600">Completion Rate</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of learners and unlock your potential with YANA Learn.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              View All Courses
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
