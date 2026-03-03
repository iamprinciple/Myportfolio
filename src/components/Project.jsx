import React from 'react'

const Project = () => {
  return (
    <section
      id="project"
      className="py-24 bg-white/5 backdrop-blur-xl  rounded-2xl text-white "
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800  shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="overflow-hidden">
              <img
                src="https://d3pxwdeb4y32a1.cloudfront.net/wp-content/uploads/2021/01/hospital-mangement-software.webp"
                alt="Hospital Management"
                className="w-full h-56 object-cover
                       group-hover:scale-110
                       transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <a
                href="https://tch-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold
                       hover:text-blue-600 text-black
                       transition-colors"
              >
                Hospital Management Website
              </a>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Fullstack project with doctor, patient, and admin roles.
                Patients book appointments, doctors send prescriptions,
                and admins manage hospital activities and products.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">React</span>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">Node.js</span>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-200">MongoDB</span>
                <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-300">Express</span>
              </div>
            </div>
          </div>
          <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800  shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="overflow-hidden">
              <img
                src="data:image/webp;base64,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"
                alt="Weather App"
                className="w-full h-56 object-cover
                       group-hover:scale-110
                       transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <a
                href="https://weather-app-1-prqw.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold
                       hover:text-blue-600 text-black
                       transition-colors"
              >
                Weather App
              </a>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                A modern full-stack weather application that fetches real-time weather data from Visual Crossing API, optimizes performance using Redis caching, and delivers a dynamic animated UI built with TailwindCSS.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">Node.js</span>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-200">Redis</span>
              </div>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden
                      bg-white dark:bg-gray-900
                      border border-gray-200 dark:border-gray-800
                      shadow-sm hover:shadow-xl
                      transition-all duration-300">

            <div className="overflow-hidden">
              <img
                src="https://icon-library.com/images/chat-app-icon/chat-app-icon-0.jpg"
                alt="Chat App"
                className="w-full h-56 object-cover
                       group-hover:scale-110
                       transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <a
                href="https://chatapp-client-side-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold
                       hover:text-blue-600 text-black
                       transition-colors"
              >
                Real-Time Chat App
              </a>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Real-time chat application built with Node.js and Socket.io.
                Users can sign up, log in, and communicate instantly
                using live socket connections.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">React</span>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">Node.js</span>
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-200">Socket.io</span>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Project