import { Wifi, Wind, Bath, Coffee, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Double Room with Air Conditioning",
      capacity: "2 guests",
      image: "/lovable-uploads/b6b75a2b-2344-4b82-9eb1-0f0c4b03de1c.png",
      description: "Comfortable double room with modern amenities and traditional Moroccan decor. Perfect for couples seeking comfort in the desert.",
      amenities: ["Wi-Fi", "AC", "Private Bathroom", "Breakfast Included"],
      price: "350 MAD/night"
    },
    {
      id: 2,
      title: "Twin-Bed Room with Air Conditioning",
      capacity: "2 guests",
      image: "/lovable-uploads/b6b75a2b-2344-4b82-9eb1-0f0c4b03de1c.png",
      description: "Spacious room with two comfortable single beds, ideal for friends or family members traveling together.",
      amenities: ["Wi-Fi", "AC", "Private Bathroom", "Breakfast Included"],
      price: "320 MAD/night"
    },
    {
      id: 3,
      title: "Single Room with Air Conditioning",
      capacity: "1 guest",
      image: "/lovable-uploads/b6b75a2b-2344-4b82-9eb1-0f0c4b03de1c.png",
      description: "Cozy single room perfect for solo travelers exploring the Sahara desert and local culture.",
      amenities: ["Wi-Fi", "AC", "Private Bathroom", "Breakfast Included"],
      price: "200 MAD/night"
    },
    {
      id: 4,
      title: "Desert Tents on the Sand",
      capacity: "2-4 guests",
      image: "/lovable-uploads/3d3aa762-a1b6-4eff-9388-eb9622fa3073.png",
      description: "Authentic Berber tents on the sand dunes with stunning sunrise views. Shared bathroom facilities and traditional desert experience.",
      amenities: ["Shared Bathroom", "Sunrise Views", "Traditional Experience", "Desert Location"],
      price: "180 MAD/person"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi":
        return <Wifi className="h-4 w-4" />;
      case "AC":
        return <Wind className="h-4 w-4" />;
      case "Private Bathroom":
      case "Shared Bathroom":
        return <Bath className="h-4 w-4" />;
      case "Breakfast Included":
        return <Coffee className="h-4 w-4" />;
      case "Sunrise Views":
      case "Desert Location":
        return <MapPin className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Accommodation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comfortable rooms or experience the magic of sleeping under the stars in our traditional desert tents
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-playfair">{room.title}</CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {room.capacity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {room.description}
                </p>
                
                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        {getAmenityIcon(amenity)}
                        <span className="text-xs">{amenity}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Booking */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-playfair font-bold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    <span className="text-sm">Traditional Moroccan breakfast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">Free Wi-Fi access</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Desert tour arrangements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-primary" />
                    <span className="text-sm">Clean towels and linens</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button size="lg">
                  Reserve Your Stay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;