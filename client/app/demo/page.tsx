"use client";

import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";
import DataDisplay from "@/components/DataDisplay";
import { DocumentData, UploadState } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Shield, Clock, Sparkles, Brain, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const [uploadState, setUploadState] = useState<UploadState>({
    uploading: false,
    processing: false,
    completed: false,
    error: null,
    data: null,
  });

  const [uploadedImageData, setUploadedImageData] = useState<string>("");

  const handleImageUpload = async (file: File, imageDataUrl: string) => {
    setUploadedImageData(imageDataUrl);
    setUploadState({
      uploading: false,
      processing: true,
      completed: false,
      error: null,
      data: null,
    });

    try {
      // Create FormData and append the file
      const formData = new FormData();
      formData.append('file', file);

      // Call the real API
      const response = await fetch('http://34.29.158.230:8000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: DocumentData = await response.json();

      setUploadState({
        uploading: false,
        processing: false,
        completed: true,
        error: null,
        data: data,
      });
    } catch (error) {
      console.error('Error processing image:', error);
      setUploadState({
        uploading: false,
        processing: false,
        completed: false,
        error: error instanceof Error ? error.message : 'Failed to process image',
        data: null,
      });
    }
  };

  const handleStartNew = () => {
    setUploadedImageData("");
    setUploadState({
      uploading: false,
      processing: false,
      completed: false,
      error: null,
      data: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Enhanced Header with Glass Morphism */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">FS</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    FieldSense AI Demo
                  </h1>
                  <p className="text-sm text-gray-600">Experience AI-powered document processing</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Demo Features */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-full border border-gray-200/50">
                <Brain className="h-4 w-4 text-indigo-600" />
                <span className="font-medium">YOLO + OCR</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-full border border-gray-200/50">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-medium">~15s Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-full border border-gray-200/50">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="font-medium">95%+ Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      {/* Demo Content */}
      <div className="relative py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {!uploadState.processing && !uploadState.completed && (
            <div className="relative">
              {/* Additional subtle background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/30 to-transparent rounded-2xl"></div>
              <ImageUpload
                onImageUpload={handleImageUpload}
                isProcessing={uploadState.processing}
              />
            </div>
          )}

          {uploadState.processing && (
            <div className="relative">
              <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">Processing Your Document</h3>
                  <p className="text-gray-600">AI is analyzing your field service log...</p>
                </div>
              </div>
            </div>
          )}

          {uploadState.error && (
            <div className="relative">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-900 mb-2">Processing Failed</h3>
                <p className="text-red-700 mb-4">{uploadState.error}</p>
                <Button onClick={handleStartNew} className="bg-red-600 hover:bg-red-700">
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {uploadState.completed && uploadState.data && (
            <div className="relative">
              <DataDisplay data={uploadState.data} onStartNew={handleStartNew} />
            </div>
          )}
        </div>
      </div>

      {/* Optional: Add a subtle footer for the demo page */}
      {!uploadState.processing && !uploadState.completed && !uploadState.error && (
        <div className="py-12 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-4">
              This demo uses a live AI model for document processing. Processing typically takes 5-15 seconds.
            </p>
            <div className="flex justify-center items-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Secure Processing
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Real-time AI
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Live Model
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
