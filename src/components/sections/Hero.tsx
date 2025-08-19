"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y }}
      >
        <Image
          src="/images/bartender.jpg"
          alt="Professional Bartender"
          fill
          className="object-cover object-center scale-110"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <div className="glass-morphism rounded-full px-6 py-3 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm text-white/90">5.0 Rating</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-sm text-white/90">500+ Events</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-sm text-white/90">10+ Years</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            <span className="text-white">Premium</span>
            <br />
            <span className="text-gradient">Bartenders</span>
            <br />
            <span className="text-white">for Extraordinary</span>
            <br />
            <span className="text-primary">Events</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed text-center px-4"
          >
            Elevate your event with world-class bartending services. 
            Professional flair, premium spirits, and unforgettable experiences 
            that leave your guests talking for years.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group w-full sm:w-auto"
              >
                Book Your Event
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("gallery")}
                className="border-2 border-white/20 bg-transparent hover:bg-white/10 text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group w-full sm:w-auto"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                View Gallery
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="pt-16 pb-20"
          >
            <p className="text-white/60 text-sm mb-6">Trusted by premium venues and private clients</p>
            <div className="flex justify-center space-x-8 text-white/40">
              <span className="text-lg font-semibold">Luxury Hotels</span>
              <span className="text-lg font-semibold">Corporate Events</span>
              <span className="text-lg font-semibold">Private Parties</span>
              <span className="text-lg font-semibold">Weddings</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rounded-full hidden lg:block"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-16 h-16 border border-primary/20 rounded-full hidden lg:block"
        style={{ animationDelay: "2s" }}
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mb-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
        <p className="text-white/60 text-xs text-center whitespace-nowrap">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;