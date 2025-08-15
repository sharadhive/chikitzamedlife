import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Search,
  ShoppingCart,
  Clock,
  Zap,
  MapPin,
  Star,
  Plus,
  Minus,
} from "lucide-react";

const ScrollShop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const urgentMedicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 25.50,
      stock: 45,
      category: "Pain Relief",
      deliveryTime: "30 mins",
      nearestStore: "MedPlus - 0.5km"
    },
    {
      id: 2,
      name: "Aspirin 75mg",
      price: 35.00,
      stock: 30,
      category: "Heart Care", 
      deliveryTime: "25 mins",
      nearestStore: "Apollo - 0.8km"
    },
    {
      id: 3,
      name: "Insulin Pen",
      price: 450.00,
      stock: 8,
      category: "Diabetes",
      deliveryTime: "45 mins",
      nearestStore: "HealthPlus - 1.2km"
    },
    {
      id: 4,
      name: "Inhaler (Salbutamol)",
      price: 120.00,
      stock: 15,
      category: "Respiratory",
      deliveryTime: "20 mins",
      nearestStore: "MedPlus - 0.5km"
    },
    {
      id: 5,
      name: "Antacid Tablets",
      price: 18.00,
      stock: 60,
      category: "Digestive",
      deliveryTime: "35 mins",
      nearestStore: "1mg Store - 0.7km"
    },
    {
      id: 6,
      name: "Thermometer Digital",
      price: 85.00,
      stock: 12,
      category: "Equipment",
      deliveryTime: "40 mins",
      nearestStore: "Apollo - 0.8km"
    },
  ];

  const updateCart = (medicineId: number, change: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentQty = newCart[medicineId] || 0;
      const newQty = Math.max(0, currentQty + change);
      
      if (newQty === 0) {
        delete newCart[medicineId];
      } else {
        newCart[medicineId] = newQty;
      }
      
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const medicine = urgentMedicines.find(m => m.id === parseInt(id));
      return total + (medicine ? medicine.price * qty : 0);
    }, 0);
  };

  const filteredMedicines = urgentMedicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-poppins">
              Scroll & Shop
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Emergency medicine ordering - Fast, simple, urgent
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-destructive">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Average delivery: 30 minutes</span>
          </div>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Type medicine name for instant search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Medicine Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMedicines.map((medicine, index) => (
                <motion.div
                  key={medicine.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {medicine.name}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                              {medicine.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            ₹{medicine.price}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-3 h-3 text-success" />
                          <span className="text-success font-medium">
                            {medicine.deliveryTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{medicine.nearestStore}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {medicine.stock} in stock
                        </div>
                      </div>

                      {cart[medicine.id] ? (
                        <div className="flex items-center justify-between bg-primary/5 rounded-lg p-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateCart(medicine.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-medium px-4">
                            {cart[medicine.id]}
                          </span>
                          <Button
                            variant="medical"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateCart(medicine.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="medical" 
                          className="w-full"
                          onClick={() => updateCart(medicine.id, 1)}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Quick Cart
                  {Object.keys(cart).length > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {Object.keys(cart).length}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Object.keys(cart).length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Add medicines for quick checkout
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(cart).map(([id, qty]) => {
                      const medicine = urgentMedicines.find(m => m.id === parseInt(id));
                      if (!medicine) return null;
                      
                      return (
                        <div key={id} className="flex justify-between items-center text-sm">
                          <div className="flex-1">
                            <div className="font-medium">{medicine.name}</div>
                            <div className="text-muted-foreground">
                              ₹{medicine.price} × {qty}
                            </div>
                          </div>
                          <div className="font-bold">
                            ₹{(medicine.price * qty).toFixed(2)}
                          </div>
                        </div>
                      );
                    })}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary">₹{getCartTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button variant="medical" className="w-full mt-4">
                      <Zap className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                    
                    <div className="text-center text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3 inline mr-1" />
                      Express delivery in 30 mins
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Categories */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Pain Relief", "Heart Care", "Diabetes", "Respiratory"].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => setSearchQuery(category.toLowerCase())}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Emergency Mode Active
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Scroll & Shop bypasses regular cart processes for urgent medical needs. 
                    Delivery is prioritized and tracked in real-time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollShop;