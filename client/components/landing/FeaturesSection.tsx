"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Database,
  CheckCircle,
  Target
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Processing",
    description: "YOLO object detection + advanced OCR for 95%+ accuracy",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "15-Second Processing",
    description: "Transform handwritten logs to structured data in seconds",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Compliance Ready",
    description: "Built for high-stakes industries with audit trail requirements",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "System Integration",
    description: "API-first design for seamless integration with existing workflows",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Field Team Friendly",
    description: "Simple mobile interface for technicians on-site",
    color: "bg-indigo-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Analytics & Insights",
    description: "Track service patterns, common issues, and team performance",
    color: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-red-50"
  }
];

const benefits = [
  {
    metric: "90%",
    label: "Time Reduction",
    description: "In manual data entry tasks"
  },
  {
    metric: "95%+",
    label: "Accuracy Rate",
    description: "In data extraction"
  },
  {
    metric: "100%",
    label: "Compliance",
    description: "Audit trail documentation"
  },
  {
    metric: "24/7",
    label: "Processing",
    description: "Available anytime, anywhere"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="mb-6 bg-gray-100 text-gray-700 hover:bg-gray-200">
            Key Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for Modern Field Service
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Powerful AI meets practical field service needs. Built for teams that demand 
            accuracy, speed, and compliance in their documentation workflows.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.textColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Benefits Stats */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Measurable Impact on Your Operations
            </h3>
            <p className="text-gray-600">
              See the difference AI-powered automation makes for field service teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.label}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">No manual transcription</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Target className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-gray-700">Instant digitization</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Compliance ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
