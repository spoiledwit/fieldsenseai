"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Cpu, 
  Settings, 
  Factory, 
  Stethoscope,
  Sun,
  ArrowRight
} from "lucide-react";

const targetMarkets = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Banks & Financial Institutions",
    description: "ATM networks, UPS systems, branch IT infrastructure",
    examples: ["HBL", "UBL", "MCB", "Regional Banks"],
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "ATM & Hardware Maintenance",
    description: "Installation, servicing, and technical support providers",
    examples: ["ATM Service Companies", "UPS Maintenance", "POS Support"],
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "IT Support & Infrastructure",
    description: "On-site technical support for enterprise systems",
    examples: ["Server Maintenance", "Network Support", "Security Systems"],
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700"
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Industrial Equipment Services",
    description: "Manufacturing and industrial system maintenance",
    examples: ["OEM Support", "Machine Diagnostics", "Equipment Servicing"],
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700"
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Medical Device Services",
    description: "Healthcare equipment maintenance and calibration",
    examples: ["Medical Equipment", "Diagnostic Tools", "Hospital Systems"],
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700"
  },
  {
    icon: <Sun className="h-8 w-8" />,
    title: "Infrastructure & Utilities",
    description: "Power, telecom, and renewable energy systems",
    examples: ["Solar Systems", "HVAC", "Telecom Infrastructure"],
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700"
  }
];

export default function TargetMarkets() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="mb-6 bg-gray-100 text-gray-700 hover:bg-gray-200">
            Target Markets
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for High-Compliance Industries
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered solution is designed for organizations that need to document 
            site visits, hardware issues, and client acknowledgments with precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetMarkets.map((market, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${market.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${market.textColor}`}>
                    {market.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {market.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {market.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {market.examples.map((example, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
            <ArrowRight className="h-4 w-4" />
            <span>Perfect for organizations requiring audit trails and compliance documentation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
