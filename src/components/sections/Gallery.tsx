"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "parties", label: "Parties" },
    { id: "cocktails", label: "Cocktails" }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/bartender.jpg",
      alt: "Professional Bartender in Action",
      category: ["all", "parties", "cocktails"],
      title: "Flair Bartending Performance"
    },
    {
      id: 2,
      src: "/images/attractive-male-bartender-pouring-essence-from-spoon-flame-steel-shaker-scaled.jpg",
      alt: "Bartender Creating Flaming Cocktail",
      category: ["all", "cocktails", "parties"],
      title: "Fire Cocktail Creation"
    },
    {
      id: 3,
      src: "/images/barman-gently-pours-finished-cocktail-600nw-1689689371.jpg.webp",
      alt: "Bartender Pouring Premium Cocktail",
      category: ["all", "cocktails", "corporate"],
      title: "Precision Pour Technique"
    },
    {
      id: 4,
      src: "/images/istockphoto-680866296-612x612.jpg",
      alt: "Corporate Event Bartending",
      category: ["all", "corporate"],
      title: "Corporate Event Service"
    },
    {
      id: 5,
      src: "/images/lovepik-the-image-of-a-handsome-bartender-making-cocktails-picture_501794338.jpg",
      alt: "Handsome Bartender Making Cocktails",
      category: ["all", "parties", "cocktails"],
      title: "Cocktail Craftsmanship"
    },
    {
      id: 6,
      src: "/images/pexels-anthony-shkraba-4485349-reduced-2048x1365-1.jpeg",
      alt: "Wedding Bartending Setup",
      category: ["all", "weddings"],
      title: "Wedding Reception Bar"
    },
    {
      id: 7,
      src: "/images/shutterstock_635611256-scaled.jpg",
      alt: "Premium Bar Setup",
      category: ["all", "weddings", "corporate"],
      title: "Luxury Bar Experience"
    },
    {
      id: 8,
      src: "/images/6152920.jpg",
      alt: "Professional Cocktail Service",
      category: ["all", "cocktails", "parties"],
      title: "Premium Cocktail Service"
    }
  ];

  const filteredImages = galleryImages.filter(image =>
    activeFilter === "all" || image.category.includes(activeFilter)
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Removed old variants - using ScrollReveal components instead

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary-black/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Our Work</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Event <span className="text-gradient">Gallery</span>
                <br />
                Moments We've Crafted
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of premium events, signature cocktails, and unforgettable 
                moments. Each image tells a story of excellence and artistry.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Buttons */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center px-4">
              <div className="glass-morphism rounded-2xl p-2 flex flex-wrap gap-2 justify-center max-w-full">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    variant={activeFilter === filter.id ? "default" : "ghost"}
                    className={`
                      rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 transition-all duration-300 text-xs sm:text-sm
                      ${activeFilter === filter.id 
                        ? "bg-primary text-primary-foreground font-semibold" 
                        : "text-white/70 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4 lg:px-0"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden glass-morphism">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h4 className="text-white font-semibold text-xs sm:text-sm">{image.title}</h4>
                      <p className="text-white/70 text-xs hidden sm:block">Click to view</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center pt-6 sm:pt-8 px-4">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-6 sm:px-8 w-full sm:w-auto"
            >
              View More Work
            </Button>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-10"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                {filteredImages.find(img => img.id === selectedImage) && (
                  <Image
                    src={filteredImages.find(img => img.id === selectedImage)!.src}
                    alt={filteredImages.find(img => img.id === selectedImage)!.alt}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;