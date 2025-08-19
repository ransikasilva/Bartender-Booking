"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      role: "Wedding Couple",
      event: "Luxury Wedding Reception",
      content: "LuxBar transformed our wedding into pure magic! Their bartenders didn't just serve drinks – they created an entire experience. Our guests are still talking about the custom cocktails and the incredible flair show. Worth every penny!",
      rating: 5,
      date: "September 2024"
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Corporate Event Manager",
      event: "Tech Company Launch Party",
      content: "Professional, sophisticated, and absolutely flawless. The LuxBar team elevated our product launch to the next level. Their attention to detail and premium service impressed all our VIP clients. We'll definitely be booking them again!",
      rating: 5,
      date: "August 2024"
    },
    {
      id: 3,
      name: "Emma & David Chen",
      role: "Anniversary Celebration",
      event: "25th Wedding Anniversary",
      content: "What an incredible night! The personalized cocktail menu based on our story was so thoughtful. Every drink was a masterpiece, and the service was impeccable. Our family and friends were amazed by the whole experience.",
      rating: 5,
      date: "July 2024"
    },
    {
      id: 4,
      name: "Marcus Williams",
      role: "CEO, Williams Industries",
      event: "Executive Board Dinner",
      content: "LuxBar brought sophistication and elegance to our board dinner. The cocktail pairings were perfectly curated, and the bartenders' professionalism was outstanding. They understand how to serve high-level executives.",
      rating: 5,
      date: "June 2024"
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Birthday Party Host",
      event: "40th Birthday Celebration",
      content: "My 40th birthday party became the talk of the year thanks to LuxBar! The interactive cocktail station was a huge hit, and guests loved learning to make their own drinks. Fun, engaging, and absolutely delicious!",
      rating: 5,
      date: "May 2024"
    },
    {
      id: 6,
      name: "Robert & Jennifer Adams",
      role: "Corporate Retreat Organizers",
      event: "Company Retreat Gala",
      content: "Outstanding service from start to finish! LuxBar handled our 200-person corporate gala flawlessly. The themed cocktails matched our company brand perfectly, and the team was incredibly professional throughout the event.",
      rating: 5,
      date: "April 2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-black/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-primary font-semibold">Client Reviews</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                What Our <span className="text-gradient">Clients</span>
                <br />
                Say About Us
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied clients have to say 
                about their unforgettable experiences with LuxBar.
              </p>
            </ScrollReveal>
          </div>

          {/* Main Testimonial Card */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <div className="relative">
                  {/* Quote Icon - Outside the card for proper visibility */}
                  <motion.div 
                    className="absolute -top-6 left-8 z-30"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-background">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </motion.div>

                  <motion.div
                    key={currentTestimonial}
                    initial={{ 
                      opacity: 0, 
                      y: 60, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -30, 
                      scale: 1.05,
                      filter: "blur(5px)",
                      transition: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Card className="glass-morphism border-white/10 p-8 md:p-12 relative overflow-visible">
                      {/* Animated background gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Rating */}
                    <motion.div 
                      className="flex items-center justify-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                          <Star className="w-6 h-6 text-primary fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.blockquote 
                      className="text-xl md:text-2xl text-white/90 font-medium text-center leading-relaxed mb-8 italic relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div 
                      className="text-center relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <User className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="text-left">
                          <h4 className="text-white font-bold text-lg">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-white/60">
                            {testimonials[currentTestimonial].role}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-primary font-semibold">
                          {testimonials[currentTestimonial].event}
                        </p>
                        <p className="text-white/50 text-sm">
                          {testimonials[currentTestimonial].date}
                        </p>
                      </div>
                    </motion.div>
                    </Card>
                  </motion.div>
                </div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full glass-morphism text-white hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </motion.div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full glass-morphism text-white hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Dots Indicator */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                      : "bg-white/30 hover:bg-white/50 hover:scale-110"
                  }`}
                  whileHover={{ scale: index === currentTestimonial ? 1.3 : 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Stats Row */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { number: "4.9/5", label: "Average Rating", subtitle: "From 500+ reviews" },
              { number: "98%", label: "Client Satisfaction", subtitle: "Would recommend us" },
              { number: "100%", label: "Event Success", subtitle: "Flawless execution" }
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center p-6 glass-morphism rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-display font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2, 
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {stat.subtitle}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;