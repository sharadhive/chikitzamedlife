import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Clock,
  Package,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const BuyHold = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "hold">("buy");

  const mockMedicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 25.50,
      stock: 45,
      category: "Pain Relief",
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      price: 85.00,
      stock: 12,
      category: "Antibiotic",
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Vitamin D3 60000 IU",
      price: 45.00,
      stock: 0,
      category: "Vitamins",
      image: "/api/placeholder/100/100"
    },
  ];

  const mockHeldItems = [
    {
      id: 1,
      name: "Aspirin 75mg",
      quantity: 2,
      holdDuration: "2 hours",
      expiresIn: "1h 45m",
      status: "active"
    },
    {
      id: 2,
      name: "Insulin Pen",
      quantity: 1,
      holdDuration: "Same day",
      expiresIn: "6h 20m",
      status: "active"
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-poppins mb-4">
            Buy & Hold Medicines
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve medicines for later pickup or buy loose quantities as needed
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "buy" ? "medical" : "ghost"}
              onClick={() => setActiveTab("buy")}
              className="px-6"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Buy Medicine
            </Button>
            <Button
              variant={activeTab === "hold" ? "medical" : "ghost"}
              onClick={() => setActiveTab("hold")}
              className="px-6"
            >
              <Clock className="w-4 h-4 mr-2" />
              My Holds
            </Button>
          </div>
        </div>

        {activeTab === "buy" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Remed Saver Section */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Remed Saver - Buy Loose Medicines
                </CardTitle>
                <p className="text-muted-foreground">
                  Buy only the quantity you need, not the full pack
                </p>
              </CardHeader>
            </Card>

            {/* Medicine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMedicines.map((medicine, index) => (
                <motion.div
                  key={medicine.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {medicine.name}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {medicine.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            ₹{medicine.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {medicine.stock > 0 ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm text-muted-foreground">
                              {medicine.stock} in stock
                            </span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4 text-warning" />
                            <span className="text-sm text-warning">
                              Out of stock
                            </span>
                          </>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Button 
                          variant="medical" 
                          size="sm" 
                          className="w-full"
                          disabled={medicine.stock === 0}
                        >
                          Buy Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          disabled={medicine.stock === 0}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Hold Medicine
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "hold" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Currently Held Items
                  </span>
                  <Badge variant="outline">
                    {mockHeldItems.length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockHeldItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Quantity: {item.quantity} • Hold: {item.holdDuration}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-warning font-medium">
                        Expires in {item.expiresIn}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button variant="medical" size="sm">
                          Purchase
                        </Button>
                        <Button variant="outline" size="sm">
                          Release
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Hold Options */}
            <Card>
              <CardHeader>
                <CardTitle>Hold Duration Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">10 Minutes</h4>
                    <p className="text-sm text-muted-foreground">Quick pickup</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">2 Hours</h4>
                    <p className="text-sm text-muted-foreground">Standard hold</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Same Day</h4>
                    <p className="text-sm text-muted-foreground">Extended hold</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuyHold;