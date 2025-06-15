"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Scan, Brain, Eye, Target } from "lucide-react";
import Image from "next/image";

interface BoundingBox {
  class_id: string;
  bbox: [number, number, number, number]; // [x1, y1, x2, y2]
  confidence: number;
  text: string;
}

interface LoadingSimulationProps {
  onComplete: () => void;
  uploadedImage: string;
  apiResponse?: { results: BoundingBox[] } | null;
}

export default function LoadingSimulation({ onComplete, uploadedImage, apiResponse }: LoadingSimulationProps) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [scannedArea, setScannedArea] = useState(0);
  const [detectionBoxes, setDetectionBoxes] = useState<Array<{id: number, x: number, y: number, width: number, height: number, opacity: number}>>([]);
  const [showRealBoxes, setShowRealBoxes] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const stages = [
    { name: "Analyzing Image", icon: <Eye className="h-4 w-4" />, color: "blue" },
    { name: "Processing Data", icon: <Brain className="h-4 w-4" />, color: "green" },
  ];

  // Convert API bounding boxes to percentage-based positioning
  const convertBoundingBoxes = () => {
    if (!apiResponse?.results || !imageRef.current) return [];
    
    const imageElement = imageRef.current;
    
    return apiResponse.results.map((result, index) => {
      const [x1, y1, x2, y2] = result.bbox;
      
      // Convert absolute coordinates to percentages
      const left = (x1 / imageElement.naturalWidth) * 100;
      const top = (y1 / imageElement.naturalHeight) * 100;
      const width = ((x2 - x1) / imageElement.naturalWidth) * 100;
      const height = ((y2 - y1) / imageElement.naturalHeight) * 100;
      
      return {
        id: index,
        left,
        top,
        width,
        height,
        label: result.class_id,
        text: result.text,
        confidence: result.confidence
      };
    });
  };

  useEffect(() => {
    const simulateProcessing = async () => {
      // Stage 1: Image Analysis with scanning effect
      setCurrentStage(0);
      for (let i = 0; i <= 50; i++) {
        await new Promise(resolve => setTimeout(resolve, 60));
        setProgress(i);
        setScanlinePosition((i / 50) * 100);
        setScannedArea((i / 50) * 100);
      }

      // Stage 2: Wait for API response or show completion
      setCurrentStage(1);
      
      // If we have API response, show real bounding boxes
      if (apiResponse?.results) {
        setShowRealBoxes(true);
        
        // Show bounding boxes for 2 seconds
        for (let i = 50; i <= 100; i++) {
          await new Promise(resolve => setTimeout(resolve, 30));
          setProgress(i);
        }
        
        // Wait a bit longer to show the boxes
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setShowRealBoxes(false);
      } else {
        // Just complete the progress without boxes
        for (let i = 50; i <= 100; i++) {
          await new Promise(resolve => setTimeout(resolve, 60));
          setProgress(i);
        }
      }

      // Fade out effects
      setDetectionBoxes([]);
      setScanlinePosition(-10);
      setScannedArea(0);
      
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    simulateProcessing();
  }, [onComplete, apiResponse]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Scan className="h-6 w-6 text-blue-600 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-900">AI Processing</h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge 
              variant="outline" 
              className={`
                ${currentStage === 0 ? 'border-blue-500 text-blue-600' : ''}
                ${currentStage === 1 ? 'border-green-500 text-green-600' : ''}
              `}
            >
              {stages[currentStage]?.icon}
              <span className="ml-1">{stages[currentStage]?.name}</span>
            </Badge>
          </div>
        </div>

        {/* Image with Visual Effects */}
        <div className="relative max-h-96 overflow-hidden rounded-lg border mb-4">
          <div className="relative">
            <Image
              ref={imageRef}
              src={uploadedImage}
              alt="Document being processed"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            
            {/* Advanced Scanning Effect */}
            {currentStage === 0 && (
              <>
                {/* Base image enhancement for scanned area */}
                <div 
                  className="absolute left-0 right-0 scanned-area transition-all duration-75 ease-linear"
                  style={{ 
                    top: 0,
                    height: `${scannedArea}%`,
                  }}
                />
                
                {/* Text contrast enhancement overlay */}
                <div 
                  className="absolute left-0 right-0 pointer-events-none transition-all duration-75 ease-linear"
                  style={{ 
                    top: 0,
                    height: `${scannedArea}%`,
                    background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.12) 50%, rgba(191, 219, 254, 0.08) 100%)',
                    mixBlendMode: 'overlay'
                  }}
                />
                
                {/* Dynamic scanning line with enhanced effects */}
                <div 
                  className="absolute left-0 right-0 transition-all duration-75 ease-linear z-10"
                  style={{ top: `${scanlinePosition}%` }}
                >
                  {/* Pre-scan glow */}
                  <div className="absolute -top-12 left-0 right-0 h-24 bg-gradient-radial from-blue-400/20 via-blue-300/10 to-transparent blur-md"></div>
                  
                  {/* Main scanning beam */}
                  <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-2xl shadow-blue-500/60">
                    {/* Central scanning core */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full shadow-xl shadow-blue-500/60">
                      <div className="absolute inset-1 bg-gradient-to-br from-white to-blue-100 rounded-full animate-pulse">
                        <div className="absolute inset-2 bg-blue-400 rounded-full particle-float"></div>
                      </div>
                    </div>
                    
                    {/* Scanning particles */}
                    <div className="absolute -top-1 left-1/4 w-1 h-1 bg-cyan-300 rounded-full particle-float" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute -top-1 right-1/4 w-1 h-1 bg-cyan-300 rounded-full particle-float" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute -bottom-1 left-1/3 w-1 h-1 bg-blue-300 rounded-full particle-float" style={{ animationDelay: '0.1s' }}></div>
                    <div className="absolute -bottom-1 right-1/3 w-1 h-1 bg-blue-300 rounded-full particle-float" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  {/* Scanning trail effect */}
                  <div className="absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-blue-400/0 via-blue-400/40 to-blue-400/0 scan-beam"></div>
                  
                  {/* Edge enhancement lines */}
                  <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-sm"></div>
                  <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent blur-sm"></div>
                </div>

                {/* Text enhancement mask for better contrast */}
                <div 
                  className="absolute left-0 right-0 pointer-events-none text-enhance"
                  style={{ 
                    top: 0,
                    height: `${scannedArea}%`,
                    background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.06) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 197, 253, 0.06) 100%)',
                    backdropFilter: 'contrast(1.2) brightness(0.98)'
                  }}
                />
                
                {/* Scanning progress indicator lines */}
                {scannedArea > 10 && (
                  <div className="absolute left-2 right-2 border-l-2 border-r-2 border-blue-300/50 pointer-events-none"
                       style={{ top: '5%', height: `${scannedArea - 10}%` }} />
                )}
              </>
            )}

            {/* Real Bounding Boxes from API */}
            {showRealBoxes && apiResponse?.results && convertBoundingBoxes().map((box) => (
              <div
                key={box.id}
                className="absolute border-2 border-green-500 bg-green-500/10 transition-all duration-300 animate-pulse"
                style={{
                  left: `${box.left}%`,
                  top: `${box.top}%`,
                  width: `${box.width}%`,
                  height: `${box.height}%`,
                }}
              >
                {/* Corner indicators */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                
                {/* Label */}
                <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {box.label}: {box.text} ({Math.round(box.confidence * 100)}%)
                </div>
              </div>
            ))}

            {/* Processing Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Processing Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Stage Indicators */}
        <div className="flex justify-center space-x-4">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                ${index < currentStage ? 'bg-green-500 text-white' : 
                  index === currentStage ? 'bg-blue-500 text-white animate-pulse' : 
                  'bg-gray-200 text-gray-400'}
              `}>
                {index < currentStage ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  stage.icon
                )}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${
                index <= currentStage ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
