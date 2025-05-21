import React from 'react'

const Home = () => {
    return (
        <section id="home">
            <div className='home_holder'>
                <h2 >Welcome to My Portfolio</h2>
                <h3>Emmanuel Adebayo</h3>
                <p>a Full Stack Web Application/Software Developer</p>
                <div className='d-flex flex-row gap-3 align-items-center'>
                    <button>Contact Me</button>
                    <button>Download CV</button>
                </div>

            </div>

        </section>
    )
}

export default Home