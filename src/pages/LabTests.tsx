import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  TestTube,
  MapPin,
  Search,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"book" | "my-tests">("book");

  const mockTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      price: 299,
      duration: "4-6 hours",
      fasting: false,
      category: "Blood Test",
      description: "Comprehensive blood analysis"
    },
    {
      id: 2,
      name: "Lipid Profile",
      price: 450,
      duration: "12 hours",
      fasting: true,
      category: "Blood Test",
      description: "Cholesterol and lipid analysis"
    },
    {
      id: 3,
      name: "Thyroid Function Test",
      price: 650,
      duration: "24 hours",
      fasting: false,
      category: "Hormone Test",
      description: "T3, T4, and TSH levels"
    },
    {
      id: 4,
      name: "Diabetes Panel",
      price: 350,
      duration: "2-4 hours",
      fasting: true,
      category: "Blood Test",
      description: "Blood glucose and HbA1c"
    },
  ];

  const mockLabs = [
    {
      id: 1,
      name: "HealthLab Diagnostics",
      distance: "0.8 km",
      rating: 4.5,
      reviews: 234,
      address: "Medical Square, Sector 18"
    },
    {
      id: 2,
      name: "Metro Pathology",
      distance: "1.2 km", 
      rating: 4.3,
      reviews: 189,
      address: "City Hospital Complex"
    },
    {
      id: 3,
      name: "Advanced Diagnostics",
      distance: "2.1 km",
      rating: 4.7,
      reviews: 312,
      address: "Healthcare Plaza, Main Road"
    },
  ];

  const mockBookedTests = [
    {
      id: 1,
      testName: "Complete Blood Count",
      lab: "HealthLab Diagnostics",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "pending",
      amount: 299
    },
    {
      id: 2,
      testName: "Lipid Profile",
      lab: "Metro Pathology", 
      date: "2024-01-12",
      time: "9:30 AM",
      status: "completed",
      amount: 450
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-warning" />;
      case "in-process":
        return <AlertCircle className="w-4 h-4 text-primary" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-poppins mb-4">
            Lab Tests & Diagnostics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book lab tests at partner locations with smart scheduling
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "book" ? "medical" : "ghost"}
              onClick={() => setActiveTab("book")}
              className="px-6"
            >
              <TestTube className="w-4 h-4 mr-2" />
              Book Tests
            </Button>
            <Button
              variant={activeTab === "my-tests" ? "medical" : "ghost"}
              onClick={() => setActiveTab("my-tests")}
              className="px-6"
            >
              <Calendar className="w-4 h-4 mr-2" />
              My Tests
            </Button>
          </div>
        </div>

        {activeTab === "book" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Search Bar */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search lab tests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Available Tests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Available Tests
                </h2>
                <div className="space-y-4">
                  {mockTests.map((test, index) => (
                    <motion.div
                      key={test.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {test.name}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {test.category}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">
                                ₹{test.price}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-3">
                            {test.description}
                          </p>
                          
                          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {test.duration}
                            </span>
                            {test.fasting && (
                              <Badge variant="outline" className="text-xs">
                                Fasting Required
                              </Badge>
                            )}
                          </div>
                          
                          <Button variant="medical" className="w-full">
                            Book Now
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Partner Labs */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Partner Labs Near You
                </h2>
                <div className="space-y-4">
                  {mockLabs.map((lab, index) => (
                    <motion.div
                      key={lab.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {lab.name}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                {lab.distance} • {lab.address}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{lab.rating}</span>
                            </div>
                            <span className="text-muted-foreground text-sm">
                              ({lab.reviews} reviews)
                            </span>
                          </div>
                          
                          <Button variant="outline" className="w-full">
                            Select Lab
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "my-tests" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <TestTube className="w-5 h-5" />
                    Your Test History
                  </span>
                  <Badge variant="outline">
                    {mockBookedTests.length} tests
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockBookedTests.map((test, index) => (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">
                          {test.testName}
                        </h4>
                        {getStatusIcon(test.status)}
                        <Badge 
                          variant={test.status === "completed" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {test.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {test.lab} • {test.date} at {test.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary mb-2">
                        ₹{test.amount}
                      </div>
                      <div className="flex gap-2">
                        {test.status === "completed" && (
                          <Button variant="medical" size="sm">
                            Download Report
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Cashback Info */}
            <Card className="border-l-4 border-l-success">
              <CardHeader>
                <CardTitle className="text-success">Negative Report Cashback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get 50% cashback in your wallet if your test reports come back negative/normal. 
                  Cashback is automatically credited within 24 hours of report generation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LabTests;