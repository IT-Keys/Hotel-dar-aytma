import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Menu = () => {
  const foodMenu = [
    {
      name: "Moroccan Salad",
      nameEn: "Moroccan Salad",
      nameFr: "Salade Marocaine",
      nameEs: "Ensalada Marroquí",
      description: "Fresh mixed vegetables with traditional Moroccan herbs and olive oil",
      price: "45 MAD"
    },
    {
      name: "Minced-Meat Tagine",
      nameEn: "Minced-Meat Tagine",
      nameFr: "Tajine de Viande Hachée",
      nameEs: "Tajín de Carne Picada",
      description: "Slow-cooked minced meat with vegetables and aromatic spices",
      price: "120 MAD"
    },
    {
      name: "Seven-Vegetable Couscous",
      nameEn: "Seven-Vegetable Couscous",
      nameFr: "Couscous aux Sept Légumes",
      nameEs: "Cuscús de Siete Verduras",
      description: "Traditional couscous with seven seasonal vegetables and rich broth",
      price: "85 MAD"
    },
    {
      name: "Amazigh Salad",
      nameEn: "Amazigh Salad",
      nameFr: "Salade Amazigh",
      nameEs: "Ensalada Amazigh",
      description: "Traditional Berber salad with local ingredients and desert herbs",
      price: "40 MAD"
    },
    {
      name: "Khobz Madfouna (Buried Bread)",
      nameEn: "Khobz Madfouna (Buried Bread)",
      nameFr: "Khobz Madfouna (Pain Enterré)",
      nameEs: "Khobz Madfouna (Pan Enterrado)",
      description: "Traditional sand-baked bread stuffed with meat and vegetables",
      price: "95 MAD"
    }
  ];

  const drinksMenu = [
    {
      name: "Traditional Moroccan Mint Tea",
      nameEn: "Traditional Moroccan Mint Tea",
      nameFr: "Thé à la Menthe Marocain",
      nameEs: "Té de Menta Marroquí",
      description: "Authentic green tea with fresh mint leaves and sugar",
      price: "25 MAD"
    },
    {
      name: "Freshly-Squeezed Orange Juice",
      nameEn: "Freshly-Squeezed Orange Juice",
      nameFr: "Jus d'Orange Fraîchement Pressé",
      nameEs: "Zumo de Naranja Recién Exprimido",
      description: "Fresh local oranges squeezed to order",
      price: "30 MAD"
    },
    {
      name: "Assorted Soft Drinks",
      nameEn: "Assorted Soft Drinks",
      nameFr: "Boissons Gazeuses Variées",
      nameEs: "Refrescos Variados",
      description: "Coca-Cola, Sprite, Fanta and local beverages",
      price: "20 MAD"
    },
    {
      name: "Fresh Fruit Juices",
      nameEn: "Fresh Fruit Juices",
      nameFr: "Jus de Fruits Frais",
      nameEs: "Zumos de Frutas Frescas",
      description: "Seasonal fruit juices: pomegranate, apple, mixed fruits",
      price: "35 MAD"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Cuisine & Drinks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Authentic Moroccan flavors prepared with traditional recipes passed down through generations
          </p>
          <Button className="mb-8">
            <Download className="mr-2 h-4 w-4" />
            Download Full Menu (PDF)
          </Button>
        </div>

        {/* Menu Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Food Menu */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-primary">
                Traditional Dishes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {foodMenu.map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">{item.nameFr}</p>
                      <p className="text-sm text-muted-foreground">{item.nameEs}</p>
                    </div>
                    <span className="text-primary font-semibold text-lg ml-4">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Drinks Menu */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-primary">
                Beverages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {drinksMenu.map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">{item.nameFr}</p>
                      <p className="text-sm text-muted-foreground">{item.nameEs}</p>
                    </div>
                    <span className="text-primary font-semibold text-lg ml-4">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-playfair font-bold mb-2">Ready to Taste?</h3>
              <p className="text-muted-foreground mb-4">
                Reserve your table and experience authentic Moroccan hospitality
              </p>
              <Button size="lg" className="w-full">
                Book a Table
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;