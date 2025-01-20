import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
  FileText,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<keyof FormData | "">(""); // Ensures that activeField is a valid key of FormData or an empty string
  const [isHovering, setIsHovering] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    blur: {
      scale: 1,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 py-16 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-4xl"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto mb-6" />
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            We value every message and strive to respond within 24 hours. Your
            thoughts and inquiries matter to us.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 border border-white/20"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  {
                    name: "name",
                    icon: User,
                    placeholder: "Your Name",
                    type: "text",
                  },
                  {
                    name: "email",
                    icon: Mail,
                    placeholder: "Email Address",
                    type: "email",
                  },
                  {
                    name: "subject",
                    icon: FileText,
                    placeholder: "Subject",
                    type: "text",
                  },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    variants={inputVariants}
                    animate={activeField === field.name ? "focus" : "blur"}
                    className="relative group"
                    onHoverStart={() => setIsHovering(field.name)}
                    onHoverEnd={() => setIsHovering("")}
                  >
                    <field.icon
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                        activeField === field.name || isHovering === field.name
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                      size={20}
                    />
                    <input
                      type={field.type}
                      className="w-full p-4 pl-14 border-0 bg-white/60 rounded-xl focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300"
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof FormData]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      onFocus={() =>
                        setActiveField(field.name as keyof FormData)
                      }
                      onBlur={() => setActiveField("")}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400"
                      initial={{ width: "0%" }}
                      animate={{
                        width: activeField === field.name ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  variants={inputVariants}
                  animate={activeField === "message" ? "focus" : "blur"}
                  className="relative group"
                  onHoverStart={() => setIsHovering("message")}
                  onHoverEnd={() => setIsHovering("")}
                >
                  <MessageSquare
                    className={`absolute left-4 top-6 transition-colors duration-300 ${
                      activeField === "message" || isHovering === "message"
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <textarea
                    className="w-full p-4 pl-14 border-0 bg-white/60 rounded-xl focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300 h-40"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField("")}
                    required
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400"
                    initial={{ width: "0%" }}
                    animate={{
                      width: activeField === "message" ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center space-x-2 overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.span
                    className="relative z-10"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    Send Message
                  </motion.span>
                  <motion.div
                    className="relative z-10"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-16 text-center border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <CheckCircle
                  className="mx-auto text-green-500 mb-6"
                  size={72}
                />
              </motion.div>
              <h2 className="text-3xl font-light text-gray-800 mb-4">
                Message Received
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Thank you for reaching out. We'll be in touch with you shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactUs;
