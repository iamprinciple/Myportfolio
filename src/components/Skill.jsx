import React from 'react'

const Skill = () => {
    return (
        <section id="skill">
            <div className='skillholder'>
                <h2 style={{textAlign: "center"}}>Skills</h2>
                <div className='d-flex flex-column gap-3 align-items-left'>
                    <h4>Front-End</h4>
                    <div className='front'> 
                        <div className='d-flex flex column gap-2 align-items-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>HTML</strong>
                        </div>
                        <div className='d-flex flex column gap-2 align-items-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>CSS</strong>
                        </div>
                        <div className='d-flex flex column gap-2 align-items-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>BOOTSTRAP</strong>
                        </div>
                        {/* <div className='d-flex flex column gap-2 align-item-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>TAILWIND</strong>
                        </div> */}
                        <div className='d-flex flex column gap-2 align-items-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>REACT JS</strong>
                        </div>
                        <div className='d-flex flex column gap-2 align-items-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>JAVASCRIPT</strong>
                        </div>
                    </div>

                </div>
                <div className='d-flex flex-column gap-3 align-items-left'>
                    <h4>Back-End</h4>
                    <div className='front'>
                        <div className='d-flex flex column gap-2 align-item-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>NODE JS</strong>
                        </div>
                        <div className='d-flex flex column gap-2 align-item-center'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>EXPRESS JS</strong>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column gap-3 align-items-left'>
                    <h4>Database</h4>
                    <div className='front'>
                        <div className='d-flex flex column gap-2 align-item-left'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>MONGODB</strong>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column gap-3 align-items-left'>
                    <h4>Others</h4>
                    <div className='front'>
                        <div className='d-flex flex column gap-2 align-item-left'>
                            <span class="material-symbols-outlined">double_arrow</span>
                            <strong>GIT</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill