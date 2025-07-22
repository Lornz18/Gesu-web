import React from 'react';
import { Users, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '1,200+', label: 'Students', icon: Users },
    { number: '85+', label: 'Faculty Members', icon: Award },
    { number: '50+', label: 'Programs', icon: BookOpen },
    { number: '25', label: 'Years of Excellence', icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We foster honest, ethical behavior and moral principles in all our interactions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative thinking and cutting-edge approaches to education.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong relationships and collaborative learning environments.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue the highest standards in academic achievement and personal growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Our Institution
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Dedicated to fostering academic excellence, character development, and preparing 
            students for success in an ever-evolving global landscape.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="bg-background rounded-lg p-8 sm:p-12 shadow-sm border border-primary/10">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              To provide comprehensive education that empowers students with knowledge, critical thinking skills, 
              and moral values necessary to become responsible global citizens and leaders in their chosen fields. 
              We are committed to creating an inclusive learning environment that celebrates diversity, 
              encourages innovation, and promotes lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-foreground/70 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Heritage</h2>
              <div className="space-y-6 text-foreground/80">
                <p className="leading-relaxed">
                  Founded in 1999, our institution began with a vision to transform education 
                  and create opportunities for students from all backgrounds. What started as 
                  a small community school has grown into a recognized center of academic excellence.
                </p>
                <p className="leading-relaxed">
                  Over the decades, we have continuously evolved our programs and facilities 
                  to meet the changing needs of students and society. Our commitment to 
                  innovation in education while maintaining traditional values has been 
                  the cornerstone of our success.
                </p>
                <p className="leading-relaxed">
                  Today, we proudly serve a diverse student body and continue to expand 
                  our impact through research, community engagement, and partnerships 
                  with institutions worldwide.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-background rounded-lg p-8 border border-secondary/20 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-medium text-foreground">1999</div>
                      <div className="text-sm text-foreground/70">Institution founded</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-medium text-foreground">2005</div>
                      <div className="text-sm text-foreground/70">First accreditation achieved</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-medium text-foreground">2015</div>
                      <div className="text-sm text-foreground/70">Modern campus expansion</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-medium text-foreground">2020</div>
                      <div className="text-sm text-foreground/70">Digital transformation initiative</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl leading-relaxed opacity-90">
            To be a globally recognized institution that shapes future leaders, 
            drives innovation, and contributes meaningfully to society through 
            excellence in education, research, and community service.
          </p>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-primary/10 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Message from Leadership</h2>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>
            <blockquote className="text-lg text-foreground/90 leading-relaxed text-center italic">
              "Education is not preparation for life; education is life itself. At our institution, 
              we believe in nurturing not just academic excellence, but also character, creativity, 
              and critical thinking. Every student who walks through our doors is valued, supported, 
              and empowered to reach their full potential."
            </blockquote>
            <div className="text-center mt-6">
              <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
              <div className="text-foreground/70">President & Academic Director</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}