'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 px-8 bg-primary/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-textLight mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-textLight mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary/30 border border-text/20 rounded-lg focus:outline-none focus:border-secondary text-textLight"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-textLight mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary/30 border border-text/20 rounded-lg focus:outline-none focus:border-secondary text-textLight"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-textLight mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-primary/30 border border-text/20 rounded-lg focus:outline-none focus:border-secondary text-textLight resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-primary py-3 rounded-lg font-medium hover:bg-opacity-80 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}