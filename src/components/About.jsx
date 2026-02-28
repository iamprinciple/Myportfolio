import React from 'react'

const About = () => {
    return (

        <section id="about"
            className="py-24 bg-white/5 backdrop-blur-xl  rounded-2xl
             text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        About <span className="text-blue-600 dark:text-blue-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer </span> 
                             with over 2 years of experience building modern, scalable and responsive
                            web applications and APIs.
                        </p>

                        <p className="font-medium">
                            I would love to work with you on your next project.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl bg-white shadow-md hover:-translate-y-2 transition-all">
                            <h3 className="font-semibold text-lg text-black mb-2">Fullstack Development</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                End-to-end application development using modern frameworks.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:-translate-y-2 transition-all">
                            <h3 className="font-semibold text-lg text-black mb-2">Frontend Development</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Building responsive, interactive and user-friendly interfaces.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-white shadow-md hover:-translate-y-2 transition-all">
                            <h3 className="font-semibold text-lg text-black mb-2">Backend & APIs</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Designing scalable APIs and efficient server-side logic.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-white  shadow-md hover:-translate-y-2 transition-all duration-300">
                            <h3 className="font-semibold text-lg text-black mb-2">Database Architecture</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Structuring and optimizing databases for performance and scalability.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default About