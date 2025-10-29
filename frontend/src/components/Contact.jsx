import React, { useState } from 'react';
import { Mail, Phone, Github, Send } from 'lucide-react';
import { personalInfo, contactForm } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactForm.onSubmit(formData);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Email */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Github className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">GitHub</h4>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;