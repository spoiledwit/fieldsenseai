"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 sm:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Field Service Automation
          </Badge>
          
          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Field Service
            </span>{" "}
            Documentation
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Automate technical support logs with AI-powered document processing. 
            Extract structured data from handwritten service reports in seconds, 
            ensuring compliance and accuracy for high-stakes industries.
          </p>
          
          {/* Key benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-600" />
              <span>OCR + YOLO Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-600" />
              <span>High-Compliance Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-600" />
              <span>Field Service Teams</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              Schedule Demo Call
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-gray-500 mb-4">
              Trusted by service teams across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">HBL</div>
              <div className="text-2xl font-bold text-gray-400">UBL</div>
              <div className="text-2xl font-bold text-gray-400">MCB</div>
              <div className="text-2xl font-bold text-gray-400">ATM+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
