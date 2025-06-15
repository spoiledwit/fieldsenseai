export interface DocumentData {
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
}
