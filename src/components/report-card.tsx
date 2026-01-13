'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, AlertCircle } from 'lucide-react';
import { MedicalReport } from '@/types/health';

interface ReportCardProps {
  report: MedicalReport;
}

export function ReportCard({ report }: ReportCardProps) {
  const categoryLabels = {
    lab_test: 'Lab Test',
    imaging: 'Imaging',
    prescription: 'Prescription',
    doctor_visit: 'Doctor Visit',
    other: 'Other',
  };

  const categoryColors = {
    lab_test: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
    imaging: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
    prescription: 'bg-green-500/10 text-green-700 dark:text-green-400',
    doctor_visit: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
    other: 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{report.title}</CardTitle>
            <CardDescription>
              Report Date: {report.date.toLocaleDateString()}
            </CardDescription>
          </div>
          <Badge variant="outline" className={categoryColors[report.category]}>
            {categoryLabels[report.category]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {report.findings && report.findings.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Key Findings:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              {report.findings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {report.abnormalities && report.abnormalities.length > 0 && (
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-700 dark:text-yellow-500">Abnormalities Detected:</h4>
                <ul className="text-sm mt-1 space-y-1 text-yellow-600 dark:text-yellow-400">
                  {report.abnormalities.map((abn, idx) => (
                    <li key={idx}>• {abn}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 pt-2">
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            View Report
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Uploaded: {report.uploadDate.toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
