"use client";

import { motion } from "framer-motion";
import { Wine, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Star, Award, Users, Calendar, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    "Wedding Bartending",
    "Corporate Events", 
    "Private Parties",
    "Cocktail Classes",
    "Event Planning",
    "Premium Bar Setup"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];


  return (
    <footer className="bg-gradient-to-b from-secondary-black to-primary-black border-t border-white/10 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Top Section with Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Company Info */}
            <ScrollReveal direction="up" delay={0} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Wine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-2xl font-display font-bold text-gradient">
                      LuxBar
                    </span>
                    <p className="text-primary/70 text-sm">Premium Bartending Services</p>
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed max-w-lg">
                  Creating extraordinary cocktail experiences for luxury events since 2014.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-white">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-white">booking@luxbar.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-white">New York, NY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-white">7 Days a Week</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal direction="up" delay={0.2}>
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2 mb-6">
                  {quickLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      whileHover={{ x: 3 }}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
                
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-sm"
                >
                  Book Now
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Social & Stats Section */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Stats */}
              <div className="flex space-x-8">
                {[
                  { number: "500+", label: "Events" },
                  { number: "4.9/5", label: "Rating" },
                  { number: "100%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-display font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/70 text-sm">Follow us:</span>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4 text-white hover:text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 LuxBar. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Contact", href: "#" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;