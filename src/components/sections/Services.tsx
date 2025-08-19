"use client";

import { motion } from "framer-motion";
import { Heart, Building2, Users, GraduationCap, Sparkles, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Bartending",
      description: "Make your special day extraordinary with custom cocktail experiences that reflect your love story.",
      features: ["Custom signature cocktails", "Professional setup", "Full bar service", "Wedding cake cocktails"],
      price: "Starting at $2,500",
      popular: true,
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Elevate your business gatherings with sophisticated cocktail service and professional presentation.",
      features: ["Executive bar service", "Corporate branding", "Networking cocktails", "Team building mixology"],
      price: "Starting at $1,800",
      popular: false,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Users,
      title: "Private Parties",
      description: "Turn your celebration into an unforgettable experience with premium bartending and flair performances.",
      features: ["Flair bartending shows", "Interactive cocktail making", "Custom party themes", "VIP bottle service"],
      price: "Starting at $1,200",
      popular: false,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: GraduationCap,
      title: "Cocktail Masterclasses",
      description: "Learn from the masters with hands-on cocktail workshops for your group or corporate team building.",
      features: ["Professional instruction", "Premium ingredients", "Take-home recipes", "Certificate of completion"],
      price: "Starting at $150/person",
      popular: false,
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary-black/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Our Services</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Premium <span className="text-gradient">Bartending</span>
                <br />
                for Every Occasion
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                From intimate gatherings to grand celebrations, we bring world-class bartending 
                expertise to make your event unforgettable. Each service is tailored to your 
                vision and executed with precision.
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full"
                    >
                      <Card className="p-8 glass-morphism border-white/10 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden group">
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        {/* Popular Badge */}
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Most Popular
                          </Badge>
                        )}

                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-display font-bold text-white mb-4">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/70 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-3 mb-8">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-3 text-white/80">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between pt-6 border-t border-white/10">
                            <div>
                              <p className="text-sm text-white/60 mb-1">Investment</p>
                              <p className="text-lg font-bold text-primary">{service.price}</p>
                            </div>
                            <Button
                              onClick={scrollToContact}
                              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:scale-105 transition-transform"
                            >
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center pt-16">
              <div className="glass-morphism rounded-2xl p-12 max-w-4xl mx-auto">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Ready to Elevate Your Event?
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  Book your consultation today and let's create an unforgettable experience 
                  that will have your guests talking for years to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Package Details
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;