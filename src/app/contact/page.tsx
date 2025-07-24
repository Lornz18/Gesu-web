// app/contact/page.tsx

import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

// Set metadata for the page (good for SEO)
export const metadata: Metadata = {
  title: 'Contact Us | Your Company Name',
  description: 'Get in touch with us for support, inquiries, or feedback. We are here to help you.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-[2rem]">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary/80 dark:text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            We&apos;d love to hear from you. Whether you have a question, a comment, or just want to chat, we&apos;re here.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-24">
          
          {/* Contact Form Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl shadow-primary/30">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder='John Doe'
                    className="p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder='johndoe@example.com'
                    className="p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder='Inquiry about services'
                    className="p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder='Your message here...'
                    className="p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 focus:ring-primary-500 transition-colors duration-200"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white lg:mt-0">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find us at our office or get in touch via phone or email. We&apos;re happy to assist you.
            </p>
            <div className="space-y-6">
              {/* Email Info */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">General Inquiries</p>
                  <a href="mailto:support@yourcompany.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium">
                    support@yourcompany.com
                  </a>
                </div>
              </div>

              {/* Phone Info */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">Mon-Fri from 9am to 5pm.</p>
                  <a href="tel:+1-555-123-4567" className="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Address Info */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office Address</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    123 Innovation Drive<br />
                    Tech City, TC 54321<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}