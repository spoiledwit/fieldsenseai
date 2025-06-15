export interface BoundingBox {
  class_id: string;
  bbox: [number, number, number, number]; // [x1, y1, x2, y2]
  confidence: number;
  text: string;
}

export interface DocumentData {
  results: BoundingBox[];
}

export interface ProcessedData {
  model: string;
  branch_code: string;
  bank: string;
  city: string;
  address: string;
  technician_name: string;
}

export interface ProcessingStage {
  name: string;
  description: string;
  completed: boolean;
  loading: boolean;
}

export interface UploadState {
  uploading: boolean;
  processing: boolean;
  completed: boolean;
  error: string | null;
  data: DocumentData | null;
  showLoadingAnimation: boolean;
}
