"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle, 
  Download, 
  Copy, 
  FileText,
  Building2,
  MapPin,
  Monitor,
  Users,
  Landmark,
  Target,
} from "lucide-react";
import { DocumentData, BoundingBox } from "@/types";

interface DataDisplayProps {
  data: DocumentData;
  onStartNew: () => void;
}

export default function DataDisplay({ data, onStartNew }: DataDisplayProps) {
  const fieldIcons: Record<string, React.ReactNode> = {
    model: <Monitor className="h-4 w-4" />,
    branch_code: <Building2 className="h-4 w-4" />,
    bank: <Landmark className="h-4 w-4" />,
    city: <MapPin className="h-4 w-4" />,
    address: <MapPin className="h-4 w-4" />,
    technician_name: <Users className="h-4 w-4" />,
  };

  const fieldLabels: Record<string, string> = {
    model: "ATM Model",
    branch_code: "Branch Code", 
    bank: "Bank Name",
    city: "City",
    address: "Address",
    technician_name: "Technician Name",
  };

  // Convert the bounding box results to a simple object for display
  const extractedData = data.results.reduce((acc, result) => {
    acc[result.class_id] = result.text;
    return acc;
  }, {} as Record<string, string>);

  const copyToClipboard = async () => {
    const textData = Object.entries(extractedData)
      .map(([key, value]) => `${fieldLabels[key]}: ${value}`)
      .join('\n');
    
    try {
      await navigator.clipboard.writeText(textData);
      console.log('Data copied to clipboard');
    } catch (err) {
      console.error('Failed to copy data: ', err);
    }
  };

  const downloadAsJSON = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'field-service-extraction-results.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <CardTitle className="text-2xl">Extraction Complete</CardTitle>
            <Badge className="bg-green-600 hover:bg-green-700">
              Success
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={copyToClipboard}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Data
            </Button>
            <Button variant="outline" onClick={downloadAsJSON}>
              <Download className="h-4 w-4 mr-2" />
              Download JSON
            </Button>
            <Button onClick={onStartNew}>
              <FileText className="h-4 w-4 mr-2" />
              Process New Document
            </Button>
          </div>
        </div>
        <p className="text-gray-600">
          Successfully extracted ATM service information from your field service log
        </p>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] font-semibold">Field</TableHead>
                <TableHead className="font-semibold">Extracted Value</TableHead>
                <TableHead className="font-semibold">Confidence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.results.map((result, index) => (
                <TableRow key={index} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-gray-100 text-gray-600">
                        {fieldIcons[result.class_id] || <Target className="h-4 w-4" />}
                      </div>
                      {fieldLabels[result.class_id] || result.class_id}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-md">
                      {result.text ? (
                        <span className="text-gray-900">{result.text}</span>
                      ) : (
                        <span className="text-gray-400 italic">No data extracted</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`${
                        result.confidence > 0.8 ? 'border-green-500 text-green-700' :
                        result.confidence > 0.6 ? 'border-yellow-500 text-yellow-700' :
                        'border-red-500 text-red-700'
                      }`}
                    >
                      {(result.confidence * 100).toFixed(1)}%
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {data.results.filter(result => result.text && result.text.trim().length > 0).length}
              </div>
              <div className="text-sm text-gray-600">Fields Detected</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {data.results.length > 0 ? 
                  (data.results.reduce((sum, result) => sum + result.confidence, 0) / data.results.length * 100).toFixed(1) 
                  : '0'}%
              </div>
              <div className="text-sm text-gray-600">Avg Confidence</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {data.results.filter(result => result.confidence > 0.8).length}
              </div>
              <div className="text-sm text-gray-600">High Confidence</div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Processing Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Detection Model:</span>
              <div className="font-medium">YOLOv8</div>
            </div>
            <div>
              <span className="text-gray-600">OCR Engine:</span>
              <div className="font-medium">Advanced OCR</div>
            </div>
            <div>
              <span className="text-gray-600">API Endpoint:</span>
              <div className="font-medium">Production</div>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <div className="font-medium text-green-600">Live Model</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
