import React from 'react'

const Home = () => {
    return (
        <section id="home">
            <div className='home_holder'>
                <h2 >Welcome to <strong style={{color:"#64FFDA", fontSize:"25", fontWeight:"800"}}>My Portfolio</strong></h2>
                <h3 style={{fontSize: "40px", fontWeight: "800" }}>Emmanuel Adebayo</h3>
                <strong>a Full Stack Developer</strong>
                <div className='d-flex flex-row gap-3 align-items-center'>
                    <button className='upperbtn'><a href="#contact" >Contact Me</a></button>
                    <button className='upperbtn'><a href="https://docs.google.com/document/d/1DySOSdMk93iC9uu_hhJ1AkMtv-rZlV2YkHyEyULMS54/edit?usp=sharing">Download CV</a></button>
                </div>

            </div>

        </section>
    )
}

export default Home