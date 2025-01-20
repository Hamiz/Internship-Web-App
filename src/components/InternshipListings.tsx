import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Building2,
  Clock,
  Briefcase,
  Filter,
} from "lucide-react";

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
}

const InternshipListings = () => {
  const [filters, setFilters] = useState({
    duration: "",
    location: "",
    type: "",
    search: "",
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const internships: Internship[] = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Company 1",
      location: "Islamabad",
      duration: "3 months",
      type: "Technical",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      company: "Tech Solutions",
      location: "Karachi",
      duration: "6 months",
      type: "Technical",
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "DataCorp",
      location: "Lahore",
      duration: "2 months",
      type: "Technical",
    },
    {
      id: 4,
      title: "Project Management Intern",
      company: "Management Hub",
      location: "Rawalpindi",
      duration: "4 months",
      type: "Non-Technical",
    },
    {
      id: 5,
      title: "UI/UX Designer Intern",
      company: "Design Studio",
      location: "Islamabad",
      duration: "3 months",
      type: "Technical",
    },
    {
      id: 6,
      title: "Cybersecurity Intern",
      company: "SecureTech",
      location: "Karachi",
      duration: "5 months",
      type: "Technical",
    },
    {
      id: 7,
      title: "Marketing Intern",
      company: "Marketing Wizards",
      location: "Lahore",
      duration: "3 months",
      type: "Non-Technical",
    },
    {
      id: 8,
      title: "Business Analyst Intern",
      company: "Enterprise Solutions",
      location: "Faisalabad",
      duration: "4 months",
      type: "Non-Technical",
    },
    {
      id: 9,
      title: "Artificial Intelligence Intern",
      company: "AI Innovators",
      location: "Peshawar",
      duration: "6 months",
      type: "Technical",
    },
    {
      id: 10,
      title: "Content Writer Intern",
      company: "Creative Minds",
      location: "Quetta",
      duration: "3 months",
      type: "Non-Technical",
    },
  ];

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      const matchesSearch =
        !filters.search ||
        internship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.company.toLowerCase().includes(filters.search.toLowerCase());
      const matchesDuration =
        !filters.duration || internship.duration === filters.duration;
      const matchesLocation =
        !filters.location || internship.location === filters.location;
      const matchesType = !filters.type || internship.type === filters.type;

      return matchesSearch && matchesDuration && matchesLocation && matchesType;
    });
  }, [internships, filters]);

  const uniqueLocations = [...new Set(internships.map((i) => i.location))];
  const uniqueDurations = [...new Set(internships.map((i) => i.duration))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search internships or companies..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300"
                value={filters.duration}
                onChange={(e) =>
                  setFilters({ ...filters, duration: e.target.value })
                }
              >
                <option value="">Duration</option>
                {uniqueDurations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <option value="">Location</option>
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300"
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <option value="">Type</option>
                <option value="Technical">Technical</option>
                <option value="Non-Technical">Non-Technical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center space-x-2 mb-6 text-gray-600">
        <Filter className="w-4 h-4" />
        <span>{filteredInternships.length} internships found</span>
      </div>

      {/* Listings */}
      <div className="space-y-4">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              hoveredCard === internship.id ? "scale-[1.02]" : ""
            }`}
            onMouseEnter={() => setHoveredCard(internship.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {internship.title}
                </h3>
                <div className="space-y-1">
                  <p className="flex items-center text-gray-600 space-x-2">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span>{internship.company}</span>
                  </p>
                  <p className="flex items-center text-gray-600 space-x-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{internship.location}</span>
                  </p>
                  <p className="flex items-center text-gray-600 space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{internship.duration}</span>
                  </p>
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    internship.type === "Technical"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {internship.type}
                </span>
              </div>
              <a
                href="https://www.linkedin.com/company/internship-pakistan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 inline-block"
              >
                <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative">Apply Now</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredInternships.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No internships found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default InternshipListings;
