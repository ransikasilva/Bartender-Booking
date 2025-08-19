"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    location: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "",
          guestCount: "",
          location: "",
          message: ""
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtitle: "Available 9 AM - 9 PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "booking@luxbar.com",
      subtitle: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      subtitle: "Serving tri-state area"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "7 Days a Week",
      subtitle: "Flexible scheduling"
    }
  ];

  const eventTypes = [
    "Wedding Reception",
    "Corporate Event", 
    "Private Party",
    "Birthday Celebration",
    "Anniversary",
    "Cocktail Class",
    "Other"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary-black/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Book Your Event</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Let's Create Something
                <br />
                <span className="text-gradient">Extraordinary</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Ready to elevate your event? Get in touch with us today for a personalized 
                consultation and let's craft an unforgettable experience together.
              </p>
            </ScrollReveal>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
              <Card className="glass-morphism border-white/10 p-6 sm:p-8 lg:p-10 h-full">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      Book Your Event
                    </h3>
                    <p className="text-primary font-medium text-sm sm:text-base">Premium bartending services</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h4 className="text-3xl font-display font-bold text-white mb-4">Booking Request Sent!</h4>
                    <p className="text-white/70 text-lg max-w-md mx-auto">
                      Thank you for choosing LuxBar. We'll contact you within 2 hours with a personalized quote.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-display font-semibold text-primary border-b border-primary/20 pb-2">
                        Contact Information
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="group">
                          <Label htmlFor="name" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Full Name *
                          </Label>
                          <div className="relative">
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="glass-morphism border-white/20 text-white placeholder:text-white/40 h-12 text-lg focus:border-primary/50 transition-all pl-4"
                              placeholder="Your full name"
                            />
                          </div>
                        </div>
                        <div className="group">
                          <Label htmlFor="email" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Email Address *
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="glass-morphism border-white/20 text-white placeholder:text-white/40 h-12 text-lg focus:border-primary/50 transition-all pl-4"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="group">
                          <Label htmlFor="phone" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Phone Number *
                          </Label>
                          <div className="relative">
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="glass-morphism border-white/20 text-white placeholder:text-white/40 h-12 text-lg focus:border-primary/50 transition-all pl-4"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                        <div className="group">
                          <Label htmlFor="eventDate" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Event Date *
                          </Label>
                          <div className="relative">
                            <Input
                              id="eventDate"
                              name="eventDate"
                              type="date"
                              value={formData.eventDate}
                              onChange={handleInputChange}
                              required
                              className="glass-morphism border-white/20 text-white h-12 text-lg focus:border-primary/50 transition-all pl-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-display font-semibold text-primary border-b border-primary/20 pb-2">
                        Event Details
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="group">
                          <Label htmlFor="eventType" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Event Type *
                          </Label>
                          <div className="relative">
                            <select
                              id="eventType"
                              name="eventType"
                              value={formData.eventType}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 h-12 glass-morphism border border-white/20 rounded-md text-white bg-transparent text-lg focus:border-primary/50 transition-all appearance-none cursor-pointer"
                            >
                              <option value="" className="bg-black">Select your event type</option>
                              {eventTypes.map(type => (
                                <option key={type} value={type} className="bg-black text-white">{type}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                              <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="group">
                          <Label htmlFor="guestCount" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                            Guest Count *
                          </Label>
                          <div className="relative">
                            <Input
                              id="guestCount"
                              name="guestCount"
                              type="number"
                              value={formData.guestCount}
                              onChange={handleInputChange}
                              required
                              className="glass-morphism border-white/20 text-white placeholder:text-white/40 h-12 text-lg focus:border-primary/50 transition-all pl-4"
                              placeholder="Number of guests"
                              min="1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <Label htmlFor="location" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                          Event Location *
                        </Label>
                        <div className="relative">
                          <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="glass-morphism border-white/20 text-white placeholder:text-white/40 h-12 text-lg focus:border-primary/50 transition-all pl-4"
                            placeholder="Venue name or address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-display font-semibold text-primary border-b border-primary/20 pb-2">
                        Additional Details
                      </h4>
                      <div className="group">
                        <Label htmlFor="message" className="text-white font-semibold text-sm uppercase tracking-wide mb-2 block">
                          Tell us about your vision
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="glass-morphism border-white/20 text-white placeholder:text-white/40 text-lg focus:border-primary/50 transition-all p-4 resize-none"
                            placeholder="Share your event vision, special cocktail requests, themes, or any specific requirements you have in mind..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold py-4 text-xl h-14 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary/25"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current mr-3" />
                            Processing Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6 mr-3" />
                            Request Premium Quote
                          </>
                        )}
                      </Button>
                      
                      <div className="flex items-center justify-center space-x-2 mt-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-white/70 text-sm font-medium">
                          2-hour response guarantee • Available 7 days a week
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="left" delay={0.4} className="space-y-4">
              <Card className="glass-morphism border-white/10 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Contact Details
                  </h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 3 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                          <p className="text-primary font-medium text-sm">{info.content}</p>
                          <p className="text-white/60 text-xs">{info.subtitle}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-morphism border-white/10 p-5">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">
                    Why Choose Us?
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: CheckCircle, text: "2 Hour Response", detail: "Quick response" },
                    { icon: Users, text: "500+ Events", detail: "Proven experience" },
                    { icon: Clock, text: "7 Days a Week", detail: "Always available" },
                    { icon: CheckCircle, text: "100% Guarantee", detail: "Your satisfaction" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm block">{item.text}</span>
                          <span className="text-white/50 text-xs">{item.detail}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="glass-morphism border-white/10 p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Urgent Booking?
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Need last-minute bartending services? We're here to help!
                  </p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-sm h-10"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call: (555) 123-4567
                  </Button>
                  <p className="text-primary/70 text-xs mt-2">
                    Available 24/7
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;