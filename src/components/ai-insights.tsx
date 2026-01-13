'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { HealthInsight } from '@/types/health';

interface InsightCardProps {
  insight: HealthInsight;
}

export function InsightCard({ insight }: InsightCardProps) {
  const icons = {
    warning: AlertCircle,
    info: Info,
    success: CheckCircle2,
  };

  const variants = {
    warning: 'destructive',
    info: 'default',
    success: 'default',
  } as const;

  const Icon = icons[insight.type];

  return (
    <Alert variant={variants[insight.type]} className={
      insight.type === 'success' ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950' : ''
    }>
      <Icon className="h-4 w-4" />
      <AlertTitle className="font-semibold">{insight.title}</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="text-sm mb-3">{insight.description}</p>
        <div className="space-y-2">
          <p className="text-sm font-medium">Recommendations:</p>
          <ul className="text-sm space-y-1 ml-4">
            {insight.recommendations.map((rec, idx) => (
              <li key={idx} className="list-disc">{rec}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {insight.date.toLocaleDateString()}
          </p>
          <Button variant="ghost" size="sm" className="h-8">
            Learn More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}

export function AIInsightsPanel({ insights }: { insights: HealthInsight[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Health Insights</CardTitle>
        <CardDescription>
          Analysis based on your recent vitals and reports. This is informational only and not medical advice.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No insights available yet. Keep tracking your vitals to receive personalized recommendations.
          </p>
        ) : (
          insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))
        )}
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> These AI-generated insights are for informational purposes only and should not be considered medical advice. 
            Always consult with a qualified healthcare professional before making any medical decisions or changes to your treatment.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
