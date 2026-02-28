import React from 'react'
import { useEffect, useState } from "react"
 const roles = [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
    ]

const Home = () => {
   

    const [displayText, setDisplayText] = useState("")
    const [roleIndex, setRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let typingSpeed = isDeleting ? 50 : 100

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, displayText.length + 1))
                if (displayText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1000)
                }
            } else {
                setDisplayText(currentRole.slice(0, displayText.length - 1))
                if (displayText === "") {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])
    return (
        <section id="home"
            className="relative min-h-screen flex items-center justify-center
             bg-white/5 backdrop-blur-xl  rounded-2xl
             text-gray-900 dark:text-gray-100
             overflow-hidden  "
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-150px] left-1/2 -translate-x-1/2
                    w-[600px] h-[600px]
                    bg-blue-500/30 dark:bg-blue-600/20
                    rounded-full blur-3xl animate-glow">
                </div>

                <div className="absolute bottom-[-200px] right-[-100px]
                    w-[500px] h-[500px]
                    bg-cyan-400/20 dark:bg-cyan-500/10
                    rounded-full blur-3xl">
                </div>
            </div>

            <div className="max-w-4xl px-6 text-center space-y-6">

                <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Welcome to my portfolio
                </p>

                <h1 className="text-4xl sm:text-6xl font-extrabold">
                    Emmanuel{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Adebayo
                    </span>
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-white  h-8">
                    I am a{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                        {displayText}
                    </span>
                    <span className="animate-pulse">|</span>
                </h2>

                <p className="text-base sm:text-lg text-white  max-w-2xl mx-auto">
                    I build high-performance web applications with clean UI,
                    solid architecture, and great user experience.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#contact" className="px-6 py-3 rounded-lg font-semibold
                   bg-blue-600 text-white
                   hover:bg-blue-700 transition-all
                   shadow-lg hover:shadow-xl">
                        Contact Me
                    </a>

                    <a href="https://docs.google.com/document/d/1DGq-1FcrUpaQLvHXKgjLyeK_nT_7nUFK/edit?usp=sharing&ouid=107025940950324422958&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg font-semibold
                   border border-blue-600
                   text-blue-600 dark:text-blue-400
                   hover:bg-blue-600 hover:text-white
                   transition-all"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home