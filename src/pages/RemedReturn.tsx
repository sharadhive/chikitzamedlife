import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeftRight,
  Package,
  Clock,
  CheckCircle,
  AlertTriangle,
  Recycle,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";

const RemedReturn = () => {
  const [activeTab, setActiveTab] = useState<"return" | "returnable">("return");

  const returnableItems = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      quantity: 2,
      purchaseDate: "2024-01-10",
      holdDuration: "2 hours",
      canReturn: true,
      returnValue: 25.50,
      reason: "Held but not collected"
    },
    {
      id: 2,
      name: "Vitamin D3 60000 IU",
      quantity: 1,
      purchaseDate: "2024-01-08",
      holdDuration: "Same day",
      canReturn: false,
      returnValue: 0,
      reason: "Return period expired"
    },
    {
      id: 3,
      name: "Antacid Tablets",
      quantity: 3,
      purchaseDate: "2024-01-12",
      holdDuration: "10 minutes",
      canReturn: true,
      returnValue: 54.00,
      reason: "Duplicate purchase"
    },
  ];

  const returnHistory = [
    {
      id: 1,
      name: "Aspirin 75mg",
      quantity: 2,
      returnDate: "2024-01-14",
      returnValue: 70.00,
      status: "completed",
      processingTime: "2 hours",
      refundSplit: { wallet: 35.00, original: 35.00 }
    },
    {
      id: 2,
      name: "Insulin Pen",
      quantity: 1,
      returnDate: "2024-01-11",
      returnValue: 450.00,
      status: "processing",
      processingTime: "1 day",
      refundSplit: { wallet: 225.00, original: 225.00 }
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "processing":
        return <Clock className="w-4 h-4 text-warning" />;
      case "rejected":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
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
            Remed Return
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Return held medicines and manage your return requests
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "return" ? "medical" : "ghost"}
              onClick={() => setActiveTab("return")}
              className="px-6"
            >
              <ArrowLeftRight className="w-4 h-4 mr-2" />
              Return Items
            </Button>
            <Button
              variant={activeTab === "returnable" ? "medical" : "ghost"}
              onClick={() => setActiveTab("returnable")}
              className="px-6"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Return History
            </Button>
          </div>
        </div>

        {activeTab === "return" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Return Process Info */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="w-5 h-5" />
                  Return Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 medical-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Request Return</h4>
                      <p className="text-muted-foreground text-sm">
                        Select items you want to return
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 healing-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Verification</h4>
                      <p className="text-muted-foreground text-sm">
                        Items are verified and processed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 trust-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Refund Split</h4>
                      <p className="text-muted-foreground text-sm">
                        50% to wallet, 50% to original payment
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Available for Return
                  </span>
                  <Badge variant="outline">
                    {returnableItems.filter(item => item.canReturn).length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {returnableItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 border rounded-lg ${
                      item.canReturn ? "hover:bg-muted/50" : "opacity-60"
                    } transition-colors`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {item.name}
                          </h4>
                          <Badge 
                            variant={item.canReturn ? "default" : "outline"}
                            className="text-xs"
                          >
                            {item.canReturn ? "Returnable" : "Not Returnable"}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Quantity: {item.quantity}</p>
                          <p>Purchased: {item.purchaseDate}</p>
                          <p>Hold Duration: {item.holdDuration}</p>
                          <p>Reason: {item.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {item.canReturn && (
                          <div className="text-lg font-bold text-success mb-2">
                            ₹{item.returnValue}
                          </div>
                        )}
                        <Button 
                          variant={item.canReturn ? "medical" : "outline"}
                          size="sm"
                          disabled={!item.canReturn}
                        >
                          {item.canReturn ? "Return Item" : "Cannot Return"}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Return to Remed Saver */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <ShoppingBag className="w-5 h-5" />
                  Return to Remed Saver Stock
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Returned medicines are added back to Remed Saver stock for loose quantity purchases. 
                  Some items may be eligible for Buy & Hold again after quality verification.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/5 rounded-lg">
                    <h5 className="font-medium text-foreground mb-1">Quality Check</h5>
                    <p className="text-sm text-muted-foreground">
                      All returned items undergo quality verification
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/5 rounded-lg">
                    <h5 className="font-medium text-foreground mb-1">Restock Time</h5>
                    <p className="text-sm text-muted-foreground">
                      Items available in stock within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "returnable" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5" />
                    Return History
                  </span>
                  <Badge variant="outline">
                    {returnHistory.length} returns
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {returnHistory.map((returnItem, index) => (
                  <motion.div
                    key={returnItem.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {returnItem.name}
                          </h4>
                          {getStatusIcon(returnItem.status)}
                          <Badge 
                            variant={returnItem.status === "completed" ? "default" : "outline"}
                            className="text-xs"
                          >
                            {returnItem.status}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Quantity: {returnItem.quantity}</p>
                          <p>Return Date: {returnItem.returnDate}</p>
                          <p>Processing Time: {returnItem.processingTime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success mb-2">
                          ₹{returnItem.returnValue}
                        </div>
                        {returnItem.status === "completed" && (
                          <div className="text-xs text-muted-foreground">
                            <p>Wallet: ₹{returnItem.refundSplit.wallet}</p>
                            <p>Original: ₹{returnItem.refundSplit.original}</p>
                          </div>
                        )}
                        <Button variant="outline" size="sm" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Return Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Total Returns</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {returnHistory.length}
                  </div>
                  <p className="text-muted-foreground text-sm">Items returned</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Total Refunded</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">
                    ₹{returnHistory.reduce((sum, item) => sum + item.returnValue, 0)}
                  </div>
                  <p className="text-muted-foreground text-sm">Amount refunded</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Success Rate</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-warning mb-2">
                    {Math.round((returnHistory.filter(r => r.status === "completed").length / returnHistory.length) * 100)}%
                  </div>
                  <p className="text-muted-foreground text-sm">Returns approved</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RemedReturn;