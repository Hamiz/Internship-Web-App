import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  MapPin,
  Clock,
  Building,
  Quote,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Internship {
  title: string;
  company: string;
  location: string;
  duration: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredInternships: Internship[] = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Company 1",
      location: "Islamabad",
      duration: "3 months",
    },
    {
      title: "Backend Developer Intern",
      company: "Innovative Solutions",
      location: "Karachi",
      duration: "6 months",
    },
    {
      title: "Mobile App Developer Intern",
      company: "AppWorks",
      location: "Lahore",
      duration: "4 months",
    },
    {
      title: "Data Scientist Intern",
      company: "Data Analytics Pro",
      location: "Rawalpindi",
      duration: "5 months",
    },
    {
      title: "UI/UX Designer Intern",
      company: "Design Studio",
      location: "Peshawar",
      duration: "2 months",
    },
    {
      title: "Software Engineer Intern",
      company: "Code Innovators",
      location: "Quetta",
      duration: "6 months",
    },
    {
      title: "AI & ML Intern",
      company: "AI Labs",
      location: "Multan",
      duration: "4 months",
    },
    {
      title: "Cybersecurity Intern",
      company: "CyberSec Solutions",
      location: "Faisalabad",
      duration: "3 months",
    },
    {
      title: "Full Stack Developer Intern",
      company: "NextGen Software",
      location: "Hyderabad",
      duration: "6 months",
    },
    {
      title: "Bussiness Analyst Intern",
      company: "Cloud Ways",
      location: "Bani Gala",
      duration: "4 months",
    },
    {
      title: "Meta AI Intern",
      company: "Facebook",
      location: "India",
      duration: "6 months",
    },
    {
      title: "Generative AI Intern",
      company: "Tesla",
      location: "Rajhastan",
      duration: "2 months",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "The internship experience was incredibly valuable. I learned so much and got great mentorship.",
      name: "Student Name",
      role: "Frontend Development Intern",
    },
    {
      quote:
        "Innovative Solutions provided me with hands-on backend development experience. The team was supportive and collaborative.",
      name: "Sara Ahmed",
      role: "Backend Developer Intern",
    },
    {
      quote:
        "At AppWorks, I worked on exciting mobile app projects that significantly improved my skills.",
      name: "Hamza Tariq",
      role: "Mobile App Developer Intern",
    },
    {
      quote:
        "The Data Scientist internship was challenging but rewarding. I gained real-world insights into big data and analytics.",
      name: "Fatima Sheikh",
      role: "Data Scientist Intern",
    },
    {
      quote:
        "My UI/UX internship helped me grow creatively and develop user-friendly designs for real projects.",
      name: "Ayesha Khan",
      role: "UI/UX Designer Intern",
    },
    {
      quote:
        "At Code Innovators, I enhanced my programming skills and learned best practices for software development.",
      name: "Michael Ali",
      role: "Software Engineer Intern",
    },
    {
      quote:
        "The AI & ML internship at AI Labs was a fantastic experience. It opened doors to exciting opportunities in AI.",
      name: "Zain Ali",
      role: "AI & ML Intern",
    },
    {
      quote:
        "Secure Systems gave me practical exposure to cybersecurity, and I feel confident in my skills now.",
      name: "Zainab Fatima",
      role: "Cybersecurity Intern",
    },
    {
      quote:
        "Hands on Experience with latest generative AI, Build yor own AI ChatBox with me.",
      name: "Zainab Fatima",
      role: "Generative AI Intern",
    },
  ];

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Fixed Visibility */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-600">
        <div
          className="absolute inset-0 opacity-20 bg-center bg-cover"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <img
            src="src/images/f1.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center relative z-20">
          <div className="md:w-1/2 space-y-8 transform transition-all duration-500">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white opacity-100">
                Internship
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
                  Pakistan
                </span>
              </h1>
              <div className="flex items-center space-x-2">
                <Rocket className="w-6 h-6 text-blue-300 animate-bounce" />
                <p className="text-2xl text-white font-semibold">
                  Pakistan's Leading Internships Platform
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
              We connect ambitious students with transformative internship
              opportunities across Pakistan. Get mentored by industry experts
              and gain real-world experience that shapes your future.
            </p>

            <div className="flex space-x-4">
              <Link
                to="/internships"
                className="group relative px-8 py-3 bg-white text-blue-700 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 font-semibold"
              >
                <div className="absolute inset-0 w-0 bg-blue-50 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative flex items-center space-x-2">
                  <span>Explore Internships</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative transform hover:scale-105 transition-all duration-500 max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-75 animate-pulse" />
              <img
                src="src/images/f3.jpg"
                alt="Virtual Internship"
                className="relative rounded-lg shadow-2xl w-full max-w-none h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"
          style={parallaxStyle}
        />

        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold mb-12 text-center transform transition-all duration-500 hover:scale-105">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Featured Internships
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInternships.map((internship, index) => (
              <div
                key={index}
                className={`
                  group relative bg-white p-6 rounded-xl shadow-lg 
                  transform transition-all duration-500 
                  ${
                    isVisible
                      ? "animate-[fadeInUp_0.6s_ease-out_forwards]"
                      : "opacity-0"
                  }
                  hover:-translate-y-2 hover:shadow-xl
                  ${hoveredCard === index ? "scale-105" : ""}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    {internship.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                      <Building className="w-4 h-4 text-blue-500" />
                      <span>{internship.company}</span>
                    </p>
                    <p className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{internship.location}</span>
                    </p>
                    <p className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{internship.duration}</span>
                    </p>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://www.linkedin.com/company/internship-pakistan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:bg-blue-200 hover:scale-105 group"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Testimonials
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500
                  ${
                    index === activeTestimonial
                      ? "scale-105"
                      : "scale-95 opacity-75"
                  }
                  hover:-translate-y-2 hover:shadow-xl
                `}
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-blue-500 animate-bounce" />
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-800 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <span>{testimonial.name}</span>
                    </p>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
