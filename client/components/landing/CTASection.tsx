"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Transform Your Field Service Documentation?
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Join forward-thinking organizations that have already automated their 
            field service workflows with our AI-powered solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Demo Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Try Live Demo
              </h3>
              <p className="text-indigo-200 text-sm mb-4">
                Experience the AI processing pipeline with your own documents
              </p>
              <Link href="/demo">
                <Button className="w-full text-black bg-white text-indigo-900 hover:bg-indigo-50">
                  Start Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Consultation Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Schedule Consultation
              </h3>
              <p className="text-indigo-200 text-sm mb-4">
                Get a personalized demo tailored to your industry needs
              </p>
              <a href="mailto:demo@fieldsense.ai?subject=Schedule Consultation&body=Hi, I'm interested in scheduling a consultation for FieldSense AI. Please let me know your available times.">
                <Button variant="outline" className="w-full border-white/30">
                  Book Meeting
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
          
          {/* Contact Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Get in Touch
              </h3>
              <p className="text-indigo-200 text-sm mb-4">
                Have questions? Our team is ready to help you get started
              </p>
              <a href="tel:+1-555-FIELD-AI">
                <Button variant="outline" className="w-full border-white/30">
                  Call Sales: +1 (555) FIELD-AI
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
