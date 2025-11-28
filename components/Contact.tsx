import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join the Waitlist</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Be the first to know when Butter AI is ready. We're launching soon!</p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-butter-dark focus:border-butter-dark" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-butter-dark focus:border-butter-dark" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-butter-dark focus:border-butter-dark"></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-lg">
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;