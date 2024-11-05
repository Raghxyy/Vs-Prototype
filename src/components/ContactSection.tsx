import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, text: "hello@vitalstats.com" },
              { icon: <Phone className="w-6 h-6" />, text: "+1 (555) 123-4567" },
              { icon: <MapPin className="w-6 h-6" />, text: "123 Health Street, NY" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-[#4b6efd]/10 rounded-full flex items-center justify-center text-[#4b6efd] mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <form 
            className="bg-white p-8 rounded-xl border border-[#6d8cff]/20"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b6efd] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b6efd] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b6efd] focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;