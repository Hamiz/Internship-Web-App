import { useState } from "react";
import {
  Award,
  Users,
  Rocket,
  Target,
  ChevronRight,
  Milestone,
  Heart,
  Trophy,
} from "lucide-react";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const timeline = [
    {
      year: "2020",
      title: "Platform Launch",
      description:
        "Started with a vision to transform internship experiences in Pakistan",
      icon: Rocket,
      color: "bg-blue-500",
    },
    {
      year: "2021",
      title: "Expanded to 500+ Companies",
      description:
        "Partnered with leading companies across multiple industries",
      icon: Users,
      color: "bg-green-500",
    },
    {
      year: "2022",
      title: "Launched Mentorship Program",
      description: "Introduced personalized guidance from industry experts",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      year: "2023",
      title: "10,000+ Students Placed",
      description:
        "Achieved milestone of helping thousands start their careers",
      icon: Trophy,
      color: "bg-orange-500",
    },
  ];

  const stats = [
    { label: "Students Placed", value: "10,000+", icon: Users },
    { label: "Partner Companies", value: "500+", icon: Milestone },
    { label: "Success Rate", value: "92%", icon: Trophy },
    { label: "Mentors", value: "200+", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-500 text-white py-20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-center bg-cover" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-200 transform transition-all duration-500 hover:scale-105">
              About Internship Pakistan
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bridging the gap between academic excellence and professional
              success
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Internship Pakistan aims to bridge the gap between academic
                learning and professional experience by connecting talented
                students with leading companies across Pakistan. We believe in
                creating opportunities that transform careers and shape the
                future of our nation's workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div
                  className={`
                  absolute left-0 w-1 h-full bg-gray-200 transform transition-all duration-500
                  ${activeSection === index ? "scale-y-100" : "scale-y-0"}
                `}
                />
                <div
                  className={`
                  relative bg-white rounded-xl shadow-lg p-6 ml-8 transform transition-all duration-500
                  ${activeSection === index ? "translate-x-4 scale-105" : ""}
                `}
                >
                  <div
                    className={`
                    absolute -left-12 w-8 h-8 rounded-full ${
                      item.color
                    } flex items-center justify-center
                    transform transition-all duration-500
                    ${activeSection === index ? "scale-125" : ""}
                  `}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-gray-800">
                      {item.year}
                    </div>
                    <ChevronRight
                      className={`
                      w-5 h-5 text-blue-600 transform transition-all duration-500
                      ${activeSection === index ? "translate-x-2" : ""}
                    `}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
