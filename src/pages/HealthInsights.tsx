import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  Upload,
  Brain,
  FileText,
  Download,
  TrendingUp,
  Heart,
  AlertTriangle,
} from "lucide-react";

const HealthInsights = () => {
  const [analysisState, setAnalysisState] = useState<"upload" | "analyzing" | "results">("upload");

  const mockInsights = {
    summary: "Your recent lab reports show overall good health with some areas that need attention.",
    riskScore: 75,
    recommendations: [
      "Consider reducing sodium intake to below 2300mg per day",
      "Increase vitamin D supplementation to 2000 IU daily",
      "Monitor blood pressure weekly for the next month",
      "Schedule follow-up with cardiologist in 6 months"
    ],
    keyFindings: [
      {
        parameter: "Cholesterol",
        value: "210 mg/dL",
        status: "borderline",
        trend: "up"
      },
      {
        parameter: "Blood Sugar",
        value: "95 mg/dL",
        status: "normal",
        trend: "stable"
      },
      {
        parameter: "Vitamin D",
        value: "18 ng/mL",
        status: "low",
        trend: "down"
      }
    ]
  };

  const handleAnalyze = () => {
    setAnalysisState("analyzing");
    setTimeout(() => {
      setAnalysisState("results");
    }, 4000);
  };

  if (analysisState === "analyzing") {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-2">AI Analyzing Your Health Data</h2>
          <p className="text-muted-foreground mb-4">Processing reports and generating insights...</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4 }}
            className="w-64 h-2 bg-muted rounded-full mx-auto overflow-hidden"
          >
            <div className="h-full medical-gradient rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (analysisState === "results") {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Health Analysis Complete</h1>
            <p className="text-muted-foreground">Your personalized health insights are ready</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Health Score */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Health Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - mockInsights.riskScore / 100)}`}
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {mockInsights.riskScore}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Good overall health with room for improvement
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Findings */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Key Findings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockInsights.keyFindings.map((finding, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{finding.parameter}</h4>
                        <p className="text-muted-foreground">{finding.value}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          finding.status === "normal" ? "bg-success/10 text-success" :
                          finding.status === "low" || finding.status === "high" ? "bg-destructive/10 text-destructive" :
                          "bg-warning/10 text-warning"
                        }`}>
                          {finding.status}
                        </span>
                        <TrendingUp className={`w-4 h-4 ${
                          finding.trend === "up" ? "text-destructive" :
                          finding.trend === "down" ? "text-warning" :
                          "text-muted-foreground"
                        }`} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Summary and Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>AI Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {mockInsights.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockInsights.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="medical" size="lg" className="group">
              <Download className="w-5 h-5 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" size="lg">
              <Upload className="w-5 h-5 mr-2" />
              Upload More Reports
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-poppins mb-4">
            AI Health Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your lab reports and prescriptions for AI-powered health analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Health Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Drop Your Reports Here
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Lab reports, prescriptions, or scan images
                  </p>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Files
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information (Optional)
                    </label>
                    <Textarea 
                      placeholder="Describe any symptoms, concerns, or specific questions you have..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    variant="medical" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAnalyze}
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Analyze with AI
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  What Our AI Analyzes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 medical-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Lab Report Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive analysis of blood work, urine tests, and other diagnostics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 healing-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Prescription Review</h4>
                      <p className="text-muted-foreground text-sm">
                        Analysis of medications, dosages, and potential interactions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 trust-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Health Trends</h4>
                      <p className="text-muted-foreground text-sm">
                        Track changes over time and identify patterns in your health data
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 secondary-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Risk Assessment</h4>
                      <p className="text-muted-foreground text-sm">
                        Identify potential health risks and get personalized recommendations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">Privacy & Security</h5>
                  <p className="text-sm text-muted-foreground">
                    Your health data is encrypted and processed securely. We never store your 
                    personal health information permanently.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;