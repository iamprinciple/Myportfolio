import React from 'react'

const Project = () => {
  return (
    <section id='project'>
    
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "800" }}>Projects</h2>
        <div className='projectHolder'>
          <div className='singleProject'>
            <img src="https://d3pxwdeb4y32a1.cloudfront.net/wp-content/uploads/2021/01/hospital-mangement-software.webp" alt="LOGO" />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", padding: "8px" }}>
              <strong><a href="https://tch-frontend.vercel.app/">Hospital Management Website</a></strong>
              <i>PROJECT DESCRIPTION:This is a Fullstack project. You can sign up as a doctor or patient, there is also an admin page. Patient can book an appointment, doctor can send prescriptions, while admin can post products and check the whole hospital activities.</i>
            </div>
          </div>
          <div className='singleProject'>
            <img src="https://icon-library.com/images/chat-app-icon/chat-app-icon-0.jpg" alt="" />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", padding: "8px" }}>
              <strong><a href="https://chatapp-client-side-five.vercel.app/">Chat App</a></strong>
              <i>A real-time chat application built using Socket.io and Node.js, allowing users to sign up, log in, and chat instantly with each other through live socket connections.</i>
            </div>
          </div>
          {/* <div className='singleProject'>
            <img src="https://d3pxwdeb4y32a1.cloudfront.net/wp-content/uploads/2021/01/hospital-mangement-software.webp" alt="" />
            <strong><a href="https://tch-frontend.vercel.app/">Hospital Management</a></strong>
          </div>
          <div className='singleProject'>
            <img src="https://d3pxwdeb4y32a1.cloudfront.net/wp-content/uploads/2021/01/hospital-mangement-software.webp" alt="" />
            <strong><a href="https://tch-frontend.vercel.app/">Hospital Management</a></strong>
          </div>
          <div className='singleProject'>
            <img src="https://d3pxwdeb4y32a1.cloudfront.net/wp-content/uploads/2021/01/hospital-mangement-software.webp" alt="" />
            <strong><a href="https://tch-frontend.vercel.app/">Hospital Management</a></strong>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Project