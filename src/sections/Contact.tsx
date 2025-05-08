import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessageStatus(null);

    // Call EmailJS to send the email
    emailjs.send(
      'service_id',  // Replace with your EmailJS service ID
      'template_id',  // Replace with your EmailJS template ID
      formData,
      'user_id'  // Replace with your EmailJS user ID
    )
    .then(() => {
      setMessageStatus('Your message has been sent successfully!');
      setIsSubmitting(false);
    })
    .catch(() => {
      setMessageStatus('Failed to send the message. Please try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a question or want to work together? Feel free to reach out"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-blue-950 mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-950 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <p className="text-gray-600">vanisridheena0701@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-950 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <p className="text-gray-600">+91 6383676528</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-950 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-gray-600">Chennai, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-950 text-white p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-blue-950 mb-6">Send Me a Message</h3>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            {messageStatus && <p className="text-green-500">{messageStatus}</p>}
            
            <Button 
              variant="primary" 
              size="lg" 
              type="submit"
              className="w-full flex items-center justify-center"
              disabled={isSubmitting}
            >
              <Send size={18} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
