export type VitalType = 
  | 'blood_pressure'
  | 'heart_rate'
  | 'glucose'
  | 'weight'
  | 'temperature'
  | 'oxygen_saturation'
  | 'bmi';

export interface VitalReading {
  id: string;
  type: VitalType;
  value: number | { systolic: number; diastolic: number };
  unit: string;
  timestamp: Date;
  notes?: string;
  flagged?: boolean;
}

export interface MedicalReport {
  id: string;
  title: string;
  date: Date;
  uploadDate: Date;
  fileUrl: string;
  fileType: string;
  category: 'lab_test' | 'imaging' | 'prescription' | 'doctor_visit' | 'other';
  findings?: string[];
  abnormalities?: string[];
}

export interface HealthInsight {
  id: string;
  type: 'warning' | 'info' | 'success';
  title: string;
  description: string;
  recommendations: string[];
  relatedVitals?: string[];
  date: Date;
}

export interface Reminder {
  id: string;
  title: string;
  type: 'vitals' | 'medication' | 'appointment' | 'report_upload';
  frequency: 'daily' | 'weekly' | 'monthly' | 'custom';
  time?: string;
  enabled: boolean;
}

export interface TrendData {
  date: string;
  value: number;
}

export interface VitalRange {
  type: VitalType;
  min: number;
  max: number;
  unit: string;
  label: string;
}
