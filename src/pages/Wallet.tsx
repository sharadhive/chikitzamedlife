import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Banknote,
  Gift,
  Shield,
  History,
} from "lucide-react";

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState<"wallet" | "history">("wallet");

  const walletBalance = 1250.75;
  
  const transactions = [
    {
      id: 1,
      type: "credit",
      amount: 225.50,
      description: "Refund for Paracetamol return",
      date: "2024-01-15",
      time: "2:30 PM"
    },
    {
      id: 2,
      type: "debit",
      amount: 180.00,
      description: "Payment for Lab Test booking",
      date: "2024-01-14", 
      time: "11:45 AM"
    },
    {
      id: 3,
      type: "credit",
      amount: 125.00,
      description: "Cashback for negative lab report",
      date: "2024-01-12",
      time: "4:15 PM"
    },
    {
      id: 4,
      type: "debit",
      amount: 450.00,
      description: "Medicine purchase payment",
      date: "2024-01-10",
      time: "9:20 AM"
    },
  ];

  const quickActions = [
    {
      icon: Plus,
      title: "Add Money",
      description: "Top up your wallet",
      action: "add",
      color: "medical"
    },
    {
      icon: CreditCard,
      title: "Pay Bills",
      description: "Use wallet for payments",
      action: "pay",
      color: "healing"
    },
    {
      icon: Gift,
      title: "Send Money",
      description: "Transfer to family",
      action: "send",
      color: "trust"
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
            Digital Wallet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your refunds, cashbacks, and payments securely
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "wallet" ? "medical" : "ghost"}
              onClick={() => setActiveTab("wallet")}
              className="px-6"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </Button>
            <Button
              variant={activeTab === "history" ? "medical" : "ghost"}
              onClick={() => setActiveTab("history")}
              className="px-6"
            >
              <History className="w-4 h-4 mr-2" />
              History
            </Button>
          </div>
        </div>

        {activeTab === "wallet" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Wallet Balance Card */}
            <Card className="medical-gradient text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-white/80 text-sm">Chikitza Wallet</h2>
                      <p className="text-white/60 text-xs">Available Balance</p>
                    </div>
                  </div>
                  <Shield className="w-6 h-6 text-white/40" />
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    ₹{walletBalance.toLocaleString('en-IN', {minimumFractionDigits: 2})}
                  </div>
                  <p className="text-white/80 text-sm">
                    Wallet funds can only be used within the app
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button variant="glass" size="lg" className="flex-1">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Money
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-white/30 text-white hover:bg-white/10">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.action}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover-lift text-center">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 ${action.color}-gradient rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {action.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {action.description}
                        </p>
                        <Button variant="outline" className="w-full">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Recent Transactions Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Activity</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setActiveTab("history")}
                  >
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.slice(0, 3).map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "credit" ? "bg-success/10" : "bg-primary/10"
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowDownLeft className="w-5 h-5 text-success" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {transaction.description}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {transaction.date} • {transaction.time}
                          </p>
                        </div>
                      </div>
                      <div className={`font-semibold ${
                        transaction.type === "credit" ? "text-success" : "text-foreground"
                      }`}>
                        {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wallet Info */}
            <Card className="border-l-4 border-l-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <Shield className="w-5 h-5" />
                  Important Wallet Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Wallet funds can only be used within the Chikitza app</p>
                <p>• Refunds are split: 50% to wallet, 50% to original payment method</p>
                <p>• Cashback from negative lab reports is credited automatically</p>
                <p>• Wallet balance does not expire but cannot be withdrawn to bank</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "history" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Transaction History
                  </span>
                  <Badge variant="outline">
                    {transactions.length} transactions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          transaction.type === "credit" ? "bg-success/10" : "bg-primary/10"
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowDownLeft className="w-6 h-6 text-success" />
                          ) : (
                            <ArrowUpRight className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">
                            {transaction.description}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={transaction.type === "credit" ? "default" : "outline"}
                              className="text-xs"
                            >
                              {transaction.type === "credit" ? "Credit" : "Debit"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {transaction.date} • {transaction.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`text-right ${
                        transaction.type === "credit" ? "text-success" : "text-foreground"
                      }`}>
                        <div className="text-lg font-semibold">
                          {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-success">Total Credits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success mb-2">
                    ₹{transactions
                      .filter(t => t.type === "credit")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toFixed(2)
                    }
                  </div>
                  <p className="text-muted-foreground text-sm">
                    From refunds and cashbacks
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Total Debits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">
                    ₹{transactions
                      .filter(t => t.type === "debit")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toFixed(2)
                    }
                  </div>
                  <p className="text-muted-foreground text-sm">
                    For purchases and bookings
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WalletPage;