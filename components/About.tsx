import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stop Flying Blind. Start Seeing Clearly.</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          As a founder, you're juggling a million things. The last thing you need is a surprise churn from a key customer. Manually sifting through CRM notes, Slack messages, and product usage data is slow, inefficient, and often misleading.
          <br /><br />
          Butter AI was built to solve this. We connect to your existing tools and use AI to surface the critical signals you're missing. We provide a single, unified view of customer health, so you can stop guessing and start taking proactive, data-driven action to save at-risk accounts.
        </p>
      </div>
    </section>
  );
};

export default About;