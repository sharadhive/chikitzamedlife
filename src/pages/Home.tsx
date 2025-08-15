import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Upload,
  ShoppingBag,
  TestTube,
  Activity,
  Heart,
  Wallet,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Prescription Upload",
      description: "Upload prescriptions and auto-add medicines to cart with OCR technology",
      href: "/prescription-upload",
      gradient: "medical-gradient",
    },
    {
      icon: ShoppingBag,
      title: "Buy & Hold",
      description: "Reserve medicines for later pickup with flexible hold options",
      href: "/buy-hold",
      gradient: "healing-gradient",
    },
    {
      icon: TestTube,
      title: "Lab Tests",
      description: "Book lab tests at partner locations with smart scheduling",
      href: "/lab-tests",
      gradient: "trust-gradient",
    },
    {
      icon: Activity,
      title: "Health Insights",
      description: "AI-powered analysis of your health reports and prescriptions",
      href: "/health-insights",
      gradient: "secondary-gradient",
    },
    {
      icon: Heart,
      title: "Scroll Shop",
      description: "Quick medicine ordering for urgent medical needs",
      href: "/scroll-shop",
      gradient: "medical-gradient",
    },
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Manage refunds and payments with our secure wallet system",
      href: "/wallet",
      gradient: "healing-gradient",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "1M+", label: "Prescriptions Processed", icon: Upload },
    { number: "500+", label: "Partner Labs", icon: TestTube },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "OCR technology processes prescriptions in seconds",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your health data is encrypted and protected",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Order medicines and book tests anytime",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "All medicines are sourced from verified suppliers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 medical-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight"
              >
                Your Digital
                <br />
                <span className="text-accent-light">Healthcare</span>
                <br />
                Partner
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 mt-6 max-w-lg mx-auto lg:mx-0"
              >
                Upload prescriptions, order medicines, book lab tests, and get AI-powered health insights all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/prescription-upload">
                  <Button variant="glass" size="xl" className="group">
                    Upload Prescription
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/lab-tests">
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                    Book Lab Test
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="glass-effect hover-lift">
                        <CardContent className="p-4 text-center">
                          <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-poppins mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From prescription management to health insights, we've got everything you need for your healthcare journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={feature.href}>
                    <Card className="h-full hover-lift shadow-card-medical group">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {feature.description}
                        </p>
                        <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 healing-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
              Why Choose Chikitza?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience the future of healthcare with our innovative features and reliable service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-poppins mb-4">
              Ready to Transform Your Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Chikitza for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="medical" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/prescription-upload">
                <Button variant="outline" size="xl">
                  Upload First Prescription
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;