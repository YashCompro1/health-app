import { VitalReading, MedicalReport, HealthInsight, Reminder, TrendData, VitalRange } from '@/types/health';

export const vitalRanges: VitalRange[] = [
  { type: 'blood_pressure', min: 90, max: 120, unit: 'mmHg', label: 'Blood Pressure (Systolic)' },
  { type: 'heart_rate', min: 60, max: 100, unit: 'bpm', label: 'Heart Rate' },
  { type: 'glucose', min: 70, max: 100, unit: 'mg/dL', label: 'Fasting Glucose' },
  { type: 'weight', min: 0, max: 300, unit: 'kg', label: 'Weight' },
  { type: 'temperature', min: 36.1, max: 37.2, unit: '°C', label: 'Body Temperature' },
  { type: 'oxygen_saturation', min: 95, max: 100, unit: '%', label: 'Oxygen Saturation' },
  { type: 'bmi', min: 18.5, max: 24.9, unit: '', label: 'BMI' },
];

export const mockVitals: VitalReading[] = [
  {
    id: '1',
    type: 'blood_pressure',
    value: { systolic: 128, diastolic: 82 },
    unit: 'mmHg',
    timestamp: new Date('2026-01-13T08:00:00'),
    flagged: true,
  },
  {
    id: '2',
    type: 'heart_rate',
    value: 72,
    unit: 'bpm',
    timestamp: new Date('2026-01-13T08:00:00'),
  },
  {
    id: '3',
    type: 'glucose',
    value: 95,
    unit: 'mg/dL',
    timestamp: new Date('2026-01-13T07:30:00'),
  },
  {
    id: '4',
    type: 'weight',
    value: 75.5,
    unit: 'kg',
    timestamp: new Date('2026-01-13T07:00:00'),
  },
  {
    id: '5',
    type: 'oxygen_saturation',
    value: 98,
    unit: '%',
    timestamp: new Date('2026-01-13T08:00:00'),
  },
];

export const mockReports: MedicalReport[] = [
  {
    id: '1',
    title: 'Complete Blood Count (CBC)',
    date: new Date('2026-01-10'),
    uploadDate: new Date('2026-01-11'),
    fileUrl: '/reports/cbc-jan-2026.pdf',
    fileType: 'application/pdf',
    category: 'lab_test',
    findings: ['Hemoglobin: 14.2 g/dL', 'WBC: 7,200/μL', 'Platelets: 250,000/μL'],
    abnormalities: ['Slightly elevated cholesterol'],
  },
  {
    id: '2',
    title: 'Annual Physical Exam',
    date: new Date('2026-01-05'),
    uploadDate: new Date('2026-01-06'),
    fileUrl: '/reports/physical-2026.pdf',
    fileType: 'application/pdf',
    category: 'doctor_visit',
    findings: ['Blood pressure slightly elevated', 'BMI: 24.8', 'General health: Good'],
  },
  {
    id: '3',
    title: 'Lipid Panel',
    date: new Date('2025-12-15'),
    uploadDate: new Date('2025-12-16'),
    fileUrl: '/reports/lipid-panel-dec-2025.pdf',
    fileType: 'application/pdf',
    category: 'lab_test',
    findings: ['Total Cholesterol: 205 mg/dL', 'LDL: 130 mg/dL', 'HDL: 45 mg/dL'],
    abnormalities: ['LDL cholesterol borderline high'],
  },
];

export const mockInsights: HealthInsight[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Elevated Blood Pressure Trend',
    description: 'Your blood pressure readings have been consistently above the normal range (120/80 mmHg) over the past 7 days.',
    recommendations: [
      'Reduce sodium intake to less than 2,300 mg per day',
      'Engage in at least 30 minutes of moderate exercise daily',
      'Practice stress-reduction techniques like meditation',
      'Schedule a follow-up with your healthcare provider',
    ],
    relatedVitals: ['blood_pressure'],
    date: new Date('2026-01-13'),
  },
  {
    id: '2',
    type: 'info',
    title: 'Cholesterol Levels Need Attention',
    description: 'Your recent lipid panel shows borderline high LDL cholesterol. Lifestyle changes may help improve these numbers.',
    recommendations: [
      'Increase intake of omega-3 fatty acids (fish, walnuts)',
      'Choose whole grains over refined carbohydrates',
      'Limit saturated and trans fats',
      'Consider adding soluble fiber to your diet',
    ],
    date: new Date('2026-01-11'),
  },
  {
    id: '3',
    type: 'success',
    title: 'Consistent Glucose Levels',
    description: 'Great job! Your blood glucose readings have remained within the healthy range for the past month.',
    recommendations: [
      'Continue your current diet and exercise routine',
      'Keep monitoring glucose levels regularly',
    ],
    relatedVitals: ['glucose'],
    date: new Date('2026-01-10'),
  },
];

export const mockReminders: Reminder[] = [
  {
    id: '1',
    title: 'Morning Blood Pressure',
    type: 'vitals',
    frequency: 'daily',
    time: '08:00',
    enabled: true,
  },
  {
    id: '2',
    title: 'Evening Glucose Check',
    type: 'vitals',
    frequency: 'daily',
    time: '20:00',
    enabled: true,
  },
  {
    id: '3',
    title: 'Weekly Weight Tracking',
    type: 'vitals',
    frequency: 'weekly',
    time: '07:00',
    enabled: true,
  },
  {
    id: '4',
    title: 'Upload Lab Results',
    type: 'report_upload',
    frequency: 'monthly',
    enabled: false,
  },
];

export const mockBloodPressureTrend: TrendData[] = [
  { date: '2026-01-06', value: 118 },
  { date: '2026-01-07', value: 122 },
  { date: '2026-01-08', value: 125 },
  { date: '2026-01-09', value: 120 },
  { date: '2026-01-10', value: 128 },
  { date: '2026-01-11', value: 130 },
  { date: '2026-01-12', value: 126 },
  { date: '2026-01-13', value: 128 },
];

export const mockGlucoseTrend: TrendData[] = [
  { date: '2026-01-06', value: 92 },
  { date: '2026-01-07', value: 88 },
  { date: '2026-01-08', value: 95 },
  { date: '2026-01-09', value: 90 },
  { date: '2026-01-10', value: 93 },
  { date: '2026-01-11', value: 91 },
  { date: '2026-01-12', value: 94 },
  { date: '2026-01-13', value: 95 },
];

export const mockWeightTrend: TrendData[] = [
  { date: '2025-12-13', value: 76.8 },
  { date: '2025-12-20', value: 76.5 },
  { date: '2025-12-27', value: 76.2 },
  { date: '2026-01-03', value: 76.0 },
  { date: '2026-01-10', value: 75.8 },
  { date: '2026-01-13', value: 75.5 },
];
