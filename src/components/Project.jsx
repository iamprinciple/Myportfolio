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

          <div className="group rounded-2xl overflow-hidden
                      bg-white dark:bg-gray-900
                      border border-gray-200 dark:border-gray-800
                      shadow-sm hover:shadow-xl
                      transition-all duration-300">

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