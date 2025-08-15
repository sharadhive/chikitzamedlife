import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Stethoscope,
  TestTube,
  Upload,
  Wallet,
  Activity,
  ArrowLeftRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: "Prescription Upload", 
      href: "/prescription-upload", 
      icon: Upload,
      description: "Upload & Auto Cart"
    },
    { 
      name: "Buy & Hold", 
      href: "/buy-hold", 
      icon: ShoppingBag,
      description: "Reserve Medicines"
    },
    { 
      name: "Lab Tests", 
      href: "/lab-tests", 
      icon: TestTube,
      description: "Book Tests"
    },
    { 
      name: "Health Insights", 
      href: "/health-insights", 
      icon: Activity,
      description: "AI Analysis"
    },
    { 
      name: "Scroll Shop", 
      href: "/scroll-shop", 
      icon: Heart,
      description: "Quick Order"
    },
  ];

  const utilityItems = [
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Returns", href: "/remed-return", icon: ArrowLeftRight },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins text-gradient">
                Chikitza
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.name} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-primary/5 text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.description}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right side - Utilities & Auth */}
          <div className="flex items-center space-x-2">
            {/* Utility Items */}
            <div className="hidden md:flex items-center space-x-1">
              {utilityItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link key={item.name} to={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg transition-colors ${
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-primary/5 text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="medical" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {/* Main Navigation */}
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-primary/5 text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </Link>
              );
            })}

            {/* Utility Items */}
            <div className="border-t pt-4 mt-4">
              {utilityItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-primary/5 text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="border-t pt-4 mt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="medical" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;