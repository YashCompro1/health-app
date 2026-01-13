'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface VitalCardProps {
  title: string;
  value: string;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  status?: 'normal' | 'warning' | 'critical';
  lastUpdated: string;
}

export function VitalCard({ title, value, unit, trend, status = 'normal', lastUpdated }: VitalCardProps) {
  const statusColors = {
    normal: 'bg-green-500/10 text-green-700 dark:text-green-400',
    warning: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
    critical: 'bg-red-500/10 text-red-700 dark:text-red-400',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold">{value}</div>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{lastUpdated}</p>
          <div className="flex items-center gap-2">
            {trend && (
              <TrendIcon className={`h-4 w-4 ${
                trend === 'up' ? 'text-red-500' : trend === 'down' ? 'text-green-500' : 'text-gray-500'
              }`} />
            )}
            <Badge variant="outline" className={statusColors[status]}>
              {status === 'normal' ? 'Normal' : status === 'warning' ? 'Monitor' : 'Alert'}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
