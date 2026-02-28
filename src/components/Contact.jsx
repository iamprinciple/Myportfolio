import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      // 🔹 Replace this with your actual API call / email service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
  };

    return (
        <section id="contact" className="py-24 bg-white/5 backdrop-blur-xl rounded-2xl text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-3 gap-10 text-center mb-16">

                    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-2 transition-shadow duration-300">
                        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <small className="uppercase text-black  tracking-wide">Location</small>
                        <span className="font-medium text-black">Nigeria</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-2 transition-shadow duration-300">
                        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <small className="uppercase text-gray-500 dark:text-gray-400 tracking-wide">Email</small>
                        <a
                            href="mailto:holubusayor@gmail.com"
                            className="font-medium hover:text-blue-600 text-black transition-colors"
                        >
                            holubusayor@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-2 transition-all duration-300">
                        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <small className="uppercase text-gray-500  tracking-wide">Call</small>
                        <span className="font-medium text-black">+2349069328820</span>
                    </div>

                </div>

                <div className="bg-white  p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center text-black">Send Me a Message</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-black  bg-gray-50 dark:bg-gray-800 text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <input
                                type="email"
                                name='email'
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-black  bg-gray-50 dark:bg-gray-800 text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        <input
                            type="text"
                            name='subject'
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-black  bg-gray-50 dark:bg-gray-800 text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />

                        <textarea
                        name='message'
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-black  bg-gray-50 dark:bg-gray-800 text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact