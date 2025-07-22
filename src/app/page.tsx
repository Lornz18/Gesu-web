"use client";

import { useState, useEffect } from "react";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

export default function SchoolHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence in Education",
      description: "Ranked #1 in academic performance for 3 consecutive years",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description:
        "100+ certified teachers with advanced degrees and international experience",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Modern Curriculum",
      description:
        "STEM-focused programs with AI, robotics, and digital literacy integration",
    },
  ];

  const announcements = [
    {
      date: "July 25, 2025",
      title: "New Semester Registration Opens",
      description: "Early bird discounts available until August 15th",
      urgent: true,
    },
    {
      date: "August 1, 2025",
      title: "Virtual Campus Tour",
      description: "Join our interactive online tour every Saturday at 10 AM",
      urgent: false,
    },
    {
      date: "July 28, 2025",
      title: "Science Fair Winners Announced",
      description: "Congratulations to our outstanding student innovators",
      urgent: false,
    },
  ];

  const stats = [
    { number: "15K+", label: "Students" },
    { number: "98%", label: "Graduation Rate" },
    { number: "50+", label: "Countries" },
    { number: "25", label: "Years Excellence" },
  ];

  const testimonialSlides = [
    {
      text: "The personalized attention and innovative teaching methods have transformed my child's learning experience.",
      author: "Sarah Johnson",
      role: "Parent of Grade 10 Student",
      rating: 5,
    },
    {
      text: "Outstanding faculty and state-of-the-art facilities make this school a true center of excellence.",
      author: "Dr. Michael Chen",
      role: "Education Consultant",
      rating: 5,
    },
    {
      text: "The holistic approach to education here prepares students for real-world challenges and success.",
      author: "Emma Rodriguez",
      role: "Alumni, Class of 2023",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-primary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Shape Your
                  <span className="block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Future Today
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of students worldwide in our cutting-edge
                  educational environment. Experience personalized learning,
                  innovative technology, and exceptional mentorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-primary/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Enroll Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary/50">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/80 rounded-3xl rotate-6 opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                  alt="Students in modern classroom"
                  width={800}
                  height={384}
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Classes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NextGen Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing world-class education that
              prepares students for tomorrow&apos;s challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Announcements
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest news and events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {announcement.urgent && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-medium">
                    🔥 URGENT
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-medium text-sm">
                      {announcement.date}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary/50 transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {announcement.description}
                  </p>
                  <button className="text-primary font-medium hover:text-blue-700 flex items-center transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our students, parents, and partners
            </p>
          </div>

          <div className="relative">
            <div className="bg-primary/80 rounded-3xl p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonialSlides[currentSlide].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                &apos;{testimonialSlides[currentSlide].text}&apos;
              </blockquote>
              <div>
                <div className="font-bold text-lg">
                  {testimonialSlides[currentSlide].author}
                </div>
                <div className="text-blue-200">
                  {testimonialSlides[currentSlide].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonialSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary/80" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 text-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our global community of learners and unlock your potential with
            personalized education, cutting-edge technology, and world-class
            mentorship.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Enroll Now - Limited Seats
            </button>
            <button className="bg-primary border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
              Schedule a Tour
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="font-medium">admissions@nextgenacademy.edu</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <span className="font-medium">
                123 Education Blvd, Learning City
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
