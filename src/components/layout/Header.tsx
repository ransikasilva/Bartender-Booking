"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-morphism py-2 md:py-4"
          : "bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-3 md:py-6"
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: '100%'
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Wine className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="text-xl sm:text-2xl font-display font-bold text-gradient">
            LuxBar
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="text-white/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </motion.button>
          ))}
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-80 bg-black/95 backdrop-blur-lg border-l border-white/10 md:hidden z-[120]"
            >
              {/* Close button - always visible */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full glass-morphism text-white hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all flex items-center justify-center"
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col h-full p-6 pt-20">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-4 text-lg text-white/80 hover:text-primary transition-colors border-b border-white/10"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;