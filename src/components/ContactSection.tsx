import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

emailjs.init(process.env.NEXT_PUBLIC_USER_ID!);

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSubmissionStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.log(error)
      setSubmissionStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }

    setTimeout(() => {
      setSubmissionStatus({ type: null, message: '' });
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-200 py-16 px-4" id="contact-page">
      <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Contact Left */}
          <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
            <p className="flex items-center text-gray-600 text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
              chewryan0@gmail.com
            </p>
            <p className="flex items-center text-gray-600 text-xl">
              <FontAwesomeIcon icon={faPhone} className="mr-4" />
              +1 (669) 256-8376
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/RyanChew1" className="text-gray-600 text-3xl hover:text-black transition-transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/rryanchews/" className="text-gray-600 text-3xl hover:text-pink-600 transition-transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/ryan-chew1/" className="text-gray-600 text-3xl hover:text-blue-500 transition-transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          {/* Contact Right */}
          <div className="flex-1 w-full max-w-xl">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full  bg-gray-100 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full  bg-gray-100 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full  bg-gray-100 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
            {submissionStatus.type && (
              <div className={`mt-4 text-center ${submissionStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {submissionStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};