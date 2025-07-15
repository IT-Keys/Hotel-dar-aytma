import { MapPin, Phone, Mail, MessageSquare, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you plan your perfect desert experience. Contact us for reservations, questions, or custom arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+212 123 456 789" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant Reservation</SelectItem>
                      <SelectItem value="accommodation">Accommodation Booking</SelectItem>
                      <SelectItem value="excursion">Desert Excursion</SelectItem>
                      <SelectItem value="cooking">Cooking Workshop</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your planned visit, special requirements, or any questions you have..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Khamlia Village, Merzouga<br />
                      Errachidia Province, Morocco
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone & WhatsApp</p>
                    <a href="tel:+212123456789" className="text-sm text-primary hover:underline">
                      +212 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@daraytma.com" className="text-sm text-primary hover:underline">
                      info@daraytma.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Operating Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Daily: 7:00 AM - 10:00 PM<br />
                      Restaurant: 12:00 PM - 10:00 PM
                    </p>
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <a href="https://wa.me/212123456789" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media & Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="flex flex-col items-center py-6" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-blue-600 rounded mb-2"></div>
                      <span className="text-xs">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-6" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-pink-600 rounded mb-2"></div>
                      <span className="text-xs">Instagram</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-6" asChild>
                    <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                      <div className="w-8 h-8 bg-green-600 rounded mb-2"></div>
                      <span className="text-xs">TripAdvisor</span>
                    </a>
                  </Button>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Customer Rating</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm font-medium">4.8/5</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Based on 127 reviews</p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Interactive Map<br />
                      Khamlia Village, Merzouga
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;