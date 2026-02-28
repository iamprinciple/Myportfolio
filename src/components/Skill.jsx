import React from 'react'
import SkillCard from './SkillCard.jsx'
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiRedis
} from "react-icons/si";

const Skill = () => {
    return (
        <section id="skill" className="py-24 bg-white/5 backdrop-blur-xl rounded-2xl text-white dark:text-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        My <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-black">

                    <SkillCard icon={<FaHtml5 />} name="HTML" />
                    <SkillCard icon={<FaCss3Alt />} name="CSS" />
                    <SkillCard icon={<FaBootstrap />} name="Bootstrap" />
                    <SkillCard icon={<SiTailwindcss />} name="Tailwind" />
                    <SkillCard icon={<FaReact />} name="React JS" />
                    <SkillCard icon={<SiJavascript />} name="JavaScript" />
                    <SkillCard icon={<FaNodeJs />} name="Node JS" />
                    <SkillCard icon={<SiExpress />} name="Express JS" />
                    <SkillCard icon={<SiMongodb />} name="MongoDB" />
                    <SkillCard icon={<FaGitAlt />} name="Git" />
                    <SkillCard icon={<SiRedis />} name="Redis" />

                </div>
            </div>
        </section>
    )
}

export default Skill