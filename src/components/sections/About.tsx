"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const About = () => {
  const stats = [
    {
      icon: Trophy,
      number: "500+",
      label: "Events Served",
      description: "Premium events delivered with excellence"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Happy Guests",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "Mastering the art of bartending"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
      description: "Recognition for exceptional service"
    }
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

  const countUpVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary-black/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
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
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold">About LuxBar</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Crafting <span className="text-gradient">Extraordinary</span>
                <br />
                Experiences Since 2014
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                We don't just serve drinks – we create moments that define your event. 
                Our team of world-class bartenders brings artistry, precision, and showmanship 
                to every gathering, turning ordinary occasions into unforgettable celebrations.
              </p>
            </ScrollReveal>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-semibold text-white">
                  Why Choose <span className="text-gradient">LuxBar</span>?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Our passion for mixology goes beyond just mixing drinks. We curate 
                  experiences that reflect your style, elevate your event's atmosphere, 
                  and leave lasting impressions on every guest.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Premium Ingredients",
                    description: "Only the finest spirits, fresh ingredients, and artisanal mixers"
                  },
                  {
                    title: "Professional Flair",
                    description: "Captivating performances that entertain while they serve"
                  },
                  {
                    title: "Custom Cocktails",
                    description: "Signature drinks tailored to your event's theme and preferences"
                  },
                  {
                    title: "Full Service",
                    description: "From setup to cleanup, we handle every detail"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-lg glass-morphism"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <ScrollReveal direction="left" delay={0.2}>
              <StaggerContainer className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <StaggerItem key={index}>
                        <motion.div
                          whileHover={{ y: -10, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="p-6 glass-morphism border-white/10 hover:border-primary/30 transition-all duration-300 text-center">
                            <IconComponent className="w-8 h-8 text-primary mx-auto mb-4" />
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                              viewport={{ once: true }}
                              className="text-3xl font-display font-bold text-white mb-2"
                            >
                              {stat.number}
                            </motion.div>
                            <div className="text-primary font-semibold mb-2">
                              {stat.label}
                            </div>
                            <p className="text-white/60 text-sm">
                              {stat.description}
                            </p>
                          </Card>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </ScrollReveal>
          </div>

          {/* Bottom Quote */}
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-display italic text-white/90 mb-6">
                "Every cocktail tells a story, every event becomes a legend. 
                We don't just serve drinks – we craft memories."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary font-semibold">Marcus Rodriguez, Head Bartender</span>
                <div className="w-12 h-px bg-primary" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;