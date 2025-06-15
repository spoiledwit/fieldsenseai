"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Brain, 
  Eye, 
  FileText, 
  CheckCircle, 
  Upload,
  Download
} from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Upload Service Log",
    description: "Simply take a photo or upload your handwritten field service report",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "YOLO Detection",
    description: "AI identifies form fields and text regions with precision boundary detection",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "OCR Processing",
    description: "Advanced OCR extracts handwritten text from each detected region",
    color: "bg-indigo-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Structured Output",
    description: "Get organized data ready for your systems - JSON, CSV, or database integration",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50"
  }
];

const features = [
  "Branch Code & Location Details",
  "Customer Request Documentation", 
  "Problem Description by Engineer",
  "Action Taken & Parts Replaced",
  "Personnel Information & Signatures",
  "Bank Details & Compliance Data"
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Handwritten Logs to Digital Data
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI pipeline combines YOLO object detection with advanced OCR to transform 
            your field service documentation into structured, searchable data.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={step.textColor}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Extracted Data Types */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Extracted Data Fields
            </h3>
            <p className="text-gray-600">
              Our AI automatically identifies and extracts all critical information from your service logs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-full">
              <Download className="h-4 w-4 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Export as JSON, CSV, or integrate directly with your systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
