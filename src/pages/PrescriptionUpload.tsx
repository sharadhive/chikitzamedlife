import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  Camera,
  FileText,
  CheckCircle,
  ShoppingCart,
  Eye,
  Download,
  Scan,
} from "lucide-react";

const PrescriptionUpload = () => {
  const [uploadState, setUploadState] = useState<"upload" | "processing" | "results">("upload");
  const [dragActive, setDragActive] = useState(false);

  const mockDetectedMedicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      dosage: "1 tablet twice daily",
      duration: "7 days",
      price: 25.50,
      available: true,
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      dosage: "1 capsule thrice daily",
      duration: "5 days",
      price: 85.00,
      available: true,
    },
    {
      id: 3,
      name: "Vitamin D3 60000 IU",
      dosage: "1 capsule weekly",
      duration: "4 weeks",
      price: 45.00,
      available: false,
    },
  ];

  const handleFileUpload = (file: File) => {
    setUploadState("processing");
    // Simulate OCR processing
    setTimeout(() => {
      setUploadState("results");
    }, 3000);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  if (uploadState === "processing") {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Scan className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Processing Prescription</h2>
          <p className="text-muted-foreground">Our AI is reading your prescription...</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="w-64 h-2 bg-muted rounded-full mx-auto mt-4 overflow-hidden"
          >
            <div className="h-full medical-gradient rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (uploadState === "results") {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Prescription Processed Successfully!</h1>
            <p className="text-muted-foreground">We found {mockDetectedMedicines.length} medicines from your prescription</p>
          </motion.div>

          <div className="space-y-4">
            {mockDetectedMedicines.map((medicine, index) => (
              <motion.div
                key={medicine.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`hover-lift ${medicine.available ? 'border-l-4 border-l-success' : 'border-l-4 border-l-warning'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          {medicine.name}
                          {medicine.available ? (
                            <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Available</span>
                          ) : (
                            <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full">Out of Stock</span>
                          )}
                        </h3>
                        <p className="text-muted-foreground mt-1">{medicine.dosage}</p>
                        <p className="text-sm text-muted-foreground">Duration: {medicine.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">₹{medicine.price}</div>
                        <Button 
                          variant={medicine.available ? "medical" : "outline"} 
                          size="sm" 
                          className="mt-2"
                          disabled={!medicine.available}
                        >
                          {medicine.available ? (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </>
                          ) : (
                            "Notify When Available"
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="medical" size="lg" className="group">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Proceed to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Upload className="w-5 h-5 mr-2" />
              Upload Another
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
            Upload Your Prescription
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI will automatically read your prescription and add medicines to your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Drag & Drop Area */}
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                    dragActive
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                >
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Drag & Drop Your Prescription
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    or click to browse files
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" asChild>
                      <span className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </span>
                    </Button>
                  </label>
                </div>

                {/* Camera Option */}
                <div className="text-center">
                  <Button variant="medical" size="lg" className="w-full group">
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use your camera to capture the prescription
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 medical-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Upload or Capture</h4>
                      <p className="text-muted-foreground text-sm">
                        Upload a photo of your prescription or capture it using your camera
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 healing-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">AI Processing</h4>
                      <p className="text-muted-foreground text-sm">
                        Our OCR technology reads doctor's name, medicines, and dosage instructions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 trust-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Auto-Add to Cart</h4>
                      <p className="text-muted-foreground text-sm">
                        Medicines are automatically found and added to your cart with prices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 secondary-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Review & Order</h4>
                      <p className="text-muted-foreground text-sm">
                        Review detected medicines, adjust quantities, and place your order
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">Supported Formats</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• JPEG, PNG images</li>
                    <li>• PDF documents</li>
                    <li>• Clear, readable text</li>
                    <li>• Maximum file size: 10MB</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUpload;