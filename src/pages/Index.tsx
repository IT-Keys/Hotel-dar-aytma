import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Bed, Compass, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Restaurant & Café",
      description: "Authentic Moroccan cuisine with traditional recipes"
    },
    {
      icon: Bed,
      title: "Guest Rooms & Desert Tents",
      description: "Comfortable accommodations and authentic desert camping"
    },
    {
      icon: Compass,
      title: "4×4 Desert Excursions & Stargazing Nights",
      description: "Explore the Sahara with expert local guides"
    }
  ];

  const galleryImages = [
    { src: "/lovable-uploads/bff23fc7-4a22-4326-b752-ac3d339e0849.png", alt: "Traditional courtyard seating" },
    { src: "/lovable-uploads/c0e89f21-fc29-426e-989a-c5ee13ecd8df.png", alt: "4x4 desert tour" },
    { src: "/lovable-uploads/bff23fc7-4a22-4326-b621-ac3d339e0.png", alt: "Cooking class" },
    { src: "/lovable-uploads/c218bbb1-64b6-492c-b4f2-eca65e1c4ea0.png", alt: "Starlit campfire" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "An absolutely magical experience! The hospitality was incredible and the desert tour was the highlight of our Morocco trip.",
      rating: 5
    },
    {
      name: "Pierre Dubois",
      location: "Paris, France",
      text: "La nourriture était authentique et délicieuse. L'expérience dans le désert était inoubliable. Hautement recommandé!",
      rating: 5
    },
    {
      name: "Carlos Martinez",
      location: "Madrid, Spain",
      text: "Una experiencia única en el desierto. La familia es muy acogedora y la comida tradicional es excelente.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url(/lovable-uploads/2addc7f9-ef41-4b11-b606-56d3bca3ed8d.png)` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Welcome to Dar Aytma khamlia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Family-run restaurant, guesthouse & desert adventures in Merzouga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
              <Link to="/menu">Book a Table</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/rooms">Reserve a Room</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Experience Dar Aytma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-muted-foreground">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
