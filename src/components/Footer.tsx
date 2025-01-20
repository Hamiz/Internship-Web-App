import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpCircle,
  Heart,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Interneepk-100093222249320/",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://www.internee.pk/", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/internee.pk/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/internship-pakistan/",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "intershippakistan@gmail.com",
      href: "mailto:intershippakistan@gmail.com",
    },
    { icon: Phone, text: "+923243243423", href: "tel:+923243243423" },
    {
      icon: MapPin,
      text: "Karachi, Sindh.",
      href: "#",
    },
  ];

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-light tracking-wide">
              Intership Pakistan
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-violet-400" />
            <p className="text-gray-300 leading-relaxed">
              Creating innovative solutions for tomorrow's challenges. Join us
              in building the future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-light">Quick Links</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-violet-400" />
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                      whileHover={{ x: 6 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-light">Contact Info</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-violet-400" />
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <motion.a
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 6 }}
                  >
                    <info.icon size={20} className="text-blue-400" />
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-light">Newsletter</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-violet-400" />
            <p className="text-gray-300 text-sm">
              Stay updated with our latest news and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 backdrop-blur-sm"
              />
              <motion.button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-gray-300 flex items-center">
            © {new Date().getFullYear()} Internship Pakistan. Made with
            <Heart size={16} className="mx-1 text-red-400" />
            by Hamiz Ahmed Khan
          </p>
          <div className="flex space-x-4 text-sm text-gray-300">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-full shadow-lg"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUpCircle size={24} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
