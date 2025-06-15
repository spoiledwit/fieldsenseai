"use client";

import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileImage, X, Sparkles, Brain, Zap } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (file: File, imageDataUrl: string) => void;
  isProcessing: boolean;
}

export default function ImageUpload({ onImageUpload, isProcessing }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    },
    [onImageUpload]
  );

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setUploadedImage(imageDataUrl);
        onImageUpload(file, imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    setSelectedFile(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Enhanced Header */}
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200 px-4 py-2 border-0">
          <Brain className="mr-2 h-4 w-4" />
          AI Document Processing
        </Badge>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
          Upload Your Field Service Log
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our advanced AI will scan your handwritten document and extract structured data using computer vision and OCR technology
        </p>
      </div>

      <Card className="bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-xl">
        <CardContent className="p-8">
          {!uploadedImage ? (
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive
                  ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 scale-[1.02]"
                  : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
              } ${isProcessing ? "opacity-50 pointer-events-none" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {/* Enhanced Upload Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <FileImage className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Drop your document here
                </h3>
                <p className="text-gray-600 text-lg">
                  or click to browse from your device
                </p>
                
                {/* Supported formats */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Badge variant="outline" className="text-xs bg-white">JPG</Badge>
                  <Badge variant="outline" className="text-xs bg-white">PNG</Badge>
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isProcessing}
              />

              <Button 
                className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg" 
                disabled={isProcessing}
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Choose File
              </Button>

              {/* Quick tips */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-indigo-600" />
                  <span>Instant processing</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <span>AI-powered extraction</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-green-600" />
                  <span>High accuracy</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <FileImage className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Document Ready</h3>
                    <p className="text-gray-600">Ready for AI processing</p>
                  </div>
                </div>
                {!isProcessing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearImage}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                )}
              </div>

              <Card className="overflow-hidden border-gray-200">
                <div className="relative max-h-96 bg-gray-50">
                  <Image
                    src={uploadedImage}
                    alt="Uploaded document"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <Card className="bg-white p-6 shadow-xl">
                        <CardContent className="text-center">
                          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                          <h4 className="font-semibold text-gray-900 mb-2">Processing Document</h4>
                          <p className="text-sm text-gray-600">AI is analyzing your document...</p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </Card>

              {selectedFile && (
                <Card className="bg-gradient-to-r from-gray-50 to-indigo-50 border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-indigo-100 text-indigo-700">File Info</Badge>
                        <span className="font-medium text-gray-900">{selectedFile.name}</span>
                      </div>
                      <span className="text-gray-600 font-medium">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
