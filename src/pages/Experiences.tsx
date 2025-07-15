import { ChefHat, Compass, Star, Camera, Mountain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Experiences = () => {
  const cookingWorkshops = [
    {
      title: "Traditional Tagine Making",
      duration: "3 hours",
      participants: "2-8 people",
      description: "Learn the secrets of preparing authentic Moroccan tagine with traditional spices and techniques passed down through generations.",
      includes: ["All ingredients", "Recipe cards", "Traditional cooking utensils", "Shared meal"],
      price: "200 MAD/person"
    },
    {
      title: "Couscous & Mint Tea Workshop",
      duration: "2.5 hours", 
      participants: "2-10 people",
      description: "Master the art of preparing fluffy couscous and brewing the perfect Moroccan mint tea in a hands-on family environment.",
      includes: ["Couscous preparation", "Tea ceremony", "Family stories", "Recipe collection"],
      price: "150 MAD/person"
    }
  ];

  const desertExperiences = [
    {
      title: "4×4 Sahara Adventure",
      duration: "Half day / Full day",
      participants: "2-6 people",
      description: "Explore the stunning Erg Chebbi dunes in our comfortable 4×4 vehicles with experienced local guides.",
      highlights: ["Erg Chebbi dunes", "Fossil discoveries", "Nomad encounters", "Sunset viewing"],
      price: "300 MAD/person"
    },
    {
      title: "Overnight Desert Camp",
      duration: "2 days / 1 night",
      participants: "2-12 people", 
      description: "Experience the magic of sleeping under the stars with traditional Berber music around the campfire.",
      highlights: ["Camel trekking", "Traditional dinner", "Berber music", "Stargazing", "Sunrise viewing"],
      price: "450 MAD/person"
    },
    {
      title: "Stargazing Night",
      duration: "3 hours",
      participants: "2-15 people",
      description: "Discover the incredible night sky of the Sahara desert with minimal light pollution and traditional astronomical knowledge.",
      highlights: ["Telescope viewing", "Constellation stories", "Traditional navigation", "Hot tea service"],
      price: "120 MAD/person"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Desert Adventures & Cooking Classes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in authentic Moroccan culture through hands-on cooking experiences and unforgettable desert adventures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cooking Workshops */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ChefHat className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-playfair font-bold text-foreground">
                Cooking Workshops
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Learn to prepare traditional Moroccan dishes with our family. Hands-on cooking classes where you'll discover the secrets of our cuisine, from selecting spices to mastering traditional techniques.
            </p>
            
            <div className="space-y-6">
              {cookingWorkshops.map((workshop, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="text-xl">{workshop.title}</span>
                      <span className="text-primary font-bold">{workshop.price}</span>
                    </CardTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {workshop.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {workshop.participants}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{workshop.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">What's Included:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {workshop.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desert Excursions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Compass className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-playfair font-bold text-foreground">
                Desert Excursions
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Explore the breathtaking Sahara desert with our experienced local guides. From thrilling 4×4 adventures to peaceful stargazing nights, discover the magic of the world's largest hot desert.
            </p>
            
            <div className="space-y-6">
              {desertExperiences.map((experience, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="text-xl">{experience.title}</span>
                      <span className="text-primary font-bold">{experience.price}</span>
                    </CardTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {experience.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {experience.participants}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {experience.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="flex gap-4">
                  <Mountain className="h-8 w-8 text-primary" />
                  <Camera className="h-8 w-8 text-primary" />
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Ready for Your Desert Adventure?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book your cooking workshop or desert excursion today and create unforgettable memories in the heart of the Sahara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book Cooking Class</Button>
                <Button size="lg" variant="outline">Book Desert Tour</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;