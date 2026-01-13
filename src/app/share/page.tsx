'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Share2, Download, Mail, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function SharePage() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(2026, 0, 1),
    to: new Date(2026, 0, 13),
  });
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Share Health Summary</h1>
          <p className="text-muted-foreground">
            Create a comprehensive health report to share with healthcare providers or caregivers
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Date Range</CardTitle>
              <CardDescription>
                Choose the time period for your health summary
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>From Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !dateRange.from && 'text-muted-foreground'
                        )}
                      >
                        {dateRange.from ? format(dateRange.from, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateRange.from}
                        onSelect={(date) => setDateRange({ ...dateRange, from: date })}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>To Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !dateRange.to && 'text-muted-foreground'
                        )}
                      >
                        {dateRange.to ? format(dateRange.to, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateRange.to}
                        onSelect={(date) => setDateRange({ ...dateRange, to: date })}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Include</CardTitle>
              <CardDescription>
                Select the health data you want to include in the report
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="vitals" defaultChecked />
                  <label
                    htmlFor="vitals"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Vitals (Blood Pressure, Heart Rate, etc.)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="trends" defaultChecked />
                  <label htmlFor="trends" className="text-sm font-medium leading-none">
                    Trend Charts and Graphs
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reports" defaultChecked />
                  <label htmlFor="reports" className="text-sm font-medium leading-none">
                    Medical Reports and Lab Results
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="insights" defaultChecked />
                  <label htmlFor="insights" className="text-sm font-medium leading-none">
                    AI-Generated Health Insights
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="medications" />
                  <label htmlFor="medications" className="text-sm font-medium leading-none">
                    Medication History
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notes" />
                  <label htmlFor="notes" className="text-sm font-medium leading-none">
                    Personal Health Notes
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Personal Note</CardTitle>
              <CardDescription>
                Include any additional information for your healthcare provider
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="E.g., specific symptoms, questions for your doctor, concerns..."
                className="min-h-25"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Password Protection</Label>
                  <p className="text-sm text-muted-foreground">
                    Require a password to view the report
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Expiration Date</Label>
                  <p className="text-sm text-muted-foreground">
                    Set when the shared link expires
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Anonymize Personal Data</Label>
                  <p className="text-sm text-muted-foreground">
                    Remove name and contact information
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {!isGenerated ? (
            <Button className="w-full" size="lg" onClick={handleGenerate}>
              <Share2 className="mr-2 h-5 w-5" />
              Generate Health Summary
            </Button>
          ) : (
            <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-900">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <CardTitle className="text-green-700 dark:text-green-400">
                    Report Generated Successfully!
                  </CardTitle>
                </div>
                <CardDescription className="text-green-600 dark:text-green-500">
                  Your health summary is ready to share
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Shareable Link</Label>
                  <div className="flex gap-2">
                    <Input
                      readOnly
                      value="https://healthtracker.app/share/abc123xyz"
                      className="bg-background"
                    />
                    <Button variant="outline" size="icon">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send via Email
                  </Button>
                </div>

                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Privacy Note:</strong> This link will expire in 30 days. 
                    You can revoke access at any time from your settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
